let currentUser = null;
let postId = null;
let isAdmin = false;

/**
 * ✅ 로그인 확인 및 유저 정보 로딩
 */
async function checkLogin() {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
        alert("로그인이 필요합니다.");
        location.href = "/login/login.html";
        return;
    }
    currentUser = data.user;
    isAdmin = currentUser.user_metadata?.isAdmin || false;
}

/**
 * ✅ 게시글 로딩
 */
async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    postId = urlParams.get("id");
    if (!postId) return alert("잘못된 접근입니다.");

    const { data: post, error } = await supabase.from("board").select("*").eq("id", postId).single();
    if (error || !post) return alert("게시글을 불러올 수 없습니다.");

    // 조회수 증가
    await supabase.from("board").update({ hits: (post.hits || 0) + 1 }).eq("id", postId);

    // DOM 삽입
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-author").textContent = post.author_nickname || "익명";
    document.getElementById("post-date").textContent = new Date(post.created_at).toLocaleDateString("ko-KR");
    document.getElementById("post-hits").textContent = (post.hits || 0) + 1;
    document.getElementById("post-memo").textContent = post.memo;

    // ✅ 이미지 링크 자동 연결
    const matched = window.skins?.find((s) => s.name === post.skin_name);
    document.getElementById("skin-image").src = matched?.img || "/images/default.png";

    // 본인 또는 관리자만 수정/삭제 가능
    if (post.user_id === currentUser.id || isAdmin) {
        document.getElementById("edit-post-btn").classList.remove("hidden");
        document.getElementById("delete-post-btn").classList.remove("hidden");
    }

    // 좋아요 및 댓글 로딩
    loadLike(post.id);
    loadComments(post.id);

    // 수정/삭제 버튼 이벤트
    document.getElementById("edit-post-btn").addEventListener("click", () => editPost(post));
    document.getElementById("delete-post-btn").addEventListener("click", () => deletePost(post.id));
}

/**
 * ✅ 좋아요 상태 로딩
 */
async function loadLike(postId) {
    const { data: likes } = await supabase.from("board_likes").select("*").eq("post_id", postId);
    const isLiked = likes?.some((like) => like.user_id === currentUser.id);
    document.getElementById("like-btn").classList.toggle("liked", isLiked);
    document.getElementById("like-count").textContent = likes?.length || 0;
}

/**
 * ✅ 좋아요 토글
 */
document.getElementById("like-btn").addEventListener("click", async () => {
    const { data: existing } = await supabase
        .from("board_likes")
        .select("*")
        .eq("post_id", postId)
        .eq("user_id", currentUser.id)
        .single();

    if (existing) {
        await supabase.from("board_likes").delete().eq("id", existing.id);
    } else {
        await supabase.from("board_likes").insert({ post_id: postId, user_id: currentUser.id });
    }
    loadLike(postId);
});

/**
 * ✅ 댓글 작성
 */
document.getElementById("comment-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const content = document.getElementById("comment-input").value.trim();
    if (!content) return;

    await supabase.from("comments").insert({
        post_id: postId,
        user_id: currentUser.id,
        author_nickname: currentUser.user_metadata.full_name || currentUser.email,
        content
    });

    document.getElementById("comment-input").value = "";
    loadComments(postId);
});

/**
 * ✅ 댓글 로딩
 */
async function loadComments(postId) {
    const { data: comments } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: true });

    const container = document.getElementById("comment-list");
    container.innerHTML = "";

    if (!comments || comments.length === 0) {
        container.innerHTML = "<p style='color:#999'>댓글이 없습니다.</p>";
        return;
    }

    comments.forEach((comment) => {
        const item = document.createElement("div");
        item.className = "comment-item";

        const canDelete = comment.user_id === currentUser.id || isAdmin;

        item.innerHTML = `
      <div>
        <div class="comment-header">
          <span class="comment-author">${comment.author_nickname}</span>
          <span class="comment-date">${new Date(comment.created_at).toLocaleDateString("ko-KR")}</span>
        </div>
        <div class="comment-content">${comment.content}</div>
        ${
            canDelete
                ? `<button class="comment-delete-btn" onclick="deleteComment(${comment.id})">삭제</button>`
                : ""
        }
      </div>`;
        container.appendChild(item);
    });
}

/**
 * ✅ 댓글 삭제
 */
async function deleteComment(commentId) {
    if (!confirm("댓글을 삭제하시겠습니까?")) return;
    await supabase.from("comments").delete().eq("id", commentId);
    loadComments(postId);
}

/**
 * ✅ 게시글 수정
 */
function editPost(post) {
    const newMemo = prompt("메모를 수정하세요:", post.memo || "");
    if (newMemo === null) return;

    supabase
        .from("board")
        .update({ memo: newMemo })
        .eq("id", post.id)
        .then(({ error }) => {
            if (error) {
                alert("수정 실패");
                return;
            }
            alert("수정 완료");
            location.reload();
        });
}

/**
 * ✅ 게시글 삭제
 */
async function deletePost(id) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    await supabase.from("board").delete().eq("id", id);
    alert("삭제 완료");
    location.href = "board.html";
}

// ✅ 실행 시작
document.addEventListener("DOMContentLoaded", async () => {
    await checkLogin();
    await loadPost();
});

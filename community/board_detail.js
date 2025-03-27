/*******************************************
 * board_detail.js
 * - "board_detail.html"와 연동
 * - 게시글 상세 정보, 좋아요, 댓글, 수정/삭제
 *******************************************/

// Supabase 설정
const { createClient } = window.supabase;
const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw"; /* 실제 키로 변경 */
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;
let postId = null;
let isAdmin = false; // 관리자 여부 (실제로는 user.role이나 별도 테이블로 관리)

document.addEventListener("DOMContentLoaded", async () => {
    await checkLogin();
    loadPost();
});

// 1) 로그인 체크
async function checkLogin() {
    const {
        data: { user },
        error
    } = await supabase.auth.getUser();
    if (error || !user) {
        alert("로그인이 필요합니다.");
        location.href = "/login/login.html";
        return;
    }
    currentUser = user;

    // 예: 관리자 판별 (예시)
    // 실제로는 user_metadata.isAdmin 같은 값으로 확인
    if (currentUser.user_metadata?.isAdmin) {
        isAdmin = true;
    }
}

// 2) 게시글 로드
async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    postId = urlParams.get("id");
    if (!postId) {
        alert("잘못된 접근입니다.");
        return;
    }

    // board 테이블에서 해당 게시글 조회
    const { data: post, error } = await supabase.from("board").select("*").eq("id", postId).single();

    if (error || !post) {
        alert("게시글을 불러오지 못했습니다.");
        return;
    }

    // 조회수 업데이트 (간단 예)
    await supabase
        .from("board")
        .update({ hits: (post.hits || 0) + 1 })
        .eq("id", postId);

    // DOM 반영
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-author").textContent = post.author_nickname || "익명";
    document.getElementById("post-date").textContent = new Date(post.created_at).toLocaleDateString("ko-KR");
    document.getElementById("post-hits").textContent = (post.hits || 0) + 1;
    document.getElementById("post-memo").textContent = post.memo;
    // 이미지가 있다면
    document.getElementById("skin-image").src = post.skin_img || "/images/default.png";

    // 수정/삭제 버튼 표시 여부
    // - 작성자이거나 관리자이면 표시
    if (post.user_id === currentUser.id || isAdmin) {
        document.getElementById("edit-post-btn").classList.remove("hidden");
        document.getElementById("delete-post-btn").classList.remove("hidden");
    }

    // 좋아요 로드
    loadLike(post.id);

    // 댓글 로드
    loadComments(post.id);

    // 수정 버튼 이벤트
    document.getElementById("edit-post-btn").addEventListener("click", () => editPost(post));
    // 삭제 버튼 이벤트
    document.getElementById("delete-post-btn").addEventListener("click", () => deletePost(post.id));
}

// 3) 좋아요 로드
async function loadLike(postId) {
    const { data: likes } = await supabase.from("board_likes").select("*", { count: "exact" }).eq("post_id", postId);

    const isLiked = likes?.some((like) => like.user_id === currentUser.id);
    document.getElementById("like-btn").classList.toggle("liked", isLiked);
    document.getElementById("like-count").textContent = likes?.length || 0;
}

// 4) 좋아요 토글
document.getElementById("like-btn").addEventListener("click", async () => {
    if (!postId) return;

    // 기존 좋아요 있는지 확인
    const { data: existing } = await supabase
        .from("board_likes")
        .select("*")
        .eq("post_id", postId)
        .eq("user_id", currentUser.id)
        .single();

    if (existing) {
        // 좋아요 취소
        await supabase.from("board_likes").delete().eq("id", existing.id);
    } else {
        // 좋아요 등록
        await supabase.from("board_likes").insert({
            post_id: postId,
            user_id: currentUser.id
        });
    }
    loadLike(postId);
});

// 5) 댓글 작성
document.getElementById("comment-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!postId) return;

    const content = document.getElementById("comment-input").value.trim();
    if (!content) return alert("댓글 내용을 입력하세요.");

    const nickname = currentUser.user_metadata?.full_name || currentUser.email;

    await supabase.from("comments").insert({
        post_id: postId,
        user_id: currentUser.id,
        author_nickname: nickname,
        content
    });
    document.getElementById("comment-input").value = "";
    loadComments(postId);
});

// 6) 댓글 불러오기
async function loadComments(postId) {
    const { data: comments } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: true });

    const list = document.getElementById("comment-list");
    list.innerHTML = "";

    if (!comments || comments.length === 0) {
        list.innerHTML = `<div style="padding:8px; color:#888;">댓글이 없습니다.</div>`;
        return;
    }

    comments.forEach((comment) => {
        const item = document.createElement("div");
        item.className = "comment-item";

        // 삭제 버튼 노출 조건 (작성자 or 관리자)
        const canDelete = comment.user_id === currentUser.id || isAdmin;

        item.innerHTML = `
      <div>
        <div class="comment-header">
          <span class="comment-author">${comment.author_nickname}</span>
          <span class="comment-date">${new Date(comment.created_at).toLocaleDateString("ko-KR")}</span>
        </div>
        <div class="comment-content">${comment.content}</div>
      </div>
      ${canDelete ? `<button class="comment-delete-btn" onclick="deleteComment(${comment.id})">삭제</button>` : ""}
    `;
        list.appendChild(item);
    });
}

// 7) 댓글 삭제
async function deleteComment(commentId) {
    if (!confirm("댓글을 삭제하시겠습니까?")) return;

    await supabase.from("comments").delete().eq("id", commentId);
    loadComments(postId);
}

// 8) 게시글 수정
function editPost(post) {
    const newMemo = prompt("메모 수정", post.memo || "");
    if (newMemo === null) return; // 취소 시

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

// 9) 게시글 삭제
async function deletePost(id) {
    if (!confirm("정말 게시글을 삭제하시겠습니까?")) return;

    // 작성자 또는 관리자만 삭제 가능
    // => 이미 loadPost()에서 버튼 노출 조건으로 통제
    const { error } = await supabase.from("board").delete().eq("id", id);
    if (error) {
        alert("삭제 실패");
        return;
    }
    alert("삭제되었습니다.");
    window.location.href = "board.html";
}

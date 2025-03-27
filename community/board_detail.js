const { createClient } = window.supabase;
const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;
let postId = null;

// 로그인 확인 및 사용자 정보 저장
async function checkLogin() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    alert("로그인이 필요합니다.");
    window.location.href = "/login/login.html";
    return;
  }
  currentUser = data.user;
}

// 게시글 로드
async function loadPost() {
  const urlParams = new URLSearchParams(window.location.search);
  postId = urlParams.get("id");
  if (!postId) return;

  const { data, error } = await supabase
    .from("board")
    .select("*")
    .eq("id", postId)
    .single();
  if (error) {
    alert("게시글을 불러오지 못했습니다.");
    return;
  }
  const post = data;
  document.getElementById("post-title").textContent = post.skin_name;
  document.getElementById("post-author").textContent = post.author_nickname;
  document.getElementById("post-days").textContent = `D+${post.days}`;
  document.getElementById("post-date").textContent = new Date(post.created_at).toLocaleDateString("ko-KR");
  document.getElementById("post-memo").textContent = post.memo;
  document.getElementById("skin-image").src = post.skin_img;

  if (post.user_id === currentUser.id) {
    document.getElementById("edit-post-btn").classList.remove("hidden");
  }
  loadLike(post.id);
  loadComments(post.id);
}

// 좋아요 상태 로드
async function loadLike(postId) {
  const { data: likes } = await supabase
    .from("board_likes")
    .select("*", { count: "exact" })
    .eq("post_id", postId);
  const isLiked = likes.some(like => like.user_id === currentUser.id);
  document.getElementById("like-btn").classList.toggle("liked", isLiked);
  document.getElementById("like-count").textContent = likes.length;
}

// 좋아요 토글
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
    await supabase.from("board_likes").insert({
      post_id: postId,
      user_id: currentUser.id
    });
  }
  loadLike(postId);
});

// 댓글 작성
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

// 댓글 불러오기 및 템플릿 적용
async function loadComments(postId) {
  const { data: comments } = await supabase
    .from("comments")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });
  const list = document.getElementById("comment-list");
  list.innerHTML = "";
  comments.forEach(comment => {
    const item = document.createElement("div");
    item.className = "comment-item";
    item.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">${comment.author_nickname}</span>
        <span class="comment-date">${new Date(comment.created_at).toLocaleDateString("ko-KR")}</span>
      </div>
      <div class="comment-content">${comment.content}</div>
      ${comment.user_id === currentUser.id ? `<button class="comment-delete-btn" onclick="deleteComment(${comment.id})">삭제</button>` : ""}
    `;
    list.appendChild(item);
  });
}

// 댓글 삭제
async function deleteComment(commentId) {
  await supabase.from("comments").delete().eq("id", commentId);
  loadComments(postId);
}

// 시작
document.addEventListener("DOMContentLoaded", async () => {
  await checkLogin();
  await loadPost();
});

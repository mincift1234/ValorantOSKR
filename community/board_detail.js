/*******************************************
 * board_detail.js
 * - "board_detail.html"와 연동
 * - 게시글 상세 정보, 좋아요, 댓글, 수정/삭제
 *******************************************/

// Supabase 설정
const { createClient } = window.supabase;
const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw"; /* 실제 키로 변경 */
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const urlParams = new URLSearchParams(location.search);
const postId = urlParams.get("id");

const postArea = document.getElementById("post-area");
const commentList = document.getElementById("comment-list");
const commentInput = document.getElementById("comment-input");
const submitComment = document.getElementById("submit-comment");

const likeBtn = document.getElementById("like-btn");
const bookmarkBtn = document.getElementById("bookmark-btn");
const reportBtn = document.getElementById("report-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");

let currentUser = null;
let currentPost = null;
let isAdmin = false;
let postBookmarks = [];

async function checkLogin() {
    const {
        data: { user }
    } = await supabase.auth.getUser();
    currentUser = user;
    if (!user) {
        alert("로그인이 필요합니다");
        location.href = "/login.html";
    }
    const { data: profile } = await supabase.from("user_data").select("*").eq("user_id", user.id).single();
    isAdmin = profile?.is_admin || false;
    postBookmarks = profile?.post_bookmarks || [];
}

async function loadPost() {
    const { data: post } = await supabase.from("posts").select("*").eq("id", postId).single();
    if (!post) return alert("글을 찾을 수 없습니다.");
    currentPost = post;
    const skinData = skins.find((s) => s.name === post.skin);

    postArea.innerHTML = `
    <h2>${post.title}</h2>
    <p>작성일: ${new Date(post.created_at).toLocaleString()}</p>
    <p>카테고리: ${post.category}</p>
    <img src="${skinData?.image || ""}" alt="스킨 이미지" style="max-width:300px;">
    <p>${post.content}</p>
  `;

    if (currentUser.id === post.user_id || isAdmin) {
        editBtn.classList.remove("hidden");
        deleteBtn.classList.remove("hidden");
    }
}

async function loadComments() {
    const { data: comments } = await supabase.from("comments").select("*").eq("post_id", postId).order("created_at");
    commentList.innerHTML = "";
    for (const c of comments) {
        const li = document.createElement("li");
        li.innerHTML = `
      <strong>${c.nickname || "익명"}:</strong> ${c.text}
      <span style="float:right">❤️ ${c.like_count || 0} <button onclick="likeComment('${c.id}')">+1</button>
      <button onclick="reportComment('${c.id}')">🚨</button></span>
    `;
        commentList.appendChild(li);
    }
}

submitComment.onclick = async () => {
    const text = commentInput.value.trim();
    if (!text) return;
    const { error } = await supabase.from("comments").insert({
        post_id: postId,
        user_id: currentUser.id,
        text,
        like_count: 0,
        report_count: 0
    });
    if (error) return alert("댓글 등록 실패");
    commentInput.value = "";
    await loadComments();
};

likeBtn.onclick = async () => {
    await window.likePost(postId);
};

bookmarkBtn.onclick = async () => {
    const index = postBookmarks.indexOf(postId);
    if (index > -1) {
        postBookmarks.splice(index, 1);
    } else {
        postBookmarks.push(postId);
    }
    await supabase.from("user_data").update({ post_bookmarks: postBookmarks }).eq("user_id", currentUser.id);
};

reportBtn.onclick = async () => {
    await window.reportPost(postId);
};

deleteBtn.onclick = async () => {
    await window.deletePost(postId);
    location.href = "board.html";
};

editBtn.onclick = () => {
    window.openEditPopup(currentPost);
};

window.likeComment = async (commentId) => {
    await supabase.rpc("increment_comment_like", { comment_id_input: commentId });
    await loadComments();
};

window.reportComment = async (commentId) => {
    await supabase.rpc("increment_comment_report", { comment_id_input: commentId });
    alert("신고되었습니다");
};

(async () => {
    await checkLogin();
    await loadPost();
    await loadComments();
})();

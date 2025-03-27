/*******************************************
 * board.js
 * - "board.html"와 연동
 * - 게시글 목록 표시, 작성 팝업, 검색, 카테고리
 *******************************************/

// Supabase 설정
const { createClient } = window.supabase;
const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw"; /* 실제 키로 변경 */
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;
let posts = [];
let currentTab = "우리헤어져";
let currentPage = 1;
let sortOption = "latest";
let postBookmarks = [];
let notifications = [];
let isAdmin = false;

const POSTS_PER_PAGE = 10;

const postList = document.getElementById("post-list");
const pagination = document.getElementById("pagination");
const writeBtn = document.getElementById("write-btn");
const notificationBtn = document.getElementById("notification-btn");
const notificationPopup = document.getElementById("notification-popup");
const notificationBadge = document.getElementById("notification-badge");
const notificationList = document.getElementById("notification-list");

const titleInput = document.getElementById("post-title");
const skinSelect = document.getElementById("skin-select");
const categorySelect = document.getElementById("category-select");
const contentInput = document.getElementById("post-content");
const writePopup = document.getElementById("write-popup");

const editPopup = document.getElementById("edit-popup");
const editTitle = document.getElementById("edit-title");
const editSkin = document.getElementById("edit-skin-select");
const editCategory = document.getElementById("edit-category-select");
const editContent = document.getElementById("edit-content");
const submitPostBtn = document.getElementById("submit-post");
const submitEditBtn = document.getElementById("submit-edit");
const sortSelect = document.getElementById("sort-select");

writeBtn.addEventListener("click", () => {
  writePopup.classList.remove("hidden");
});

submitPostBtn.addEventListener("click", async () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const skin = skinSelect.value;
  const category = categorySelect.value;

  if (!title || !content) {
    alert("제목과 내용을 모두 입력해주세요.");
    return;
  }

  const { error } = await supabase.from("posts").insert({
    user_id: currentUser.id,
    title,
    content,
    skin_name: skin,
    category,
    created_at: new Date(),
    like_count: 0,
    comment_count: 0,
    report_count: 0,
    hidden: false
  });

  if (error) {
    alert("게시글 작성 중 오류 발생");
    console.error(error);
    return;
  }

  writePopup.classList.add("hidden");
  titleInput.value = "";
  contentInput.value = "";
  await loadPosts(); // 새 글 반영
});

async function checkLogin() {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  currentUser = user;
  if (!user) {
    alert("로그인이 필요합니다.");
    location.href = "/login.html";
    return;
  }
  const { data: userProfile } = await supabase.from("user_data").select("*").eq("user_id", user.id).single();
  postBookmarks = userProfile?.post_bookmarks || [];
  isAdmin = userProfile?.is_admin || false;
  if (isAdmin) document.getElementById("admin-tab-container").style.display = "block";
}

async function loadPosts() {
  let query = supabase
    .from("posts")
    .select("*")
    .order(sortOption === "latest" ? "created_at" : "like_count", { ascending: false });
  if (currentTab === "우리헤어져" || currentTab === "우리헤어졌어요") query = query.eq("category", currentTab);
  if (currentTab === "내가 쓴 글") query = query.eq("user_id", currentUser.id);
  if (currentTab === "저장한 글") query = query.in("id", postBookmarks);
  if (currentTab === "관리자") query = query.order("report_count", { ascending: false });

  const { data } = await query;
  posts = data || [];
  renderPosts();
}

function renderPosts() {
  postList.innerHTML = "";
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const currentPosts = posts.slice(start, end);
  for (const post of currentPosts) {
    const li = document.createElement("li");
    li.className = "post-item";
    li.innerHTML = `
      <div class="post-top">
        <strong>${post.title}</strong>
        <span>${post.category}</span>
      </div>
      <div class="post-bottom">
        <span>❤️ ${post.like_count || 0}</span>
        <span>💬 ${post.comment_count || 0}</span>
        ${postBookmarks.includes(post.id) ? '<span class="bookmark-icon">🔖</span>' : ""}
        ${post.report_count >= 3 ? '<span class="warning">🚫 신고 누적</span>' : ""}
        ${isAdmin && currentTab === "관리자" ? adminControlButtons(post.id) : ""}
      </div>
    `;
    li.onclick = () => (location.href = `board_detail.html?id=${post.id}`);
    postList.appendChild(li);
  }
  renderPagination();
}

function adminControlButtons(postId) {
  return `
    <button onclick="event.stopPropagation(); adminAction('${postId}', 'hide')">숨김</button>
    <button onclick="event.stopPropagation(); adminAction('${postId}', 'restore')">복구</button>
    <button onclick="event.stopPropagation(); adminAction('${postId}', 'delete')">삭제</button>
  `;
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
    ((page) => {
      const btn = document.createElement("button");
      btn.textContent = page;
      if (page === currentPage) btn.classList.add("active");
      btn.onclick = () => {
        currentPage = page;
        renderPosts();
      };
      pagination.appendChild(btn);
    })(i);
  }
}

window.toggleBookmark = async (postId) => {
  const index = postBookmarks.indexOf(postId);
  if (index > -1) postBookmarks.splice(index, 1);
  else postBookmarks.push(postId);
  await supabase.from("user_data").update({ post_bookmarks: postBookmarks }).eq("user_id", currentUser.id);
  await loadPosts();
};

window.adminAction = async (postId, action) => {
  if (!isAdmin) return;
  if (action === "delete") {
    await supabase.from("posts").delete().eq("id", postId);
  } else if (action === "hide") {
    await supabase.from("posts").update({ hidden: true }).eq("id", postId);
  } else if (action === "restore") {
    await supabase.from("posts").update({ hidden: false }).eq("id", postId);
  }
  await loadPosts();
};

// ✅ 댓글 신고 목록 불러오기 (관리자 탭 전용 + 숨김 기능)
async function loadReportedComments() {
  if (currentTab !== "관리자") return;
  const { data: comments } = await supabase
    .from("comments")
    .select("*")
    .gte("report_count", 3)
    .order("report_count", { ascending: false });

  const reportedSection = document.createElement("section");
  reportedSection.innerHTML = "<h3>🚨 신고된 댓글</h3>";

  if (!comments || comments.length === 0) {
    reportedSection.innerHTML += "<p>신고된 댓글이 없습니다.</p>";
  } else {
    const ul = document.createElement("ul");
    ul.classList.add("reported-comments");
    for (const c of comments) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div><strong>글 ID:</strong> ${c.post_id}</div>
        <div><strong>내용:</strong> ${c.text}</div>
        <div><strong>신고 수:</strong> ${c.report_count}</div>
        <div><strong>상태:</strong> ${c.hidden ? "🔒 숨김됨" : "✅ 표시 중"}</div>
        <button onclick="adminHideComment('${c.id}')">${c.hidden ? "복구" : "숨김"}</button>
        <button onclick="adminDeleteComment('${c.id}')">삭제</button>
      `;
      ul.appendChild(li);
    }
    reportedSection.appendChild(ul);
  }

  postList.appendChild(reportedSection);
}

window.adminDeleteComment = async (commentId) => {
  if (!isAdmin) return;
  await supabase.from("comments").delete().eq("id", commentId);
  alert("댓글이 삭제되었습니다");
  await loadReportedComments();
};

window.adminHideComment = async (commentId) => {
  if (!isAdmin) return;
  const { data: comment } = await supabase.from("comments").select("hidden").eq("id", commentId).single();
  const newState = !comment.hidden;
  await supabase.from("comments").update({ hidden: newState }).eq("id", commentId);
  alert(`댓글이 ${newState ? "숨김 처리" : "복구"}되었습니다`);
  await loadReportedComments();
};

// 🔄 관리자 탭 진입 시 댓글도 함께 불러오기
(function () {
  const originalRenderPosts = renderPosts;
  window.renderPosts = async function () {
    await originalRenderPosts();
    if (currentTab === "관리자") {
      await loadReportedComments();
    }
  };
})();

// ✅ 숨김 댓글 사용자 화면 마스킹 처리 (board_detail.js에서 사용)
window.maskHiddenComment = function (text, hidden) {
  return hidden ? '<em class="masked">관리자에 의해 숨김 처리된 댓글입니다</em>' : text;
};

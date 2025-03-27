const { createClient } = window.supabase;
const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw"; /* 실제 키로 변경 */
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const userList = document.getElementById("user-list");
const statPosts = document.getElementById("stat-posts");
const statComments = document.getElementById("stat-comments");
const statHiddenComments = document.getElementById("stat-hidden-comments");
const restoreRequests = document.getElementById("restore-requests");

let currentUser = null;

async function checkAdmin() {
    const {
        data: { user }
    } = await supabase.auth.getUser();
    currentUser = user;
    if (!user) {
        alert("로그인이 필요합니다");
        location.href = "/login.html";
    }
    const { data: profile } = await supabase.from("user_data").select("is_admin").eq("user_id", user.id).single();
    if (!profile?.is_admin) {
        alert("접근 권한이 없습니다");
        location.href = "/board.html";
    }
}

async function loadUsers() {
    const { data: users } = await supabase.from("user_data").select("id, user_id, is_admin, created_at");
    userList.innerHTML = "";
    for (const u of users) {
        const li = document.createElement("li");
        li.innerHTML = `
      <p><strong>UID:</strong> ${u.user_id}</p>
      <p><strong>가입일:</strong> ${new Date(u.created_at).toLocaleDateString()}</p>
      <p><strong>권한:</strong> ${u.is_admin ? "👑 관리자" : "일반 유저"}</p>
      <button onclick="toggleAdmin('${u.user_id}', ${u.is_admin})">
        ${u.is_admin ? "관리자 해제" : "관리자 지정"}
      </button>
    `;
        userList.appendChild(li);
    }
}

window.toggleAdmin = async (userId, current) => {
    await supabase.from("user_data").update({ is_admin: !current }).eq("user_id", userId);
    await loadUsers();
};

async function loadStats() {
    const [{ count: postCount }, { count: commentCount }, { data: hiddenComments }] = await Promise.all([
        supabase.from("posts").select("*", { count: "exact", head: true }),
        supabase.from("comments").select("*", { count: "exact", head: true }),
        supabase.from("comments").select("id").eq("hidden", true)
    ]);
    statPosts.textContent = postCount;
    statComments.textContent = commentCount;
    statHiddenComments.textContent = hiddenComments.length;
}

async function loadRestoreRequests() {
    const { data: requests } = await supabase
        .from("restore_requests")
        .select("*")
        .order("created_at", { ascending: false });
    restoreRequests.innerHTML = "";
    for (const r of requests) {
        const li = document.createElement("li");
        li.innerHTML = `
      <strong>댓글 ID:</strong> ${r.comment_id}<br />
      <em>요청일:</em> ${new Date(r.created_at).toLocaleString()}<br />
      <button onclick="window.restoreHiddenComment('${r.comment_id}')">복구하기</button>
    `;
        restoreRequests.appendChild(li);
    }
}

window.restoreHiddenComment = async (commentId) => {
    await supabase.from("comments").update({ hidden: false }).eq("id", commentId);
    await supabase.from("restore_requests").delete().eq("comment_id", commentId);
    alert("댓글이 복구되었습니다");
    await loadRestoreRequests();
    await loadStats();
};

(async () => {
    await checkAdmin();
    await loadUsers();
    await loadStats();
    await loadRestoreRequests();
})();

// ✅ 댓글 신고 목록 불러오기 (관리자 탭 전용 + 숨김 기능 + 복구 요청)
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
            await loadRestoreRequests();
        }
    };
})();

// ✅ 숨김 댓글 사용자 화면 마스킹 처리 + 복구 요청 기능
window.maskHiddenComment = function (text, hidden, commentId) {
    if (!hidden) return text;
    return `
    <em class="masked">관리자에 의해 숨김 처리된 댓글입니다</em>
    <button class="restore-request-btn" onclick="window.requestRestore('${commentId}')">복구 요청</button>
  `;
};

window.requestRestore = async function (commentId) {
    const { data: existing } = await supabase.from("restore_requests").select("*").eq("comment_id", commentId);
    if (existing.length > 0) {
        alert("이미 복구 요청된 댓글입니다");
        return;
    }

    const {
        data: { user }
    } = await supabase.auth.getUser();
    if (!user) return alert("로그인이 필요합니다");

    await supabase.from("restore_requests").insert({
        comment_id: commentId,
        user_id: user.id
    });

    alert("복구 요청이 접수되었습니다");
};

// ✅ 관리자 페이지에서 요청자 표시용 유틸 함수
window.getNicknameByUserId = async function (userId) {
    const { data } = await supabase.from("user_data").select("user_id").eq("user_id", userId).single();
    return data ? data.user_id : "알 수 없음";
};

// ✅ 복구 요청 리스트 표시
async function loadRestoreRequests() {
    const { data: requests } = await supabase
        .from("restore_requests")
        .select("*")
        .order("created_at", { ascending: false });

    const restoreSection = document.createElement("section");
    restoreSection.innerHTML = "<h3>🛠️ 숨김 댓글 복구 요청</h3>";

    const ul = document.createElement("ul");
    for (const r of requests) {
        const nickname = await window.getNicknameByUserId(r.user_id);
        const li = document.createElement("li");
        li.innerHTML = `
      <div><strong>댓글 ID:</strong> ${r.comment_id}</div>
      <div><strong>요청자:</strong> ${nickname}</div>
      <div><em>요청일:</em> ${new Date(r.created_at).toLocaleString()}</div>
      <button onclick="window.restoreHiddenComment('${r.comment_id}')">복구하기</button>
    `;
        ul.appendChild(li);
    }

    restoreSection.appendChild(ul);
    postList.appendChild(restoreSection);
}

window.restoreHiddenComment = async (commentId) => {
    await supabase.from("comments").update({ hidden: false }).eq("id", commentId);
    await supabase.from("restore_requests").delete().eq("comment_id", commentId);
    alert("댓글이 복구되었습니다");
    await loadRestoreRequests();
    await loadReportedComments();
};

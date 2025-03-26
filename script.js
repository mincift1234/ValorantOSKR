// 로그인 처리
async function handleLogin() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google"
    });

    if (error) {
        alert("로그인 실패: " + error.message);
        console.error("로그인 오류:", error);
    }
}

// UI 업데이트 함수
function updateUI(user) {
    if (user) {
        console.log("로그인된 사용자:", user.user_metadata.full_name);
        document.getElementById("user-info").innerText = user.user_metadata.full_name;
        document.getElementById("login-button").style.display = "none";
        document.getElementById("user-container").classList.remove("hidden");
    } else {
        console.log("로그아웃 상태");
        document.getElementById("user-info").innerText = "";
        document.getElementById("login-button").style.display = "block";
        document.getElementById("user-container").classList.add("hidden");
    }
}

// 로그인 상태 확인 (초기 로딩 시 실행)
async function checkUser() {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.error("로그인 확인 실패:", error.message);
        return;
    }

    updateUI(user);
}

// 로그인 상태 변경 감지 (자동 업데이트)
supabase.auth.onAuthStateChange((event, session) => {
    updateUI(session?.user || null);
});

// 로그아웃 처리
async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("로그아웃 실패:", error.message);
        return;
    }
    console.log("로그아웃됨");
    alert("로그아웃되었습니다."); // 🔹 로그아웃 알림 추가
    updateUI(null); // UI 초기화
}

// 팝업 닫기
function closeAccountPopup() {
    document.getElementById("account-popup").classList.add("hidden");
}

// 로그아웃 버튼 클릭 시 로그아웃 처리
document.getElementById("logout-btn")?.addEventListener("click", function () {
    logout();
    closeAccountPopup();
});

// 페이지 로드 시 로그인 상태 확인
document.addEventListener("DOMContentLoaded", function () {
    checkUser();
});

// 사용자 정보 클릭 시 팝업 표시
document.getElementById("user-info")?.addEventListener("click", function () {
    document.getElementById("account-popup").classList.toggle("hidden");
});

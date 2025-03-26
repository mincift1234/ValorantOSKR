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

// 로그인 상태 확인 및 UI 업데이트
async function checkUser() {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.error("로그인 확인 실패:", error.message);
        // 로그인 상태가 없으면 로그아웃 처리
        logout();
        return;
    }

    if (user) {
        console.log("로그인된 사용자:", user.user_metadata.full_name);
        document.getElementById("user-info").innerText = user.user_metadata.full_name;
        document.getElementById("login-button").style.display = "none"; // 로그인 버튼 숨김
        document.getElementById("user-container").classList.remove("hidden"); // 사용자 정보 표시
    } else {
        console.log("로그인되지 않은 사용자");
        document.getElementById("user-info").innerText = "";
        document.getElementById("login-button").style.display = "block"; // 로그인 버튼 표시
        document.getElementById("user-container").classList.add("hidden"); // 사용자 정보 숨김
    }
}

// 로그인 상태 변경 감지 (자동 업데이트)
supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
        console.log("로그인 상태 변경됨:", session.user.user_metadata.full_name);
        document.getElementById("user-info").innerText = session.user.user_metadata.full_name;
        document.getElementById("login-button").style.display = "none"; // 로그인 버튼 숨김
        document.getElementById("user-container").classList.remove("hidden"); // 사용자 정보 표시
    } else {
        console.log("로그아웃 상태 변경됨");
        // 세션이 없으면 자동 로그아웃 처리
        logout();
    }
});

// 로그아웃 처리
async function logout() {
    await supabase.auth.signOut();
    console.log("로그아웃됨");
    document.getElementById("user-info").innerText = "";
    document.getElementById("login-button").style.display = "block"; // 로그인 버튼 표시
    document.getElementById("user-container").classList.add("hidden"); // 사용자 정보 숨김
}

// 팝업 닫기
function closeAccountPopup() {
    document.getElementById("account-popup").classList.add("hidden"); // 로그아웃 옵션 숨기기
}

// 로그아웃 버튼 클릭 시 로그아웃 처리
document.getElementById("logout-btn")?.addEventListener("click", function () {
    logout();
    closeAccountPopup(); // 로그아웃 후 팝업 닫기
});

// 페이지 로드 시 로그인 상태 확인
document.addEventListener("DOMContentLoaded", function () {
    checkUser();
});

// 사용자 정보 클릭 시 팝업 표시
document.getElementById("user-info")?.addEventListener("click", function () {
    const popup = document.getElementById("account-popup");
    popup.classList.toggle("hidden"); // 팝업 표시/숨기기
});

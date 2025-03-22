// Supabase 설정
const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co";
const supabaseKey = "YOUR_ANON_KEY";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 이메일 로그인
async function signInWithEmail() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alert("로그인 실패: " + error.message);
    } else {
        alert("로그인 성공!");
        window.location.href = "/"; // 로그인 후 메인 페이지 이동
    }
}

// 회원가입
async function signUpWithEmail() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        alert("회원가입 실패: " + error.message);
    } else {
        alert("회원가입 성공! 로그인하세요.");
    }
}

// 버튼 이벤트 추가
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login-btn").addEventListener("click", signInWithEmail);
    document.getElementById("signup-btn").addEventListener("click", signUpWithEmail);
});
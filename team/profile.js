const { createClient } = window.supabase; // Supabase 라이브러리에서 createClient 가져옴

const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 로그인 후 사용자 데이터 로드 및 초기화
async function loadUserData() {
    const {
        data: { user },
        error
    } = await supabase.auth.getUser();
    if (error || !user) return;

    // 로그인한 사용자의 정보를 localStorage에 저장
    localStorage.setItem("user", JSON.stringify(user)); // 여기 추가

    userId = user.id;

    // 나머지 코드...
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadUserData();
    // localStorage에서 사용자 정보 가져오기
    const user = JSON.parse(localStorage.getItem("user")); // 로그인 정보를 로컬 스토리지에서 가져옴

    if (!user) {
        alert("로그인 후 프로필을 등록할 수 있습니다.");
        window.location.href = "./login.html"; // 로그인 페이지로 리디렉션
        return; // 로그인하지 않은 경우
    }

    if (!user.id) {
        console.error("사용자의 ID가 없습니다.");
        alert("사용자의 ID를 찾을 수 없습니다. 다시 로그인해주세요.");
        return;
    }

    // 이미 등록된 프로필이 있는지 확인
    const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single(); // 하나의 프로필만 반환

    if (profileError) {
        console.error("프로필 정보 확인 실패:", profileError);
    }

    // 이미 등록된 프로필이 있을 경우 파티 찾기 페이지로 이동
    if (profileData) {
        window.location.href = "find-teammates.html"; // 파티 찾기 페이지로 자동 이동
    }

    // 프로필 등록 이벤트 리스너
    document.getElementById("profile-form").addEventListener("submit", async (event) => {
        event.preventDefault();

        const nickname = document.getElementById("nickname").value;
        const rank = document.getElementById("rank").value;
        const position = document.getElementById("position").value;
        const gameType = document.getElementById("game-type").value;
        const microphone = document.getElementById("microphone").checked;
        const activityTime = document.getElementById("activity-time").value;
        const teamRequirements = document.getElementById("team-requirements").value;

        const userId = user.id;

        // 유저 프로필을 데이터베이스에 저장
        const { data, error } = await supabase.from("profiles").upsert([
            {
                user_id: userId, // user_id 필드에 로그인한 사용자의 user.id 값을 추가
                nickname,
                rank,
                position,
                game_type: gameType,
                microphone,
                activity_time: activityTime,
                team_requirements: teamRequirements
            }
        ]);

        if (error) {
            console.error("프로필 등록 실패:", error);
        } else {
            alert("프로필이 등록되었습니다.");
            window.location.href = "find-teammates.html"; // 등록 후 파티 찾기 페이지로 이동
        }
    });
});

const { createClient } = window.supabase; // Supabase 라이브러리에서 createClient 가져옴

const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentIndex = 0; // 현재 표시된 카드의 인덱스

async function loadTeammates() {
    await loadUserData();
    // localStorage에서 사용자 정보 가져오기
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("로그인 후 팀원 찾기를 사용할 수 있습니다.");
        window.location.href = "./login.html"; // 로그인 페이지로 리디렉션
        return; // 로그인하지 않은 경우
    }

    const rankFilter = document.getElementById("rank-filter").value;
    const positionFilter = document.getElementById("position-filter").value;
    const gameTypeFilter = document.getElementById("game-type").value;
    const microphoneFilter = document.getElementById("microphone").checked;
    const activityTimeFilter = document.getElementById("activity-time-filter").value.trim().toLowerCase();

    // Supabase에서 프로필 정보 가져오기
    const { data, error } = await supabase.from("profiles").select("*");

    if (error) {
        console.error("팀원 검색 실패:", error);
        return;
    }

    // 자신은 하단 좌측에 고정된 카드로 표시
    const ownProfile = data.find((profile) => profile.user_id === user.id);
    if (ownProfile) {
        displayOwnProfile(ownProfile);
    }

    // 필터링된 팀원 목록 생성
    const filteredTeammates = data.filter((profile) => {
        const matchesRank = rankFilter === "all" || profile.rank === rankFilter;
        const matchesPosition = positionFilter === "all" || profile.position === positionFilter;
        const matchesGameType = gameTypeFilter === "all" || profile.game_type === gameTypeFilter;
        const matchesMicrophone = !microphoneFilter || profile.microphone === microphoneFilter;
        const matchesTime =
            activityTimeFilter === "" || profile.activity_time.toLowerCase().includes(activityTimeFilter);

        return matchesRank && matchesPosition && matchesGameType && matchesMicrophone && matchesTime;
    });

    // 필터링된 팀원들 표시
    displayTeammates(filteredTeammates);
}

// 자신 프로필 카드 표시
function displayOwnProfile(profile) {
    const profileContainer = document.getElementById("own-profile");
    profileContainer.innerHTML = `
        <div class="teammate-card">
            <p><strong>닉네임:</strong> ${profile.nickname}</p>
            <p><strong>랭크:</strong> ${profile.rank}</p>
            <p><strong>선호 포지션:</strong> ${profile.position}</p>
            <p><strong>게임 종류:</strong> ${profile.game_type}</p>
            <button onclick="contactTeammate('${profile.nickname}')">연락하기</button>
        </div>
    `;
}

// 다른 사용자들 프로필 카드 표시
function displayTeammates(teammates) {
    const teammatesList = document.getElementById("teammates-list");
    teammatesList.innerHTML = ""; // 기존 내용 초기화

    if (teammates.length === 0) {
        teammatesList.innerHTML = "<p>검색된 팀원이 없습니다.</p>";
        return;
    }

    // 다른 사용자 카드들 추가
    teammates.forEach((teammate) => {
        teammatesList.innerHTML += `
            <div class="teammate-card">
                <p><strong>닉네임:</strong> ${teammate.nickname}</p>
                <p><strong>랭크:</strong> ${teammate.rank}</p>
                <p><strong>선호 포지션:</strong> ${teammate.position}</p>
                <p><strong>게임 종류:</strong> ${teammate.game_type}</p>
                <button onclick="contactTeammate('${teammate.nickname}')">연락하기</button>
            </div>
        `;
    });

    // 슬라이드 버튼과 카드 위치 초기화
    updateSlidePosition();
}

// 슬라이드 이동 함수
function moveSlide(direction) {
    const slides = document.querySelectorAll(".teammate-card");
    if (direction === "next") {
        currentIndex = (currentIndex + 1) % slides.length;
    } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    updateSlidePosition();
}

// 슬라이드 위치 업데이트
function updateSlidePosition() {
    const slides = document.querySelectorAll(".teammate-card");
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.transform = "translateX(0)"; // 보이도록 설정
        } else {
            slide.style.transform = "translateX(100%)"; // 숨김
        }
    });
}

document.addEventListener("DOMContentLoaded", loadTeammates);

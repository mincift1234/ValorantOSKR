const { createClient } = window.supabase;

const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let allTeammates = [];

async function loadUserData() {
    const {
        data: { user },
        error
    } = await supabase.auth.getUser();
    if (error || !user) return;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

async function loadTeammates() {
    const user = await loadUserData();
    if (!user) {
        alert("로그인 후 팀원 찾기를 사용할 수 있습니다.");
        window.location.href = "./login.html";
        return;
    }

    const { data, error } = await supabase.from("profiles").select("*");
    if (error) {
        console.error("팀원 검색 실패:", error);
        return;
    }

    allTeammates = data;

    const ownProfile = data.find((p) => p.user_id === user.id);
    if (ownProfile) displayOwnProfile(ownProfile);

    const filtered = applyFilters(data, user.id);
    displayTeammates(filtered);
}

function applyFilters(data, userId) {
    const rankFilter = document.getElementById("rank-filter").value;
    const positionFilter = document.getElementById("position-filter").value;
    const gameTypeFilter = document.getElementById("game-type").value;
    const activityTimeFilter = document.getElementById("activity-time-filter").value.trim().toLowerCase();

    return data.filter((profile) => {
        if (profile.user_id === userId) return false;
        const matchesRank = rankFilter === "all" || profile.rank === rankFilter;
        const matchesPosition = positionFilter === "all" || profile.position === positionFilter;
        const matchesGameType = gameTypeFilter === "all" || profile.game_type === gameTypeFilter;
        const matchesTime =
            activityTimeFilter === "" || profile.activity_time.toLowerCase().includes(activityTimeFilter);
        return matchesRank && matchesPosition && matchesGameType && matchesTime;
    });
}

function displayTeammates(teammates) {
    const teammatesList = document.getElementById("teammates-list");
    teammatesList.innerHTML = "";

    if (teammates.length === 0) {
        teammatesList.innerHTML = "<p>검색된 팀원이 없습니다.</p>";
        return;
    }

    teammates.forEach((teammate) => {
        const card = document.createElement("div");
        card.classList.add("teammate-card");

        card.innerHTML = `
            <p><strong>닉네임:</strong> ${teammate.nickname}</p>
            <p><strong>랭크:</strong> ${teammate.rank}</p>
            <p><strong>선호 포지션:</strong> ${teammate.position}</p>
            <p><strong>게임 종류:</strong> ${teammate.game_type}</p>
            <p><strong>활동 시간:</strong> ${teammate.activity_time}</p>
            <p><strong>팀원에게 바라는 점:</strong> ${teammate.team_requirements || "없음"}</p>
        `;
        teammatesList.appendChild(card);
    });
}

function displayOwnProfile(profile) {
    const container = document.getElementById("own-profile");
    if (!container) return;
    container.innerHTML = `
        <div class="teammate-card">
            <p><strong>닉네임:</strong> ${profile.nickname}</p>
            <p><strong>랭크:</strong> ${profile.rank}</p>
            <p><strong>선호 포지션:</strong> ${profile.position}</p>
            <p><strong>게임 종류:</strong> ${profile.game_type}</p>
            <p><strong>활동 시간:</strong> ${profile.activity_time}</p>
            <p><strong>팀원에게 바라는 점:</strong> ${profile.team_requirements || "없음"}</p>
        </div>
    `;
}

function toggleProfile() {
    const profile = document.getElementById("own-profile");
    const btn = document.querySelector("#my-profile button");
    if (profile.classList.contains("collapsed")) {
        profile.classList.remove("collapsed");
        btn.textContent = "내 카드 접기";
    } else {
        profile.classList.add("collapsed");
        btn.textContent = "내 카드 펼치기";
    }
}

function applyFilters() {
    const user = JSON.parse(localStorage.getItem("user"));
    const filtered = applyFilters(allTeammates, user?.id || "");
    displayTeammates(filtered);
}

document.addEventListener("DOMContentLoaded", loadTeammates);

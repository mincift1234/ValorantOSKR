const { createClient } = window.supabase; // Supabase 라이브러리에서 createClient 가져옴

const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const vpIcon = "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/Valorant_Points.png";

const tierImages = {
    select: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/Select-edition-icon.png",
    deluxe: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/Deluxe-edition-icon.png",
    premium:
        "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/Premium-edition-icon.webp",
    exclusive:
        "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/Exclusive-edition-icon.png",
    ultra: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/Ultra-edition-icon.png"
};

let filteredSkins = []; // 🔥 필터링된 데이터를 저장하는 전역 변수
let skinsPerPage = 25; // 한 페이지당 표시할 스킨 개수
let currentPage = 1; // 현재 페이지
let totalPages = 1; // 전체 페이지 수

function applyFilters() {
    const tierSelect = document.getElementById("tier-filter");
    const typeSelect = document.getElementById("type-filter");
    const priceSort = document.getElementById("price-sort");
    const dateSort = document.getElementById("sort-by-date");
    const searchInput = document.getElementById("search-box");

    const tier = tierSelect?.value || "all";
    const type = typeSelect?.value || "all";
    const sort = priceSort?.value || "none";
    const sortByDate = dateSort?.value || "none";
    const searchKeyword = searchInput?.value.trim().toLowerCase() || "";

    // 🔍 필터링
    filteredSkins = skins.filter((skin) => {
        const matchesTier = tier === "all" || skin.tier === tier;
        const matchesType = type === "all" || skin.type === type;
        const matchesSearch = !searchKeyword || skin.name.toLowerCase().includes(searchKeyword);
        return matchesTier && matchesType && matchesSearch;
    });

    // 📅 출시일 정렬
    if (sortByDate !== "none") {
        filteredSkins.sort((a, b) => {
            const dateA = new Date(a.releaseDate || a.episode || 0);
            const dateB = new Date(b.releaseDate || b.episode || 0);
            return sortByDate === "asc" ? dateA - dateB : dateB - dateA;
        });
    }

    // 💰 가격 정렬
    if (sort === "high") {
        filteredSkins.sort((a, b) => b.price - a.price);
    } else if (sort === "low") {
        filteredSkins.sort((a, b) => a.price - b.price);
    }

    // 🔄 페이지 초기화 및 렌더링
    currentPage = 1;
    totalPages = Math.ceil(filteredSkins.length / skinsPerPage);
    updateFilteredData();
}

function openFilterPopup() {
    document.getElementById("filter-popup").classList.remove("hidden");
}

function closeFilterPopup() {
    document.getElementById("filter-popup").classList.add("hidden");
}

function updateFilteredData() {
    let startIndex = (currentPage - 1) * skinsPerPage;
    let endIndex = startIndex + skinsPerPage;
    let skinsToShow = filteredSkins.slice(startIndex, endIndex); // 현재 페이지 데이터

    displaySkins(skinsToShow); // 필터링된 데이터 표시
    updatePagination(); // 페이지네이션 UI 업데이트
}

function displaySkins(skinList) {
    const container = document.getElementById("skins-container");
    container.innerHTML = "";

    if (skinList.length === 0) {
        container.innerHTML = "<p>스킨이 없습니다.</p>"; // 🔥 스킨이 없을 경우 메시지 표시
        return;
    }

    skinList.forEach((skin) => {
        container.innerHTML += `
            <div class="skin-card" onclick="openSkinDetails('${skin.name}')" style="transition: transform 0.2s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div class="price-info">
                    <img src="${vpIcon}" alt="VP">
                    <span>${skin.price}</span>
                </div>
                <img src="${skin.img}" alt="${skin.name}">
                <div class="skin-info">
                    <img src="${tierImages[skin.tier]}" alt="${skin.tier}">
                    <p>${skin.name}</p>
                </div>
            </div>
        `;
    });
}

function updatePagination() {
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = ""; // 기존 페이지 번호 초기화

    const maxPagesToShow = 5; // 표시할 최대 페이지 개수
    let pages = [];

    if (totalPages <= maxPagesToShow) {
        // 페이지 수가 적을 때는 모두 표시
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        // 1, 2, 현재 페이지, 마지막 전 페이지, 마지막 페이지만 표시
        pages = [1, 2];

        if (currentPage > 3) {
            pages.push("...");
        }

        if (currentPage > 2 && currentPage < totalPages - 1) {
            pages.push(currentPage);
        }

        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        pages.push(totalPages - 1, totalPages);
    }

    // 페이지 버튼 생성
    pages.forEach((page) => {
        let pageBtn = document.createElement("span");
        pageBtn.textContent = page;
        pageBtn.classList.add("page-number");

        if (page === "...") {
            pageBtn.classList.add("ellipsis");
        } else {
            if (page === currentPage) pageBtn.classList.add("active");
            pageBtn.onclick = () => changePage(page);
        }

        pageNumbers.appendChild(pageBtn);
    });

    // "이전" 버튼 활성화/비활성화
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === totalPages;
}

function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        updateFilteredData(); // 페이지 이동 후 필터링된 데이터 적용
    }
}

document.addEventListener("DOMContentLoaded", () => {
    filteredSkins = [...skins]; // 🔥 초기에는 모든 스킨을 필터링된 데이터로 설정
    totalPages = Math.ceil(filteredSkins.length / skinsPerPage); // 전체 페이지 수 설정
    currentPage = 1; // 🔥 첫 페이지로 설정
    updateFilteredData(); // 첫 번째 페이지의 데이터만 표시
});

let favorites = new Set();
let shopCounters = {};
let shopHistory = [];

let userId = null; // 로그인된 사용자 ID
let userDataId = null; // user_data 테이블의 id (uuid)

// ✅ 로그인 후 사용자 데이터 로드 및 초기화
async function loadUserData() {
    const {
        data: { user },
        error
    } = await supabase.auth.getUser();
    if (error || !user) return;

    userId = user.id;

    const { data, error: fetchError } = await supabase.from("user_data").select("*").eq("user_id", userId).single();

    if (fetchError && fetchError.code === "PGRST116") {
        // ❗ 데이터가 없으면 새로 생성
        const { data: newData, error: insertError } = await supabase
            .from("user_data")
            .insert([{ user_id: userId, favorites: [], shop_counters: {}, shop_history: [] }])
            .select()
            .single();

        if (!insertError) {
            userDataId = newData.id;
            favorites = new Set();
            shopCounters = {};
            shopHistory = [];
        }
    } else if (!fetchError) {
        userDataId = data.id;
        favorites = new Set(data.favorites || []);
        shopCounters = data.shop_counters || {};
        shopHistory = data.shop_history || [];

        // 날짜 포맷 복원
        Object.values(shopCounters).forEach((counter) => {
            if (counter.startDate) {
                counter.startDate = new Date(counter.startDate);
            }
        });
        shopHistory.forEach((record) => {
            record.startDate = new Date(record.startDate);
            record.endDate = new Date(record.endDate);
        });
    }

    applyFilters(); // 필터 적용
    fillFavoritesList(); // 즐겨찾기 목록 채우기
}

// ✅ Supabase에 변경된 user_data 저장
async function saveUserData() {
    if (!userDataId) return;
    await supabase
        .from("user_data")
        .update({
            favorites: Array.from(favorites),
            shop_counters: shopCounters,
            shop_history: shopHistory
        })
        .eq("id", userDataId);
}

// ✅ 즐겨찾기 토글
function toggleFavorite() {
    const skinName = document.getElementById("favorite-btn").getAttribute("data-skin");

    if (favorites.has(skinName)) {
        favorites.delete(skinName);
        document.getElementById("favorite-btn").textContent = "즐겨찾기";
    } else {
        favorites.add(skinName);
        document.getElementById("favorite-btn").textContent = "즐겨찾기 취소";
    }

    saveUserData(); // Supabase에 저장
}

// ✅ 날짜 세기 시작 / 종료
function toggleShopCounting() {
    const skinName = document.getElementById("popup-title").textContent;
    const counter = getShopCounter(skinName);

    if (!counter.isCounting) {
        const now = new Date();
        const startDate = new Date(now);
        startDate.setHours(9, 0, 0, 0);
        if (now < startDate) startDate.setDate(startDate.getDate() - 1);

        counter.isCounting = true;
        counter.startDate = startDate;
        alert(`"${skinName}" 날짜 세기를 시작합니다 (D+1).`);
        document.getElementById("shop-counter-btn").textContent = "날짜 세기 중...";
    } else {
        stopShopCounting(skinName);
    }

    saveUserData();
}

function stopShopCounting(skinName) {
    const counter = getShopCounter(skinName);
    if (!counter.isCounting) return;

    const startDate = new Date(counter.startDate);
    startDate.setHours(9, 0, 0, 0);
    const now = new Date();
    const today9AM = new Date(now);
    today9AM.setHours(9, 0, 0, 0);
    if (now < today9AM) today9AM.setDate(today9AM.getDate() - 1);

    const days = Math.floor((today9AM - startDate) / 86400000) + 1;

    shopHistory.push({ skinName, startDate, endDate: now, days });

    counter.isCounting = false;
    counter.startDate = null;

    alert(`"${skinName}" 날짜 세기를 종료합니다.\n총 ${days}일 소요!`);
    document.getElementById("shop-counter-btn").textContent = "날짜 세기";

    fillShopHistory(); // UI 갱신
    saveUserData();
}

function getShopCounter(skinName) {
    if (!shopCounters[skinName]) {
        shopCounters[skinName] = { isCounting: false, startDate: null };
    }
    return shopCounters[skinName];
}

// ✅ 즐겨찾기 목록 출력
function fillFavoritesList() {
    const container = document.getElementById("favorites-list");
    container.innerHTML = "";
    const favoriteSkins = skins.filter((skin) => favorites.has(skin.name));

    if (favoriteSkins.length === 0) {
        container.innerHTML = "<div>즐겨찾기한 스킨이 없습니다.</div>";
        return;
    }

    favoriteSkins.forEach((skin) => {
        const div = document.createElement("div");
        div.className = "favorite-item";
        div.textContent = skin.name;
        div.onclick = () => {
            closeFavoritesPopup();
            openSkinDetails(skin.name);
        };
        container.appendChild(div);
    });
}

function openSkinDetails(name) {
    const skin = skins.find((s) => s.name === name);
    if (!skin) return;

    // 이미지, 등급 아이콘, 이름 설정
    document.getElementById("popup-img").src = skin.img;
    document.getElementById("popup-tier").src = tierImages[skin.tier];
    document.getElementById("popup-title").textContent = skin.name;

    // 가격 (VP 아이콘 + 숫자)
    document.getElementById("popup-price-info").innerHTML = `
        <img src="${vpIcon}" alt="VP" style="width:16px; height:16px; margin-right:5px;">
        <span>${skin.price}</span>
    `;

    // 즐겨찾기 버튼 상태
    const favoriteBtn = document.getElementById("favorite-btn");
    favoriteBtn.setAttribute("data-skin", skin.name);
    favoriteBtn.textContent = favorites.has(skin.name) ? "즐겨찾기 취소" : "즐겨찾기";

    // 날짜 세기 버튼 상태
    const counter = getShopCounter(name);
    const shopCounterBtn = document.getElementById("shop-counter-btn");
    shopCounterBtn.textContent = counter.isCounting ? "날짜 세기 중..." : "날짜 세기";

    // 팝업 열기
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openFavorites() {
    closeMenu(); // 메뉴 닫기 (선택)
    fillFavoritesList(); // 즐겨찾기 목록 업데이트
    document.getElementById("favorites-popup").style.display = "block"; // 팝업 열기
}

function closeFavoritesPopup() {
    document.getElementById("favorites-popup").style.display = "none";
}
function fillShopCounterInfo() {
    const container = document.getElementById("shop-current");
    container.innerHTML = "";

    const countingSkins = Object.entries(shopCounters).filter(([_, data]) => data.isCounting);

    if (countingSkins.length === 0) {
        container.textContent = "현재 카운트 중인 스킨이 없습니다.";
        return;
    }

    countingSkins.forEach(([skinName, data]) => {
        const now = new Date();
        const startDate = new Date(data.startDate);
        const diffMs = now - startDate;
        const days = Math.floor(diffMs / 86400000) + 1;

        const row = document.createElement("div");
        row.classList.add("shop-counter-row");
        row.innerHTML = `
            <div class="shop-counter-name">${skinName}</div>
            <div class="shop-counter-days">D+${days}</div>
            <button class="shop-counter-stop-btn">멈추기</button>
        `;

        row.querySelector(".shop-counter-stop-btn").onclick = () => {
            stopShopCounting(skinName);
            fillShopCounterInfo();
        };

        container.appendChild(row);
    });
}

function openShopCounterPopup() {
    closeMenu(); // 메뉴 닫기
    fillShopCounterInfo(); // 날짜 세기 정보 업데이트
    document.getElementById("shop-counter-popup").style.display = "block"; // 팝업 열기
}

function closeShopCounterPopup() {
    document.getElementById("shop-counter-popup").style.display = "none";
}

// ✅ 날짜 세기 기록 출력
function fillShopHistory() {
    const container = document.getElementById("shop-history");
    container.innerHTML = "";

    if (shopHistory.length === 0) {
        container.innerHTML = "아직 기록이 없습니다.";
        return;
    }

    shopHistory.forEach((record, index) => {
        const start = new Date(record.startDate).toLocaleDateString("ko-KR");
        const end = new Date(record.endDate).toLocaleDateString("ko-KR");
        const div = document.createElement("div");
        div.className = "shop-history-item";
        div.innerHTML = `
            <div><strong>스킨:</strong> ${record.skinName}</div>
            <div><strong>기간:</strong> ${start} ~ ${end} (총 ${record.days}일)</div>
        `;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "기록 삭제";
        deleteBtn.onclick = () => {
            shopHistory.splice(index, 1);
            saveUserData();
            fillShopHistory();
        };
        div.appendChild(deleteBtn);
        container.appendChild(div);
    });
}

function toggleShopHistory() {
    const historyEl = document.getElementById("shop-history");
    if (historyEl.style.display === "none") {
        // 열기
        fillShopHistory();
        historyEl.style.display = "block";
    } else {
        // 닫기
        historyEl.style.display = "none";
    }
}

// ✅ 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", () => {
    loadUserData();
});

async function fetchNotices() {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/notice?select=*`, {
        method: "GET",
        headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    displayNotices(data);
}

function displayNotices(notices) {
    closeMenu(); // 메뉴 닫기

    const noticeList = document.getElementById("notice-list");
    noticeList.innerHTML = ""; // 기존 공지 초기화

    notices.forEach((notice) => {
        const li = document.createElement("li");
        const formattedContent = notice.content.replace(/\n/g, "<br>"); // 줄 바꿈을 <br>로 변환
        li.innerHTML = `<strong>${notice.title}</strong><p>${formattedContent}</p><small>${notice.date}</small>`;
        noticeList.appendChild(li);
    });
}

function noticePopup() {
    document.getElementById("notice-popup").style.display = "block";
    fetchNotices();
}

function closeNoticePopup() {
    document.getElementById("notice-popup").style.display = "none";
}
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

function updateUI(user) {
    const loginContainer = document.getElementById("login-container");
    const userContainer = document.getElementById("user-container");
    const userAvatar = document.getElementById("user-avatar"); // 🔹 여기를 체크!
    const accountPopup = document.getElementById("account-popup");

    console.log("🔍 userAvatar:", userAvatar); // ✅ 콘솔에서 null인지 확인

    if (user) {
        console.log("로그인된 사용자:", user.user_metadata);

        if (!userAvatar) {
            console.error("❌ userAvatar 요소를 찾을 수 없음!");
            return; // 여기서 함수 종료 (오류 방지)
        }

        // 프로필 사진 가져오기 (없으면 기본 아이콘 사용)
        const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture || "default-avatar.png";
        userAvatar.src = avatarUrl;
        userAvatar.classList.remove("hidden");

        // 로그인 UI 업데이트
        loginContainer.classList.add("hidden");
        userContainer.classList.remove("hidden");

        // 팝업 숨기고 시작
        accountPopup.classList.add("hidden");

        // 팝업 토글 이벤트 추가
        userAvatar.onclick = () => {
            accountPopup.classList.toggle("hidden");
        };
    } else {
        console.log("로그아웃 상태");

        // 로그아웃 상태일 때
        loginContainer.classList.remove("hidden");
        userContainer.classList.add("hidden");

        // 프로필 사진 & 팝업 숨기기
        if (userAvatar) {
            userAvatar.src = "";
            userAvatar.classList.add("hidden");
        }
        accountPopup.classList.add("hidden");
    }
}

function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
}
function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
}

// 로그인 상태 확인 (초기 로딩 시 실행)
async function checkUser() {
    const {
        data: { user },
        error
    } = await supabase.auth.getUser();

    if (error) {
        console.error("로그인 확인 실패:", error.message);
        return;
    }

    updateUI(user);
}

// 로그인 상태 변경 감지 (자동 UI 업데이트)
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
    alert("로그아웃되었습니다.");
    updateUI(null);
    location.reload();
}

// 팝업 닫기
function closeAccountPopup() {
    document.getElementById("account-popup")?.classList.add("hidden");
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

function goToBoard() {
    window.location.href = "community/board.html"; // 게시판 페이지로 이동
}

// 🔽 공유용 카드 생성 및 소셜 공유 기능 통합

function generateAndShowShareCard() {
    const allOptions = [];

    for (const [skinName, counter] of Object.entries(shopCounters)) {
        if (counter.isCounting) {
            const now = new Date();
            const today9 = new Date();
            today9.setHours(9, 0, 0, 0);
            if (now < today9) today9.setDate(today9.getDate() - 1);
            const days = Math.floor((today9 - new Date(counter.startDate)) / (1000 * 60 * 60 * 24)) + 1;
            allOptions.push({ skinName, startDate: counter.startDate, endDate: today9, days });
        }
    }

    for (const item of shopHistory) {
        allOptions.push({ skinName: item.skinName, startDate: item.startDate, endDate: item.endDate, days: item.days });
    }

    if (allOptions.length === 0) {
        alert("공유할 수 있는 기록이 없습니다.");
        return;
    }

    showShareSelector(allOptions);
}

function showShareSelector(options) {
    const existing = document.getElementById("share-select-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "share-select-modal";
    Object.assign(modal.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#222",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        zIndex: 10000,
        maxHeight: "70vh",
        overflowY: "auto",
        width: "300px",
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)"
    });

    const title = document.createElement("h3");
    title.textContent = "공유할 기록 선택";
    title.style.marginBottom = "10px";
    modal.appendChild(title);

    options.forEach((item) => {
        const btn = document.createElement("button");
        btn.textContent = `${item.skinName} (D+${item.days})`;
        Object.assign(btn.style, {
            display: "block",
            width: "100%",
            marginBottom: "8px",
            padding: "8px",
            background: "#ff4655",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
        });
        btn.onclick = () => {
            modal.remove();
            showSharePopup(item.skinName, item.days, item.startDate, item.endDate);
        };
        modal.appendChild(btn);
    });

    const cancel = document.createElement("button");
    cancel.textContent = "닫기";
    Object.assign(cancel.style, {
        marginTop: "10px",
        padding: "6px 14px",
        fontSize: "14px",
        backgroundColor: "#666",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        transition: "all 0.2s"
    });
    cancel.onmouseover = () => (cancel.style.opacity = "0.85");
    cancel.onmouseout = () => (cancel.style.opacity = "1");
    cancel.onclick = () => modal.remove();
    modal.appendChild(cancel);

    document.body.appendChild(modal);
}

function showSharePopup(skinName, dCount, startDate, endDate) {
    const existing = document.getElementById("share-popup");
    if (existing) existing.remove();

    const popup = document.createElement("div");
    popup.id = "share-popup";
    Object.assign(popup.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#1e1e1e",
        padding: "24px",
        borderRadius: "12px",
        zIndex: 10001,
        textAlign: "center",
        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
        width: "360px", // ✅ 고정 너비
        maxWidth: "90vw",
        boxSizing: "border-box"
    });

    const closeBtn = document.createElement("div");
    closeBtn.textContent = "×";
    Object.assign(closeBtn.style, {
        position: "absolute",
        top: "8px",
        right: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer",
        zIndex: 10002
    });
    closeBtn.onclick = () => popup.remove();

    const card = document.createElement("div");
    card.id = "shareable-card";
    card.className = "shareable-card";
    card.style.display = "block";
    card.style.width = "100%";
    card.style.maxWidth = "100%";
    card.style.boxSizing = "border-box";

    const skin = skins.find((s) => s.name === skinName);
    if (skin) {
        card.innerHTML = `
            <div class="header">
                <div>D+${dCount}</div>
                <div>${formatDate(startDate)} ~ ${formatDate(endDate)}</div>
            </div>
            <img src="${skin.img}" alt="${skin.name}" crossorigin="anonymous" style="background: transparent; margin: 10px 0;">
            <div class="skin-name">${skin.name}</div>
        `;
    }

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "이미지 저장";
    Object.assign(saveBtn.style, {
        margin: "10px 6px",
        padding: "10px 20px",
        backgroundColor: "#ff4655",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        transition: "all 0.2s"
    });
    saveBtn.onmouseover = () => (saveBtn.style.opacity = "0.85");
    saveBtn.onmouseout = () => (saveBtn.style.opacity = "1");
    saveBtn.onclick = () => {
        html2canvas(card, { useCORS: true, backgroundColor: null })
            .then((canvas) => {
                canvas.toBlob((blob) => {
                    const link = document.createElement("a");
                    link.download = "shop-skin-card.png";
                    link.href = URL.createObjectURL(blob);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            })
            .catch((err) => {
                console.error("html2canvas 오류:", err);
                alert("이미지를 저장하는 데 문제가 발생했어요.");
            });
    };

    const shareNativeBtn = document.createElement("button");
    shareNativeBtn.textContent = "공유하기";
    Object.assign(shareNativeBtn.style, {
        margin: "10px 6px",
        padding: "10px 20px",
        backgroundColor: "#3a8fff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        transition: "all 0.2s"
    });
    shareNativeBtn.onmouseover = () => (shareNativeBtn.style.opacity = "0.85");
    shareNativeBtn.onmouseout = () => (shareNativeBtn.style.opacity = "1");
    shareNativeBtn.onclick = () => {
        html2canvas(card).then((canvas) => {
            canvas.toBlob((blob) => {
                if (
                    navigator.canShare &&
                    navigator.canShare({ files: [new File([blob], "skin-card.png", { type: blob.type })] })
                ) {
                    const file = new File([blob], "skin-card.png", { type: blob.type });
                    navigator.share({ files: [file], title: "Valorant 스킨 기록 공유" });
                } else {
                    alert("이 브라우저에서는 공유 기능을 지원하지 않아요 😥\n이미지 저장 후 직접 공유해 주세요.");
                }
            });
        });
    };

    popup.appendChild(closeBtn);
    popup.appendChild(card);
    popup.appendChild(saveBtn);
    popup.appendChild(shareNativeBtn);
    document.body.appendChild(popup);
}

function formatDate(date) {
    const d = new Date(date);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("shop-counter-popup");
    const iconWrapper = document.createElement("div");
    iconWrapper.style.position = "absolute";
    iconWrapper.style.top = "10px";
    iconWrapper.style.left = "10px";

    const shareBtn = document.createElement("button");
    shareBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.006 3.006 0 000-1.39l7.05-4.11A2.986 2.986 0 0018 7.91c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .23.03.45.08.66L7.03 9.69A2.986 2.986 0 006 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.5 0 .96-.13 1.37-.35l7.05 4.11c-.05.2-.08.42-.08.65 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
    `;
    shareBtn.className = "icon-button";
    shareBtn.onclick = generateAndShowShareCard;

    iconWrapper.appendChild(shareBtn);
    popup.appendChild(iconWrapper);
});

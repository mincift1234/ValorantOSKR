/*******************************************
 * board.js
 * - "board.html"와 연동
 * - 게시글 목록 표시, 작성 팝업, 검색, 카테고리
 *******************************************/

// Supabase 설정
const { createClient } = window.supabase;
const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw" /* 실제 키로 변경 */;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 로그인 유저 정보
let currentUser = null;
let currentCategory = "counting"; // 기본 카테고리

document.addEventListener("DOMContentLoaded", async () => {
  // 1) 로그인 체크
  await checkUser();

  // 2) 초기 목록 불러오기
  fetchPosts(currentCategory);

  // 3) 카테고리 클릭 이벤트
  document.querySelectorAll(".category").forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach((c) => c.classList.remove("selected"));
      el.classList.add("selected");
      currentCategory = el.dataset.category;
      fetchPosts(currentCategory);
    });
  });

  // 4) 검색 버튼 이벤트
  document.getElementById("search-btn").addEventListener("click", () => {
    fetchPosts(currentCategory);
  });

  // 5) 날짜 세기 중인 스킨 목록 불러오기
  fillSkinSelect();
});

// [A] 로그인 체크
async function checkUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    alert("로그인이 필요합니다.");
    window.location.href = "/login/login.html"; // 로그인 페이지
    return;
  }
  currentUser = user;
}

// [B] 게시글 목록 불러오기
async function fetchPosts(category) {
  // 검색 키워드
  const keyword = document.getElementById("search-box").value.trim().toLowerCase();

  // category === "counting" -> counting: true
  // category === "ended" -> counting: false
  const isCounting = category === "counting";

  let query = supabase
    .from("board") // 예: board 테이블
    .select("*")
    .eq("category", isCounting ? "counting" : "ended")
    .order("created_at", { ascending: false });

  // 검색 키워드가 있으면 제목/메모 등에서 필터 (간단 예시)
  if (keyword) {
    // 실제로는 textSearch나 LIKE 등을 사용해야 합니다.
    // Supabase에서 LIKE 사용 시 or() 또는 filter() 등을 활용
    query = query.ilike("title", `%${keyword}%`);
  }

  const { data: posts, error } = await query;

  const postList = document.getElementById("post-list");
  postList.innerHTML = "";

  if (error || !posts || posts.length === 0) {
    postList.innerHTML = `<tr><td colspan="5" style="text-align:center;">게시글이 없습니다.</td></tr>`;
    return;
  }

  // 테이블에 표시
  posts.forEach((post, index) => {
    const tr = document.createElement("tr");
    tr.onclick = () => {
      // 상세 페이지 이동
      window.location.href = `board_detail.html?id=${post.id}`;
    };

    // 번호, 제목, 작성자, 날짜, 조회
    // (index+1) 대신 post.id 등을 써도 됨
    tr.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.author_nickname || "익명"}</td>
      <td>${new Date(post.created_at).toLocaleDateString("ko-KR")}</td>
      <td>${post.hits || 0}</td>
    `;
    postList.appendChild(tr);
  });
}

// [C] 게시글 작성 팝업 열기
function openPostPopup() {
  document.getElementById("post-popup").classList.remove("hidden");
}

// [D] 게시글 작성 팝업 닫기
function closePostPopup() {
  document.getElementById("post-popup").classList.add("hidden");
}

// [E] 날짜 세기 중인 스킨 목록 불러오기 (예시)
async function fillSkinSelect() {
  const { data, error } = await supabase
    .from("user_data")
    .select("shop_counters")
    .eq("user_id", currentUser.id)
    .single();

  const select = document.getElementById("skin-select");
  select.innerHTML = "<option value=''>스킨 선택</option>";

  if (!error && data?.shop_counters) {
    Object.entries(data.shop_counters).forEach(([skin, info]) => {
      if (info.isCounting) {
        const option = document.createElement("option");
        option.value = skin;
        option.textContent = skin;
        select.appendChild(option);
      }
    });
  }
}

// [F] 게시글 등록
async function submitPost() {
  const skinName = document.getElementById("skin-select").value;
  const memo = document.getElementById("memo-input").value;

  if (!skinName) return alert("스킨을 선택하세요");
  if (!memo.trim()) return alert("메모를 입력하세요");

  // 예: "counting" 탭이면 category='counting', "ended" 탭이면 category='ended'
  // 여기서는 무조건 'counting'이라고 가정
  const category = "counting";

  // author_nickname 은 유저 정보에서 가져오거나 user_metadata에서 가져옴
  const nickname = currentUser.user_metadata?.full_name || currentUser.email;

  // 예: board 테이블에 [category, user_id, author_nickname, title, memo, created_at, hits]
  //     title -> skinName
  //     memo -> memo
  const { error } = await supabase.from("board").insert({
    category,
    user_id: currentUser.id,
    author_nickname: nickname,
    title: skinName,
    memo,
    created_at: new Date(),
    hits: 0,
  });

  if (error) {
    console.error(error);
    alert("게시글 등록 실패");
    return;
  }

  closePostPopup();
  fetchPosts("counting");
}
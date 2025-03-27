const { createClient } = window.supabase; // Supabase 라이브러리에서 createClient 가져옴

const SUPABASE_URL = "https://frvwihvhouctuvrulzte.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydndpaHZob3VjdHV2cnVsenRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDM4MjQsImV4cCI6MjA1ODMxOTgyNH0.EwPF04rcpdxShyFtcwFzxo4QIe7uwmGPCvPYZTgPDJw";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 사용자 로그인 상태 확인
let currentUser = null;
checkUser();

async function checkUser() {
  const { data: { user } } = await supabase.auth.getUser();
  currentUser = user;
  if (!user) {
    alert("로그인이 필요합니다.");
    window.location.href = "/"; // 메인 페이지로 이동
  } else {
    fetchPosts("counting");
    fillSkinSelect(); // 날짜 세기 중인 스킨 불러오기
  }
}

// 게시글 목록 불러오기
async function fetchPosts(category = "counting") {
  const isCounting = category === "counting";
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("counting", isCounting)
    .order("created_at", { ascending: false });

  const postList = document.getElementById("post-list");
  postList.innerHTML = "";

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-item";
    div.innerHTML = `
      <h3>${post.skin_name}</h3>
      <small>D+${calculateDays(post.start_date)}</small>
      <p>${post.memo || ""}</p>
    `;
    postList.appendChild(div);
  });
}

// 게시글 작성 팝업 열기
document.getElementById("write-post-btn").onclick = () => {
  document.getElementById("post-popup").classList.remove("hidden");
};

// 팝업 닫기
function closePostPopup() {
  document.getElementById("post-popup").classList.add("hidden");
}

// 날짜 세기 중인 스킨 목록 불러오기
async function fillSkinSelect() {
  const { data: userData } = await supabase
    .from("user_data")
    .select("shop_counters")
    .eq("user_id", currentUser.id)
    .single();

  const select = document.getElementById("skin-select");
  select.innerHTML = "";

  if (userData?.shop_counters) {
    Object.entries(userData.shop_counters).forEach(([skin, info]) => {
      if (info.isCounting) {
        const option = document.createElement("option");
        option.value = skin;
        option.textContent = skin;
        select.appendChild(option);
      }
    });
  }
}

// 게시글 등록
async function submitPost() {
  const skinName = document.getElementById("skin-select").value;
  const memo = document.getElementById("memo-input").value;

  if (!skinName) return alert("스킨을 선택하세요");

  await supabase.from("posts").insert({
    user_id: currentUser.id,
    skin_name: skinName,
    start_date: new Date(),
    memo,
    counting: true
  });

  closePostPopup();
  fetchPosts("counting");
}

// 날짜 계산
function calculateDays(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff + 1;
}

// 카테고리 전환
document.querySelectorAll(".category").forEach(el => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(c => c.classList.remove("selected"));
    el.classList.add("selected");
    fetchPosts(el.dataset.category);
  });
});
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

const skins = [
    {
        name: "에이몬디어 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EC%9D%B4%EB%AA%AC%EB%94%94%EC%96%B4/Aemondir_Sheriff.webp",
        tier: "premium",
        type: "sheriff",
        price: 1775,
        episode: 8.11
    },
    {
        name: "에이몬디어 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EC%9D%B4%EB%AA%AC%EB%94%94%EC%96%B4/Aemondir_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 8.11
    },
    {
        name: "에이몬디어 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EC%9D%B4%EB%AA%AC%EB%94%94%EC%96%B4/Aemondir_Bulldog.webp",
        tier: "premium",
        type: "bulldog",
        price: 1775,
        episode: 8.11
    },
    {
        name: "에이몬디어 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EC%9D%B4%EB%AA%AC%EB%94%94%EC%96%B4/Aemondir_Vandal.png",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 8.11
    },
    {
        name: "에이몬디어 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EC%9D%B4%EB%AA%AC%EB%94%94%EC%96%B4/Blade_of_Aemondir.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 8.11
    },
    {
        name: "암.시장 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%94%EC%8B%9C%EC%9E%A5/Black.Market_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 6.07
    },
    {
        name: "암.시장 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%94%EC%8B%9C%EC%9E%A5/Black.Market_Bulldog.webp",
        tier: "premium",
        type: "bulldog",
        price: 1775,
        episode: 6.07
    },
    {
        name: "암.시장 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%94%EC%8B%9C%EC%9E%A5/Black.Market_Marshal.webp",
        tier: "premium",
        type: "marshal",
        price: 1775,
        episode: 6.07
    },
    {
        name: "암.시장 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%94%EC%8B%9C%EC%9E%A5/Black.Market_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 6.07
    },
    {
        name: "암.시장 버터플라이 나이프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%94%EC%8B%9C%EC%9E%A5/Black.Market_Butterfly_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 6.07
    },
    {
        name: "셀레스티얼 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%85%80%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%96%BC/Celestial_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 2.03
    },
    {
        name: "셀레스티얼 부채",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%85%80%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%96%BC/Celestial_Fan.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.03
    },
    {
        name: "셀레스티얼 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%85%80%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%96%BC/Celestial_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 2.03
    },
    {
        name: "셀레스티얼 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%85%80%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%96%BC/Celestial_Judge.webp",
        tier: "premium",
        type: "judge",
        price: 1775,
        episode: 2.03
    },
    {
        name: "셀레스티얼 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%85%80%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%96%BC/Celestial_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 2.03
    },
    {
        name: "크림슨비스트 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%B9%84%EC%8A%A4%ED%8A%B8/Crimsonbeast_Judge.webp",
        tier: "premium",
        type: "judge",
        price: 1775,
        episode: 5.07
    },
    {
        name: "크림슨비스트 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%B9%84%EC%8A%A4%ED%8A%B8/Crimsonbeast_Marshal.webp",
        tier: "premium",
        type: "marshal",
        price: 1775,
        episode: 5.07
    },
    {
        name: "크림슨비스트 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%B9%84%EC%8A%A4%ED%8A%B8/Crimsonbeast_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 5.07
    },
    {
        name: "크림슨비스트 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%B9%84%EC%8A%A4%ED%8A%B8/Crimsonbeast_Sheriff.webp",
        tier: "premium",
        type: "sheriff",
        price: 1775,
        episode: 5.07
    },
    {
        name: "크림슨비스트 망치",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A6%BC%EC%8A%A8%EB%B9%84%EC%8A%A4%ED%8A%B8/Crimsonbeast_Hammer.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 5.07
    },
    {
        name: "크라이오스테이시스 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%98%A4%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C%EC%8A%A4/Cryostasis_Bulldog.webp",
        tier: "premium",
        type: "bulldog",
        price: 1775,
        episode: 5.12
    },
    {
        name: "크라이오스테이시스 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%98%A4%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C%EC%8A%A4/Cryostasis_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 5.12
    },
    {
        name: "크라이오스테이시스 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%98%A4%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C%EC%8A%A4/Cryostasis_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 5.12
    },
    {
        name: "크라이오스테이시스 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%98%A4%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C%EC%8A%A4/Cryostasis_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 5.12
    },
    {
        name: "크라이오스테이시스 임팩트 드릴",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%98%A4%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C%EC%8A%A4/Cryostasis_Impact_Drill.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 5.12
    },
    {
        name: "두들 버즈 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%90%EB%93%A4%20%EB%B2%84%EC%A6%88/Doodle_Buds_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 4.07
    },
    {
        name: "두들 버즈 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%90%EB%93%A4%20%EB%B2%84%EC%A6%88/Doodle_Buds_Marshal.webp",
        tier: "premium",
        type: "marshal",
        price: 1775,
        episode: 4.07
    },
    {
        name: "두들 버즈 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%90%EB%93%A4%20%EB%B2%84%EC%A6%88/Doodle_Buds_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 4.07
    },
    {
        name: "두들 버즈 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%90%EB%93%A4%20%EB%B2%84%EC%A6%88/Doodle_Buds_Shorty.webp",
        tier: "premium",
        type: "shorty",
        price: 1775,
        episode: 4.07
    },
    {
        name: "두들 버즈 스팅어",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%90%EB%93%A4%20%EB%B2%84%EC%A6%88/Doodle_Buds_Stinger.webp",
        tier: "premium",
        type: "stinger",
        price: 1775,
        episode: 4.07
    },
    {
        name: "원탭 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9B%90%ED%83%AD/Ego_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 1.08
    },
    {
        name: "원탭 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9B%90%ED%83%AD/Ego_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 1.08
    },
    {
        name: "원탭 아웃로",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9B%90%ED%83%AD/Ego_Outlaw.webp",
        tier: "premium",
        type: "outlaw",
        price: 1775,
        episode: 8.0
    },
    {
        name: "원탭 스팅어",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9B%90%ED%83%AD/Ego_Stinger.webp",
        tier: "premium",
        type: "stinger",
        price: 1775,
        episode: 1.08
    },
    {
        name: "원탭 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9B%90%ED%83%AD/Ego_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 1.08
    },
    {
        name: "원탭 칼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9B%90%ED%83%AD/Ego_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.08
    },
    {
        name: "포세이큰 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%8F%AC%EC%84%B8%EC%9D%B4%ED%81%B0/Forsaken_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 2.08
    },
    {
        name: "포세이큰 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%8F%AC%EC%84%B8%EC%9D%B4%ED%81%B0/Forsaken_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 2.08
    },
    {
        name: "포세이큰 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%8F%AC%EC%84%B8%EC%9D%B4%ED%81%B0/Forsaken_Spectre.webp",
        tier: "premium",
        type: "spactre",
        price: 1775,
        episode: 2.08
    },
    {
        name: "포세이큰 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%8F%AC%EC%84%B8%EC%9D%B4%ED%81%B0/Forsaken_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 2.08
    },
    {
        name: "포세이큰 의식용 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%8F%AC%EC%84%B8%EC%9D%B4%ED%81%B0/Forsaken_Ritual_Blade.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.08
    },
    {
        name: "가이아의 복수 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 7.07
    },
    {
        name: "가이아의 복수 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 7.07
    },
    {
        name: "가이아의 복수 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 4.04
    },
    {
        name: "가이아의 복수 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 4.04
    },
    {
        name: "가이아의 격노",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Fury.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 7.07
    },
    {
        name: "가이아의 복수 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Marshal.webp",
        tier: "premium",
        type: "marshal",
        price: 1775,
        episode: 4.04
    },
    {
        name: "가이아의 복수 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 7.07
    },
    {
        name: "가이아의 복수 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Shorty.webp",
        tier: "premium",
        type: "shorty",
        price: 1775,
        episode: 7.07
    },
    {
        name: "가이아의 복수 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Vengeance_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 4.04
    },
    {
        name: "가이아의 분노",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B0%80%EC%9D%B4%EC%95%84%EC%9D%98%EB%B3%B5%EC%88%98/Gaia%2527s_Wrath.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 4.04
    },
    {
        name: "중력 우라늄 뉴로블래스터 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A4%91%EB%A0%A5%20%EC%9A%B0%EB%9D%BC%EB%8A%84/Gravitational_Uranium_Neuroblaster_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 1.09
    },
    {
        name: "중력 우라늄 뉴로블래스터 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A4%91%EB%A0%A5%20%EC%9A%B0%EB%9D%BC%EB%8A%84/Gravitational_Uranium_Neuroblaster_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 1.09
    },
    {
        name: "중력 우라늄 뉴로블래스터 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A4%91%EB%A0%A5%20%EC%9A%B0%EB%9D%BC%EB%8A%84/Gravitational_Uranium_Neuroblaster_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 1.09
    },
    {
        name: "중력 우라늄 뉴로블래스터 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A4%91%EB%A0%A5%20%EC%9A%B0%EB%9D%BC%EB%8A%84/Gravitational_Uranium_Neuroblaster_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 1.09
    },
    {
        name: "중력 우라늄 뉴로블래스터 단봉",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A4%91%EB%A0%A5%20%EC%9A%B0%EB%9D%BC%EB%8A%84/Gravitational_Uranium_Neuroblaster_Baton.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.09
    },
    {
        name: "나선 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%82%98%EC%84%A0/Helix_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 10.01
    },
    {
        name: "나선 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%82%98%EC%84%A0/Helix_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 10.01
    },
    {
        name: "나선 단검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%82%98%EC%84%A0/Helix_Daggers.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 10.01
    },
    {
        name: "아이온 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 5.08
    },
    {
        name: "아이온 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Bucky.webp",
        tier: "premium",
        type: "burky",
        price: 1775,
        episode: 1.12
    },
    {
        name: "아이온 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 5.08
    },
    {
        name: "아이온 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 1.12
    },
    {
        name: "아이온 에너지 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Energy_Sword.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.12
    },
    {
        name: "아이온 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 1.12
    },
    {
        name: "아이온 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Sheriff.webp",
        tier: "premium",
        type: "sheriff",
        price: 1775,
        episode: 1.12
    },
    {
        name: "아이온 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 5.08
    },
    {
        name: "아이온 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 5.08
    },
    {
        name: "아이온 카람빗",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EC%9D%B4%EC%98%A8/Ion_Karambit.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 5.08
    },
    {
        name: "메이지펑크 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Marshal.webp",
        tier: "premium",
        type: "marshal",
        price: 1775,
        episode: 2.06
    },
    {
        name: "메이지펑크 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 3.1
    },
    {
        name: "메이지펑크 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 6.1
    },
    {
        name: "메이지펑크 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Sheriff.webp",
        tier: "premium",
        type: "sheriff",
        price: 1775,
        episode: 3.1
    },
    {
        name: "메이지펑크 쇼크 건틀릿",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Shock_Gauntlet.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 3.1
    },
    {
        name: "메이지펑크 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 3.1
    },
    {
        name: "메이지펑크 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Bucky.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 2.06
    },
    {
        name: "메이지펑크 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 2.06
    },
    {
        name: "메이지펑크 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 3.1
    },
    {
        name: "메이지펑크 일렉트로블레이드",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Electroblade.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.06
    },
    {
        name: "메이지펑크 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 2.06
    },
    {
        name: "메이지펑크 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 6.1
    },
    {
        name: "메이지펑크 스파크스위치",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A9%94%EC%9D%B4%EC%A7%80%ED%8E%91%ED%81%AC/Magepunk_Sparkswitch.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 6.1
    },
    {
        name: "네뷸라 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EB%B7%B8%EB%9D%BC/Nebula_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 1.06
    },
    {
        name: "네뷸라 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EB%B7%B8%EB%9D%BC/Nebula_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 1.06
    },
    {
        name: "네뷸라 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EB%B7%B8%EB%9D%BC/Nebula_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 1.06
    },
    {
        name: "네뷸라 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EB%B7%B8%EB%9D%BC/Nebula_Sheriff.webp",
        tier: "premium",
        type: "sheriff",
        price: 1775,
        episode: 1.06
    },
    {
        name: "네뷸라 칼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EB%B7%B8%EB%9D%BC/Nebula_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.06
    },
    {
        name: "넵튠 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Bulldog.webp",
        tier: "premium",
        type: "bulldog",
        price: 1775,
        episode: 10.03
    },
    {
        name: "넵튠 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 10.03
    },
    {
        name: "넵튠 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 4.1
    },
    {
        name: "넵튠 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Odin.webp",
        tier: "premium",
        type: "odin",
        price: 1775,
        episode: 10.03
    },
    {
        name: "넵튠 앵커",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Anchor.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 4.1
    },
    {
        name: "넵튠 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 10.03
    },
    {
        name: "넵튠 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Shorty.webp",
        tier: "premium",
        type: "shorty",
        price: 1775,
        episode: 4.1
    },
    {
        name: "넵튠 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 4.1
    },
    {
        name: "넵튠 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 4.1
    },
    {
        name: "넵튠 후크",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%B5%ED%8A%A0/Neptune_Hook.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 10.03
    },
    {
        name: "도깨비 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 6.04
    },
    {
        name: "도깨비 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 1.04
    },
    {
        name: "도깨비 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Bulldog.webp",
        tier: "premium",
        type: "bulldog",
        price: 1775,
        episode: 6.04
    },
    {
        name: "도깨비 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 6.04
    },
    {
        name: "도깨비 갈퀴손",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Claw.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.04
    },
    {
        name: "도깨비 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 1.04
    },
    {
        name: "도깨비 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 1.04
    },
    {
        name: "도깨비 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Shorty.webp",
        tier: "premium",
        type: "shorty",
        price: 1775,
        episode: 1.04
    },
    {
        name: "도깨비 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Oni_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 6.04
    },
    {
        name: "오니마루 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8F%84%EA%B9%A8%EB%B9%84/Onimaru_Kunitsuna.webp",
        tier: "exclusive",
        type: "knife",
        price: 5350,
        episode: 6.04
    },
    {
        name: "오리진 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%A6%AC%EC%A7%84/Origin_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 2.11
    },
    {
        name: "오리진 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%A6%AC%EC%A7%84/Origin_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 2.11
    },
    {
        name: "오리진 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%A6%AC%EC%A7%84/Origin_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 2.11
    },
    {
        name: "오리진 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%A6%AC%EC%A7%84/Origin_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 2.11
    },
    {
        name: "오리진 초승달검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%A6%AC%EC%A7%84/Origin_Crescent_Blade.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.11
    },
    {
        name: "프라임 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%84/Prime_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 1.0
    },
    {
        name: "프라임 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%84/Prime_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 1.0
    },
    {
        name: "프라임 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%84/Prime_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 1.0
    },
    {
        name: "프라임 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%84/Prime_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 1.0
    },
    {
        name: "프라임 도끼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%84/Prime_Axe.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.0
    },
    {
        name: "프라임//2.0 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%842.0/Prime_2.0_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 2.04
    },
    {
        name: "프라임//2.0 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%842.0/Prime_2.0_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 2.04
    },
    {
        name: "프라임//2.0 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%842.0/Prime_2.0_Odin.webp",
        tier: "premium",
        type: "odin",
        price: 1775,
        episode: 2.04
    },
    {
        name: "프라임//2.0 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%842.0/Prime_2.0_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 2.04
    },
    {
        name: "프라임//2.0 카람빗",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%9D%BC%EC%9E%842.0/Prime_2.0_Karambit.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.04
    },
    {
        name: "레디언트 크라이시스 001 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%8B%9C%EC%8A%A4%20001/Radiant_Crisis_001_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 3.09
    },
    {
        name: "레디언트 크라이시스 001 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%8B%9C%EC%8A%A4%20001/Radiant_Crisis_001_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 3.09
    },
    {
        name: "레디언트 크라이시스 001 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%8B%9C%EC%8A%A4%20001/Radiant_Crisis_001_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 3.09
    },
    {
        name: "레디언트 크라이시스 001 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%8B%9C%EC%8A%A4%20001/Radiant_Crisis_001_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 3.09
    },
    {
        name: "레디언트 크라이시스 001 야구 방망이",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%ED%81%AC%EB%9D%BC%EC%9D%B4%EC%8B%9C%EC%8A%A4%20001/Radiant_Crisis_001_Baseball_Bat.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 3.09
    },
    {
        name: "약탈자 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 5.03
    },
    {
        name: "약탈자 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 1.11
    },
    {
        name: "약탈자 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Odin.webp",
        tier: "premium",
        type: "odin",
        price: 1775,
        episode: 5.03
    },
    {
        name: "약탈자 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 1.11
    },
    {
        name: "약탈자 나이프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.11
    },
    {
        name: "약탈자 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 5.03
    },
    {
        name: "약탈자 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Sheriff.webp",
        tier: "premium",
        type: "sheriff",
        price: 1775,
        episode: 1.11
    },
    {
        name: "약탈자 스펙터",
        img: "http://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 5.03
    },
    {
        name: "약탈자 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 1.11
    },
    {
        name: "약탈자 카람빗",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%BD%ED%83%88%EC%9E%90/Reaver_Karambit.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 5.03
    },
    {
        name: "정찰 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%95%EC%B0%B0/Recon_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 3.04
    },
    {
        name: "정찰 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%95%EC%B0%B0/Recon_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 3.04
    },
    {
        name: "정찰 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%95%EC%B0%B0/Recon_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 3.04
    },
    {
        name: "정찰 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%95%EC%B0%B0/Recon_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 3.04
    },
    {
        name: "정찰 발리송",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%95%EC%B0%B0/Recon_Balisong.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 3.04
    },
    {
        name: "소울스트라이프 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EC%9A%B8%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%94%84/Soulstrife_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 5.09
    },
    {
        name: "소울스트라이프 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EC%9A%B8%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%94%84/Soulstrife_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 5.09
    },
    {
        name: "소울스트라이프 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EC%9A%B8%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%94%84/Soulstrife_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 5.09
    },
    {
        name: "소울스트라이프 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EC%9A%B8%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%94%84/Soulstrife_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 5.09
    },
    {
        name: "소울스트라이프 대낫",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EC%9A%B8%EC%8A%A4%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%94%84/Soulstrife_Scythe.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 5.09
    },
    {
        name: "소버린 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 8.05
    },
    {
        name: "소버린 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 1.01
    },
    {
        name: "소버린 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 1.01
    },
    {
        name: "소버린 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Judge.webp",
        tier: "premium",
        type: "judge",
        price: 1775,
        episode: 8.05
    },
    {
        name: "소버린 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Sword.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.01
    },
    {
        name: "소버린 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Marshal.webp",
        tier: "premium",
        type: "mashal",
        price: 1775,
        episode: 1.01
    },
    {
        name: "소버린 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Odin.webp",
        tier: "premium",
        type: "odin",
        price: 1775,
        episode: 8.05
    },
    {
        name: "소버린 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 8.05
    },
    {
        name: "소버린 스팅어",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Sovereign_Stinger.webp",
        tier: "premium",
        type: "stinger",
        price: 1775,
        episode: 1.01
    },
    {
        name: "이터널 소버린",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%86%8C%EB%B2%84%EB%A6%B0/Eternal_Sovereign.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 8.05
    },
    {
        name: "스플라인 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B8/Spline_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 1.07
    },
    {
        name: "스플라인 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B8/Spline_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 1.07
    },
    {
        name: "스플라인 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B8/Spline_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 1.07
    },
    {
        name: "스플라인 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B8/Spline_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 1.07
    },
    {
        name: "스플라인 단검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%94%8C%EB%9D%BC%EC%9D%B8/Spline_Dagger.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 1.07
    },
    {
        name: "결속된 세계 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B2%B0%EC%86%8D%EB%90%9C%20%EC%84%B8%EA%B3%84/Tethered_Realms_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 2.09
    },
    {
        name: "결속된 세계 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B2%B0%EC%86%8D%EB%90%9C%20%EC%84%B8%EA%B3%84/Tethered_Realms_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 2.09
    },
    {
        name: "결속된 세계 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B2%B0%EC%86%8D%EB%90%9C%20%EC%84%B8%EA%B3%84/Tethered_Realms_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 2.09
    },
    {
        name: "결속된 세계 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B2%B0%EC%86%8D%EB%90%9C%20%EC%84%B8%EA%B3%84/Tethered_Realms_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 2.09
    },
    {
        name: "번영검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B2%B0%EC%86%8D%EB%90%9C%20%EC%84%B8%EA%B3%84/Prosperity.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.09
    },
    {
        name: "언더시티 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%96%B8%EB%8D%94%EC%8B%9C%ED%8B%B0/Undercity_Bulldog.webp",
        tier: "premium",
        type: "bulldog",
        price: 1775,
        episode: 4.03
    },
    {
        name: "언더시티 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%96%B8%EB%8D%94%EC%8B%9C%ED%8B%B0/Undercity_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 4.03
    },
    {
        name: "언더시티 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%96%B8%EB%8D%94%EC%8B%9C%ED%8B%B0/Undercity_Judge.webp",
        tier: "premium",
        type: "judge",
        price: 1775,
        episode: 4.03
    },
    {
        name: "언더시티 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%96%B8%EB%8D%94%EC%8B%9C%ED%8B%B0/Undercity_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 4.03
    },
    {
        name: "핵",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%96%B8%EB%8D%94%EC%8B%9C%ED%8B%B0/Hack.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 4.03
    },
    {
        name: "용맹한 영웅 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9A%A9%EB%A7%B9%ED%95%9C%20%EC%98%81%EC%9B%85/Valiant_Hero_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 7.09
    },
    {
        name: "용맹한 영웅 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9A%A9%EB%A7%B9%ED%95%9C%20%EC%98%81%EC%9B%85/Valiant_Hero_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 7.09
    },
    {
        name: "용맹한 영웅 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9A%A9%EB%A7%B9%ED%95%9C%20%EC%98%81%EC%9B%85/Valiant_Hero_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 7.09
    },
    {
        name: "용맹한 영웅 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9A%A9%EB%A7%B9%ED%95%9C%20%EC%98%81%EC%9B%85/Valiant_Hero_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 7.09
    },
    {
        name: "여의봉",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9A%A9%EB%A7%B9%ED%95%9C%20%EC%98%81%EC%9B%85/Ruyi_Staff.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 7.09
    },
    {
        name: "발로란트 GO! Vol.1 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.1/VALORANT_GO%2521_Vol._1_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 2.03
    },
    {
        name: "발로란트 GO! Vol.1 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.1/VALORANT_GO%2521_Vol._1_Guardian.webp",
        tier: "premium",
        type: "guardian",
        price: 1775,
        episode: 2.03
    },
    {
        name: "발로란트 GO! Vol.1 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.1/VALORANT_GO%2521_Vol._1_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 2.03
    },
    {
        name: "발로란트 GO! Vol.1 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.1/VALORANT_GO%2521_Vol._1_Spectre.webp",
        tier: "premium",
        type: "spectre",
        price: 1775,
        episode: 2.03
    },
    {
        name: "발로란트 GO! Vol.1 칼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.1/VALORANT_GO%2521_Vol._1_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 2.03
    },
    {
        name: "발로란트 GO! Vo1.2 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.2/VALORANT_GO%2521_Vol._2_Ares.webp",
        tier: "premium",
        type: "ares",
        price: 1775,
        episode: 3.06
    },
    {
        name: "발로란트 GO! Vol.2 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.2/VALORANT_GO%2521_Vol._2_Classic.webp",
        tier: "premium",
        type: "classic",
        price: 1775,
        episode: 3.06
    },
    {
        name: "발로란트 GO! Vol.2 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.2/VALORANT_GO%2521_Vol._2_Operator.webp",
        tier: "premium",
        type: "operator",
        price: 1775,
        episode: 3.06
    },
    {
        name: "발로란트 GO! Vol.2 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.2/VALORANT_GO%2521_Vol._2_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 3.06
    },
    {
        name: "요루의 스타일리시 버터플라이 빗",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B0%9C%EB%A1%9C%EB%9E%80%ED%8A%B8%20GO!%20Vol.2/Yoru%2527s_Stylish_Butterfly_Comb.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 3.06
    },
    {
        name: "제노헌터 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%85%B8%ED%97%8C%ED%84%B0/Xenohunter_Bucky.webp",
        tier: "premium",
        type: "bucky",
        price: 1775,
        episode: 4.11
    },
    {
        name: "제노헌터 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%85%B8%ED%97%8C%ED%84%B0/Xenohunter_Frenzy.webp",
        tier: "premium",
        type: "frenzy",
        price: 1775,
        episode: 4.11
    },
    {
        name: "제노헌터 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%85%B8%ED%97%8C%ED%84%B0/Xenohunter_Odin.webp",
        tier: "premium",
        type: "odin",
        price: 1775,
        episode: 4.11
    },
    {
        name: "제노헌터 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%85%B8%ED%97%8C%ED%84%B0/Xenohunter_Phantom.webp",
        tier: "premium",
        type: "phantom",
        price: 1775,
        episode: 4.11
    },
    {
        name: "제노헌터 칼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%85%B8%ED%97%8C%ED%84%B0/Xenohunter_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 3550,
        episode: 4.11
    },
    {
        name: "제로팽 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%A1%9C%ED%8C%BD/XER%253FFANG_Ghost.webp",
        tier: "premium",
        type: "ghost",
        price: 1775,
        episode: 8.02
    },
    {
        name: "제로팽 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%A1%9C%ED%8C%BD/XER%253FFANG_Vandal.webp",
        tier: "premium",
        type: "vandal",
        price: 1775,
        episode: 8.02
    },
    {
        name: "제로팽 칼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%A0%9C%EB%A1%9C%ED%8C%BD/XER%253FFANG_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 8.02
    },
    {
        name: "아락시스 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Bulldog.webp",
        tier: "exclusive",
        type: "bulldog",
        price: 2175,
        episode: 6.0
    },
    {
        name: "아락시스 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Guardian.webp",
        tier: "exclusive",
        type: "guardian",
        price: 2175,
        episode: 9.11
    },
    {
        name: "아락시스 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 6.0
    },
    {
        name: "아락시스 아웃로",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Outlaw.webp",
        tier: "exclusive",
        type: "outlaw",
        price: 2175,
        episode: 9.11
    },
    {
        name: "아락시스 생물 채취기",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Bio_Harvester.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 6.0
    },
    {
        name: "아락시스 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 9.11
    },
    {
        name: "아락시스 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 9.11
    },
    {
        name: "아락시스 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Shorty.webp",
        tier: "exclusive",
        type: "shorty",
        price: 2175,
        episode: 6.0
    },
    {
        name: "아락시스 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 6.0
    },
    {
        name: "아락시스 생물 분무기",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%95%84%EB%9D%BD%EC%8B%9C%EC%8A%A4/Araxys_Bio-Atomizers.webp",
        tier: "exclusive",
        type: "knife",
        price: 5350,
        episode: 9.11
    },
    {
        name: "블라스트X 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8X/BlastX_Frenzy.webp",
        tier: "exclusive",
        type: "frenzy",
        price: 2175,
        episode: 1.14
    },
    {
        name: "블라스트X 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8X/BlastX_Odin.webp",
        tier: "exclusive",
        type: "odin",
        price: 2175,
        episode: 1.14
    },
    {
        name: "블라스트X 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8X/BlastX_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 1.14
    },
    {
        name: "블라스트X 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8X/BlastX_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2175,
        episode: 1.14
    },
    {
        name: "블라스트X 폴리머 나이프테크 코팅 나이프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8X/BlastX_Polymer_KnifeTech_Coated_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 1.14
    },
    {
        name: "크로노보이드 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A1%9C%EB%85%B8%EB%B3%B4%EC%9D%B4%EB%93%9C/ChronoVoid_Judge.webp",
        tier: "exclusive",
        type: "judge",
        price: 2175,
        episode: 5.06
    },
    {
        name: "크로노보이드 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A1%9C%EB%85%B8%EB%B3%B4%EC%9D%B4%EB%93%9C/ChronoVoid_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 5.06
    },
    {
        name: "크로노보이드 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A1%9C%EB%85%B8%EB%B3%B4%EC%9D%B4%EB%93%9C/ChronoVoid_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 5.06
    },
    {
        name: "크로노보이드 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A1%9C%EB%85%B8%EB%B3%B4%EC%9D%B4%EB%93%9C/ChronoVoid_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 5.06
    },
    {
        name: "시작점",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%81%AC%EB%A1%9C%EB%85%B8%EB%B3%B4%EC%9D%B4%EB%93%9C/Terminus_A_Quo.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 5.06
    },
    {
        name: "둠브링어 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%A0%EB%B8%8C%EB%A7%81%EC%96%B4/Doombringer_Judge.webp",
        tier: "exclusive",
        type: "judge",
        price: 2175,
        episode: 9.08
    },
    {
        name: "둠브링어 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%A0%EB%B8%8C%EB%A7%81%EC%96%B4/Doombringer_Odin.webp",
        tier: "exclusive",
        type: "odin",
        price: 2175,
        episode: 9.08
    },
    {
        name: "둠브링어 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%A0%EB%B8%8C%EB%A7%81%EC%96%B4/Doombringer_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 9.08
    },
    {
        name: "둠브링어 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%A0%EB%B8%8C%EB%A7%81%EC%96%B4/Doombringer_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 9.08
    },
    {
        name: "둠브링어 전투도끼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%91%A0%EB%B8%8C%EB%A7%81%EC%96%B4/Doombringer_Battleaxe.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 9.08
    },
    {
        name: "EX.O 아웃로",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/EX.O/EX.O_Outlaw.webp",
        tier: "exclusive",
        type: "outlaw",
        price: 2375,
        episode: 10.0
    },
    {
        name: "EX.O 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/EX.O/EX.O_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2375,
        episode: 10.0
    },
    {
        name: "EX.O 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/EX.O/EX.O_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2375,
        episode: 10.0
    },
    {
        name: "EX.O 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/EX.O/EX.O_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2375,
        episode: 10.0
    },
    {
        name: "EX.O 에지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/EX.O/EX.O_Edge.webp",
        tier: "exclusive",
        type: "knife",
        price: 5350,
        episode: 10.0
    },
    {
        name: "글리치팝 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Bulldog.webp",
        tier: "exclusive",
        type: "bulldog",
        price: 2175,
        episode: 1.05
    },
    {
        name: "글리치팝 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Classic.webp",
        tier: "exclusive",
        type: "classic",
        price: 2175,
        episode: 2.02
    },
    {
        name: "글리치팝 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Frenzy.webp",
        tier: "exclusive",
        type: "frenzy",
        price: 2175,
        episode: 1.05
    },
    {
        name: "글리치팝 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Judge.webp",
        tier: "exclusive",
        type: "judge",
        price: 2175,
        episode: 1.05
    },
    {
        name: "글리치팝 단검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Dagger.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 1.05
    },
    {
        name: "글리치팝 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Odin.webp",
        tier: "exclusive",
        type: "odin",
        price: 2175,
        episode: 1.05
    },
    {
        name: "글리치팝 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 2.02
    },
    {
        name: "글리치팝 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 2.02
    },
    {
        name: "글리치팝 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 2.02
    },
    {
        name: "글리치팝 도끼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EA%B8%80%EB%A6%AC%EC%B9%98%ED%8C%9D/Glitchpop_Axe.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 2.02
    },
    {
        name: "임페리움 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9E%84%ED%8E%98%EB%A6%AC%EC%9B%80/Imperium_Judge.webp",
        tier: "exclusive",
        type: "judge",
        price: 2175,
        episode: 7.04
    },
    {
        name: "임페리움 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9E%84%ED%8E%98%EB%A6%AC%EC%9B%80/Imperium_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 7.04
    },
    {
        name: "임페리움 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9E%84%ED%8E%98%EB%A6%AC%EC%9B%80/Imperium_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 7.04
    },
    {
        name: "임페리움 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9E%84%ED%8E%98%EB%A6%AC%EC%9B%80/Imperium_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 7.04
    },
    {
        name: "임페리움 칼날",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%9E%84%ED%8E%98%EB%A6%AC%EC%9B%80/Blades_of_Imperium.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 7.04
    },
    {
        name: "쿠로나미 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%BF%A0%EB%A1%9C%EB%82%98%EB%AF%B8/Kuronami_Marshal.webp",
        tier: "exclusive",
        type: "marshal",
        price: 2375,
        episode: 8.0
    },
    {
        name: "쿠로나미 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%BF%A0%EB%A1%9C%EB%82%98%EB%AF%B8/Kuronami_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2375,
        episode: 8.0
    },
    {
        name: "쿠로나미 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%BF%A0%EB%A1%9C%EB%82%98%EB%AF%B8/Kuronami_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2375,
        episode: 8.0
    },
    {
        name: "쿠로나미 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%BF%A0%EB%A1%9C%EB%82%98%EB%AF%B8/Kuronami_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2375,
        episode: 8.0
    },
    {
        name: "쿠로나미 단검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%BF%A0%EB%A1%9C%EB%82%98%EB%AF%B8/Kuronami_no_Yaiba.webp",
        tier: "exclusive",
        type: "knife",
        price: 5350,
        episode: 8.0
    },
    {
        name: "미스트블룸 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%AF%B8%EC%8A%A4%ED%8A%B8%EB%B8%94%EB%A3%B8/Mystbloom_Judge.webp",
        tier: "exclusive",
        type: "judge",
        price: 2175,
        episode: 8.08
    },
    {
        name: "미스트블룸 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%AF%B8%EC%8A%A4%ED%8A%B8%EB%B8%94%EB%A3%B8/Mystbloom_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 8.08
    },
    {
        name: "미스트블룸 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%AF%B8%EC%8A%A4%ED%8A%B8%EB%B8%94%EB%A3%B8/Mystbloom_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 8.08
    },
    {
        name: "미스트블룸 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%AF%B8%EC%8A%A4%ED%8A%B8%EB%B8%94%EB%A3%B8/Mystbloom_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 8.08
    },
    {
        name: "미스트블룸 쿠나이",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%AF%B8%EC%8A%A4%ED%8A%B8%EB%B8%94%EB%A3%B8/Mystbloom_Kunai.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 8.08
    },
    {
        name: "네오 프런티어 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EC%98%A4%20%ED%94%84%EB%A1%A0%ED%8B%B0%EC%96%B4/Neo_Frontier_Marshal.webp",
        tier: "exclusive",
        type: "marshal",
        price: 2175,
        episode: 7.0
    },
    {
        name: "네오 프런티어 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EC%98%A4%20%ED%94%84%EB%A1%A0%ED%8B%B0%EC%96%B4/Neo_Frontier_Odin.webp",
        tier: "exclusive",
        type: "odin",
        price: 2175,
        episode: 7.0
    },
    {
        name: "네오 프런티어 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EC%98%A4%20%ED%94%84%EB%A1%A0%ED%8B%B0%EC%96%B4/Neo_Frontier_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 7.0
    },
    {
        name: "네오 프런티어 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EC%98%A4%20%ED%94%84%EB%A1%A0%ED%8B%B0%EC%96%B4/Neo_Frontier_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 7.0
    },
    {
        name: "네오 프런티어 도끼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%84%A4%EC%98%A4%20%ED%94%84%EB%A1%A0%ED%8B%B0%EC%96%B4/Neo_Frontier_Axe.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 7.0
    },
    {
        name: "녹터넘 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%85%B9%ED%84%B0%EB%84%98/Nocturnum_Bulldog.webp",
        tier: "exclusive",
        type: "bulldog",
        price: 2175,
        episode: 9.04
    },
    {
        name: "녹터넘 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%85%B9%ED%84%B0%EB%84%98/Nocturnum_Classic.webp",
        tier: "exclusive",
        type: "classic",
        price: 2175,
        episode: 9.04
    },
    {
        name: "녹터넘 마샬",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%85%B9%ED%84%B0%EB%84%98/Nocturnum_Marshal.webp",
        tier: "exclusive",
        type: "mashal",
        price: 2175,
        episode: 9.04
    },
    {
        name: "녹터넘 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%85%B9%ED%84%B0%EB%84%98/Nocturnum_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 9.04
    },
    {
        name: "녹터넘 대낫",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%85%B9%ED%84%B0%EB%84%98/Nocturnum_Scythe.webp",
        tier: "exclusive",
        type: "knife",
        price: 5350,
        episode: 9.04
    },
    {
        name: "오버드라이브 버키",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%B2%84%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C/Overdrive_Bucky.webp",
        tier: "exclusive",
        type: "bucky",
        price: 2175,
        episode: 7.12
    },
    {
        name: "오버드라이브 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%B2%84%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C/Overdrive_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 7.12
    },
    {
        name: "오버드라이브 스팅어",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%B2%84%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C/Overdrive_Stinger.webp",
        tier: "exclusive",
        type: "stinger",
        price: 2175,
        episode: 7.12
    },
    {
        name: "오버드라이브 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%B2%84%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C/Overdrive_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 7.12
    },
    {
        name: "오버드라이브 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%98%A4%EB%B2%84%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C/Overdrive_Blade.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 7.12
    },
    {
        name: "혼돈의 서막 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%84%9C%EB%A7%89/Prelude_to_Chaos_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 5.0
    },
    {
        name: "혼돈의 서막 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%84%9C%EB%A7%89/Prelude_to_Chaos_Shorty.webp",
        tier: "exclusive",
        type: "shorty",
        price: 2175,
        episode: 5.0
    },
    {
        name: "혼돈의 서막 스팅어",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%84%9C%EB%A7%89/Prelude_to_Chaos_Stinger.webp",
        tier: "exclusive",
        type: "stinger",
        price: 2175,
        episode: 5.0
    },
    {
        name: "혼돈의 서막 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%84%9C%EB%A7%89/Prelude_to_Chaos_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 5.0
    },
    {
        name: "혼돈의 서막 칼날",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%84%9C%EB%A7%89/Blade_of_Chaos.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 5.0
    },
    {
        name: "프리모디움 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A6%AC%EB%AA%A8%EB%94%94%EC%9B%80/Primordium_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 8.04
    },
    {
        name: "프리모디움 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A6%AC%EB%AA%A8%EB%94%94%EC%9B%80/Primordium_Shorty.webp",
        tier: "exclusive",
        type: "shorty",
        price: 2175,
        episode: 8.04
    },
    {
        name: "프리모디움 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A6%AC%EB%AA%A8%EB%94%94%EC%9B%80/Primordium_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2175,
        episode: 8.04
    },
    {
        name: "프리모디움 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A6%AC%EB%AA%A8%EB%94%94%EC%9B%80/Primordium_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 8.04
    },
    {
        name: "프리모디움 칼날",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A6%AC%EB%AA%A8%EB%94%94%EC%9B%80/Blades_of_Primordia.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 8.04
    },
    {
        name: "RGX 11Z 프로 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Frenzy.webp",
        tier: "exclusive",
        type: "frenzy",
        price: 2175,
        episode: 3.07
    },
    {
        name: "RGX 11Z 프로 스팅어",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Stinger.webp",
        tier: "exclusive",
        type: "stinger",
        price: 2175,
        episode: 3.07
    },
    {
        name: "RGX 11Z 프로 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Guardian.webp",
        tier: "exclusive",
        type: "guardian",
        price: 2175,
        episode: 3.07
    },
    {
        name: "RGX 11Z 프로 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 3.07
    },
    {
        name: "RGX 11Z 프로 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Blade.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 3.07
    },
    {
        name: "RGX 11Z 프로 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Classic.webp",
        tier: "exclusive",
        type: "classic",
        price: 2175,
        episode: 4.08
    },
    {
        name: "RGX 11Z 프로 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2175,
        episode: 4.08
    },
    {
        name: "RGX 11Z 프로 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 4.08
    },
    {
        name: "RGX 11Z 프로 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 4.08
    },
    {
        name: "RGX 11Z 프로 파이어플라이",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Firefly.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 4.08
    },
    {
        name: "RGX 11Z 프로 아웃로",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Outlaw.webp",
        tier: "exclusive",
        type: "outlaw",
        price: 2175,
        episode: 9.01
    },
    {
        name: "RGX 11Z 프로 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 9.01
    },
    {
        name: "RGX 11Z 프로 카람빗",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/RGX%2011Z%20%ED%94%84%EB%A1%9C/RGX_11z_Pro_Karambit.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 9.01
    },
    {
        name: "대몰락 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8C%80%EB%AA%B0%EB%9D%BD/Ruination_Ghost.webp",
        tier: "exclusive",
        type: "ghost",
        price: 2175,
        episode: 3.01
    },
    {
        name: "대몰락 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8C%80%EB%AA%B0%EB%9D%BD/Ruination_Guardian.webp",
        tier: "exclusive",
        type: "guardian",
        price: 2175,
        episode: 3.01
    },
    {
        name: "대몰락 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8C%80%EB%AA%B0%EB%9D%BD/Ruination_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 3.01
    },
    {
        name: "대몰락 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8C%80%EB%AA%B0%EB%9D%BD/Ruination_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2175,
        episode: 3.01
    },
    {
        name: "몰락한 왕의 부러진 검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%8C%80%EB%AA%B0%EB%9D%BD/Broken_Blade_of_the_Ruined_King.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 3.01
    },
    {
        name: "빛의 감시자 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 3.02
    },
    {
        name: "빛의 감시자 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Operator.webp",
        tier: "exclusive",
        type: "operator",
        price: 2175,
        episode: 3.02
    },
    {
        name: "빛의 감시자 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 3.02
    },
    {
        name: "빛의 감시자 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Ares.webp",
        tier: "exclusive",
        type: "ares",
        price: 2175,
        episode: 3.02
    },
    {
        name: "감시자의 유물",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Relic_of_the_Sentinel.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 3.02
    },
    {
        name: "빛의 감시자 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Odin.webp",
        tier: "exclusive",
        type: "odin",
        price: 2175,
        episode: 7.1
    },
    {
        name: "빛의 감시자 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 7.1
    },
    {
        name: "빛의 감시자 쇼티",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Shorty.webp",
        tier: "exclusive",
        type: "shorty",
        price: 2175,
        episode: 7.1
    },
    {
        name: "빛의 감시자 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Sentinels_of_Light_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2175,
        episode: 7.1
    },
    {
        name: "유물석 단검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%B9%9B%EC%9D%98%20%EA%B0%90%EC%8B%9C%EC%9E%90/Relic_Stone_Daggers.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 7.1
    },
    {
        name: "싱귤래러티 아레스",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Ares.webp",
        tier: "exclusive",
        type: "ares",
        price: 2175,
        episode: 1.1
    },
    {
        name: "싱귤래러티 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2175,
        episode: 1.1
    },
    {
        name: "싱귤래러티 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Sheriff.webp",
        tier: "exclusive",
        type: "sheriff",
        price: 2175,
        episode: 1.1
    },
    {
        name: "싱귤래러티 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Spectre.webp",
        tier: "exclusive",
        type: "spectre",
        price: 2175,
        episode: 1.1
    },
    {
        name: "싱귤래러티 칼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 1.1
    },
    {
        name: "싱귤래러티 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Ghost.webp",
        tier: "exclusive",
        type: "ghost",
        price: 2175,
        episode: 9.06
    },
    {
        name: "싱귤래러티 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Vandal.webp",
        tier: "exclusive",
        type: "vandal",
        price: 2175,
        episode: 9.06
    },
    {
        name: "싱귤래러티 버터플라이 나이프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8B%B1%EA%B7%A4%EB%A0%88%EB%9F%AC%ED%8B%B0/Singularity_Butterfly_Knife.webp",
        tier: "exclusive",
        type: "knife",
        price: 4350,
        episode: 9.06
    },
    {
        name: "스펙트럼 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC/Spectrum_Bulldog.webp",
        tier: "exclusive",
        type: "bulldog",
        price: 2675,
        episode: 3.05
    },
    {
        name: "스펙트럼 클래식",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC/Spectrum_Classic.webp",
        tier: "exclusive",
        type: "classic",
        price: 2675,
        episode: 3.05
    },
    {
        name: "스펙트럼 가디언",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC/Spectrum_Guardian.webp",
        tier: "exclusive",
        type: "guardian",
        price: 2675,
        episode: 3.05
    },
    {
        name: "스펙트럼 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC/Spectrum_Phantom.webp",
        tier: "exclusive",
        type: "phantom",
        price: 2675,
        episode: 3.05
    },
    {
        name: "웨이브폼",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC/Waveform.webp",
        tier: "exclusive",
        type: "knife",
        price: 5350,
        episode: 3.05
    }
];

document.addEventListener("DOMContentLoaded", function () {
    displaySkins(skins);
});

let filteredSkins = []; // 🔥 필터링된 데이터를 저장하는 전역 변수
let skinsPerPage = 25; // 한 페이지당 표시할 스킨 개수
let currentPage = 1; // 현재 페이지
let totalPages = 1; // 전체 페이지 수

function applyFilters() {
    const tier = document.getElementById("tier-filter").value;
    const type = document.getElementById("type-filter").value;
    const sort = document.getElementById("price-sort").value;
    const searchKeyword = document.getElementById("search-box").value.trim().toLowerCase();
    const sortByDate = document.getElementById("sort-by-date").value;

    // ✅ 필터링 먼저 적용
    filteredSkins = skins.filter((skin) => {
        if (tier !== "all" && skin.tier !== tier) return false;
        if (type !== "all" && skin.type !== type) return false;
        if (searchKeyword && !skin.name.toLowerCase().includes(searchKeyword)) return false;
        return true;
    });

    // ✅ 날짜 정렬 먼저 수행
    if (filteredSkins.length > 0 && (sortByDate === "asc" || sortByDate === "desc")) {
        if (filteredSkins[0].episode !== undefined) {
            filteredSkins.sort((a, b) => (sortByDate === "asc" ? a.episode - b.episode : b.episode - a.episode));
        } else if (filteredSkins[0].releaseDate !== undefined) {
            filteredSkins.sort((a, b) => {
                let dateA = new Date(a.releaseDate);
                let dateB = new Date(b.releaseDate);
                return sortByDate === "asc" ? dateA - dateB : dateB - dateA;
            });
        }
    }

    // ✅ 가격 정렬을 가장 마지막에 적용 (덮어씌워지지 않도록)
    if (sort === "high") {
        filteredSkins.sort((a, b) => b.price - a.price);
    } else if (sort === "low") {
        filteredSkins.sort((a, b) => a.price - b.price);
    }

    // ✅ 페이지네이션 반영
    currentPage = 1;
    totalPages = Math.ceil(filteredSkins.length / skinsPerPage);
    updateFilteredData();
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

document.addEventListener("DOMContentLoaded", () => {
    // 🔥 날짜 세기 기능 복원
    const storedCounters = localStorage.getItem("shopCounters");
    if (storedCounters) {
        shopCounters = JSON.parse(storedCounters);
        Object.entries(shopCounters).forEach(([skinName, data]) => {
            if (data.startDate) {
                data.startDate = new Date(data.startDate);
            }
        });
    }

    const storedHistory = localStorage.getItem("shopHistory");
    if (storedHistory) {
        shopHistory = JSON.parse(storedHistory);
        shopHistory.forEach((item) => {
            item.startDate = new Date(item.startDate);
            item.endDate = new Date(item.endDate);
        });
    }

    // 🔥 즐겨찾기(favorites) 데이터 복원 추가
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
        favorites = new Set(JSON.parse(storedFavorites)); // Set 객체로 변환
    }

    // 🔥 필터 적용 후 페이지 로드
    applyFilters(); // 필터 적용
    fillFavoritesList(); // 즐겨찾기 목록 업데이트
});

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

    // 즐겨찾기 상태 확인
    const favoriteBtn = document.getElementById("favorite-btn");
    if (favorites.has(skin.name)) {
        favoriteBtn.textContent = "즐겨찾기 취소";
    } else {
        favoriteBtn.textContent = "즐겨찾기";
    }
    favoriteBtn.setAttribute("data-skin", skin.name);

    // 날짜 세기 버튼 상태 설정
    const shopCounterBtn = document.getElementById("shop-counter-btn");
    const counter = getShopCounter(name);

    if (counter.isCounting) {
        shopCounterBtn.textContent = "날짜 세기 중...";
    } else {
        shopCounterBtn.textContent = "날짜 세기";
    }

    // 팝업 열기
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleFavorite() {
    const favoriteBtn = document.getElementById("favorite-btn");
    const skinName = favoriteBtn.getAttribute("data-skin");

    if (favorites.has(skinName)) {
        favorites.delete(skinName);
        favoriteBtn.textContent = "즐겨찾기";
    } else {
        favorites.add(skinName);
        favoriteBtn.textContent = "즐겨찾기 취소";
    }

    // 🔥 변경된 favorites를 localStorage에 저장
    localStorage.setItem("favorites", JSON.stringify([...favorites]));
}

function fillMenuList() {
    // sideMenu 안에 스킨 목록을 <li>로 생성
    const listEl = document.getElementById("menu-nav");
    listEl.innerHTML = ""; // 기존 항목 초기화

    skins.forEach((skin) => {
        const li = document.createElement("li");
        li.textContent = skin.name;
        li.onclick = () => {
            // 스킨 클릭하면 팝업 열기
            openSkinDetails(skin.name);
            // 필요하면 메뉴도 자동 닫기
            closeMenu();
        };
        listEl.appendChild(li);
    });
}
function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
}

function openFavorites() {
    // 사이드 메뉴 닫기(옵션)
    closeMenu();

    // 즐겨찾기 목록을 업데이트해서 표시
    fillFavoritesList();

    // 팝업 열기
    document.getElementById("favorites-popup").style.display = "block";
}

function closeFavoritesPopup() {
    document.getElementById("favorites-popup").style.display = "none";
}

/**
 * 즐겨찾기 목록 채우기
 */
function fillFavoritesList() {
    const listContainer = document.getElementById("favorites-list");
    listContainer.innerHTML = "";

    // favorites는 스킨 이름만 들어있는 Set이므로, skins 배열에서 찾아와야 함
    const favoriteSkins = skins.filter((skin) => favorites.has(skin.name));

    if (favoriteSkins.length === 0) {
        // 즐겨찾기한 스킨이 없으면 메시지 표시
        const msg = document.createElement("div");
        msg.textContent = "즐겨찾기한 스킨이 없습니다.";
        listContainer.appendChild(msg);
        return;
    }

    // 즐겨찾기된 각 스킨을 목록에 표시
    favoriteSkins.forEach((skin) => {
        // 항목 하나를 만든다 (div 등)
        const item = document.createElement("div");
        item.classList.add("favorite-item");
        item.textContent = skin.name;

        // 클릭 시, 기존 팝업으로 이동해서 해당 스킨 팝업을 열 수 있게
        item.onclick = () => {
            closeFavoritesPopup(); // 즐겨찾기 팝업 닫고
            openSkinDetails(skin.name); // 스킨 팝업 열기
        };

        listContainer.appendChild(item);
    });
}

function toggleShopCounting() {
    const skinName = document.getElementById("popup-title").textContent;
    const counter = getShopCounter(skinName);

    if (!counter.isCounting) {
        // ✅ 날짜 세기 시작 시 startDate를 "오늘 아침 9시"로 설정
        counter.isCounting = true;

        const now = new Date();
        const startDate = new Date(now);
        startDate.setHours(9, 0, 0, 0); // 아침 9시로 설정

        // 만약 지금이 아침 9시 이전이라면, 어제 9시로 설정
        if (now < startDate) {
            startDate.setDate(startDate.getDate() - 1);
        }

        counter.startDate = startDate; // ✅ 아침 9시 기준으로 저장

        alert(`"${skinName}" 날짜 세기를 시작합니다 (D+1).`);
        document.getElementById("shop-counter-btn").textContent = "날짜 세기 중...";

        // ✅ localStorage에 반영
        localStorage.setItem("shopCounters", JSON.stringify(shopCounters));
    } else {
        stopShopCounting(skinName);
    }
}

function stopShopCounting(skinName) {
    const counter = getShopCounter(skinName);
    if (!counter.isCounting) return; // 이미 멈췄다면 패스

    const startDate = new Date(counter.startDate);
    const now = new Date();

    // 1. startDate의 시간을 "아침 9시"로 설정
    startDate.setHours(9, 0, 0, 0);

    // 2. 현재 날짜의 "아침 9시" 기준 시간 구하기
    const today9AM = new Date();
    today9AM.setHours(9, 0, 0, 0);

    // 3. 만약 지금이 아침 9시 이전이라면 어제 9시 기준으로 계산
    if (now < today9AM) {
        today9AM.setDate(today9AM.getDate() - 1);
    }

    // 4. 시작일부터 현재까지 아침 9시를 몇 번 지났는지 계산 (D+1부터 시작)
    const days = Math.floor((today9AM - startDate) / 86400000) + 1;

    // 5. 날짜 기록 (기존 코드 유지)
    let shopHistory = JSON.parse(localStorage.getItem("shopHistory")) || [];
    shopHistory.push({
        skinName: skinName,
        startDate: counter.startDate,
        endDate: now,
        days: days
    });

    // 6. localStorage에 업데이트
    localStorage.setItem("shopHistory", JSON.stringify(shopHistory));

    // 7. history 갱신
    fillShopHistory(); // 카운팅 멈춘 후 바로 갱신

    alert(`"${skinName}" 날짜 세기를 종료합니다.\n총 ${days}일 소요!`);

    // 8. 초기화
    counter.isCounting = false;
    counter.startDate = null;
    localStorage.setItem("shopCounters", JSON.stringify(shopCounters));

    // 9. 팝업 버튼 텍스트 변경
    const currentSkinInPopup = document.getElementById("popup-title").textContent;
    if (currentSkinInPopup === skinName) {
        document.getElementById("shop-counter-btn").textContent = "날짜 세기";
    }
}

function openShopCounterPopup() {
    // 메뉴 닫기
    closeMenu();

    // 현재 상태를 표시
    fillShopCounterInfo();

    // 팝업 열기
    document.getElementById("shop-counter-popup").style.display = "block";
}

function closeShopCounterPopup() {
    document.getElementById("shop-counter-popup").style.display = "none";
}

function fillShopCounterInfo() {
    const container = document.getElementById("shop-current");
    container.innerHTML = "";

    // 여러 스킨 중에서 세는 중인 것만 찾기
    const countingSkins = Object.entries(shopCounters).filter(([skinName, data]) => data.isCounting);

    if (countingSkins.length === 0) {
        container.textContent = "현재 카운트 중인 스킨이 없습니다.";
        return;
    }

    countingSkins.forEach(([skinName, data]) => {
        const now = new Date();
        const diffMs = now - data.startDate;
        const days = Math.floor(diffMs / 86400000) + 1;

        // 예: 가로 배치
        const row = document.createElement("div");
        row.classList.add("shop-counter-row");
        row.innerHTML = `
            <div class="shop-counter-name">${skinName}</div>
            <div class="shop-counter-days">D+${days}</div>
            <button class="shop-counter-stop-btn">멈추기</button>
        `;
        // 멈추기 이벤트
        row.querySelector(".shop-counter-stop-btn").onclick = () => {
            stopShopCounting(skinName);
            fillShopCounterInfo(); // 다시 갱신
        };

        container.appendChild(row);
    });
}

function stopShopCountingUI() {
    stopShopCounting(); // 기존 날짜 세기 멈추기 로직
    fillShopCounterInfo(); // 다시 갱신(카운트 중인 스킨 없으면 안내문 표시)
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

// shopHistory: [{ skinName, startDate, endDate, days }, ... ]

function fillShopHistory() {
    const historyEl = document.getElementById("shop-history");
    historyEl.innerHTML = ""; // 초기화

    // localStorage에서 shopHistory를 새로 불러오기
    let shopHistory = JSON.parse(localStorage.getItem("shopHistory")) || [];

    if (shopHistory.length === 0) {
        historyEl.textContent = "아직 기록이 없습니다.";
        return;
    }

    shopHistory.forEach((record, index) => {
        const item = document.createElement("div");
        item.classList.add("shop-history-item");

        // 기간 계산
        const start = new Date(record.startDate);
        const end = new Date(record.endDate);
        const startStr = start.toLocaleDateString("ko-KR");
        const endStr = end.toLocaleDateString("ko-KR");

        // 내부 내용
        item.innerHTML = `
            <div><strong>스킨:</strong> ${record.skinName}</div>
            <div><strong>기간:</strong> ${startStr} ~ ${endStr} (총 ${record.days}일)</div>
        `;

        // "기록 삭제" 버튼 생성
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "기록 삭제";
        deleteBtn.style.marginTop = "5px";
        deleteBtn.onclick = () => {
            deleteShopRecord(index);
        };
        item.appendChild(deleteBtn);

        historyEl.appendChild(item);
    });
}

function deleteShopRecord(index) {
    // shopHistory를 localStorage에서 불러옴
    let shopHistory = JSON.parse(localStorage.getItem("shopHistory")) || [];

    // index번째 기록 제거
    shopHistory.splice(index, 1);

    // 다시 목록 새로고침
    fillShopHistory();

    // localStorage에 업데이트된 history 저장
    localStorage.setItem("shopHistory", JSON.stringify(shopHistory));
}

function getShopCounter(skinName) {
    // shopCounters[skinName]이 없으면 만들어 준다
    if (!shopCounters[skinName]) {
        shopCounters[skinName] = {
            isCounting: false,
            startDate: null
        };
    }
    return shopCounters[skinName];
}

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

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
    },
    {
        name: "프로토콜 781-A 셰리프",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%20781-A/Protocol_781-A_Sheriff.webp",
        tier: "ultra",
        type: "sheriff",
        price: 2475,
        episode: 4.0
    },
    {
        name: "프로토콜 781-A 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%20781-A/Protocol_781-A_Spectre.webp",
        tier: "ultra",
        type: "spectre",
        price: 2475,
        episode: 4.0
    },
    {
        name: "프로토콜 781-A 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%20781-A/Protocol_781-A_Bulldog.webp",
        tier: "ultra",
        type: "bulldog",
        price: 2475,
        episode: 4.0
    },
    {
        name: "프로토콜 781-A 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%20781-A/Protocol_781-A_Phantom.webp",
        tier: "ultra",
        type: "phantom",
        price: 2475,
        episode: 4.0
    },
    {
        name: "관리자용 개인 근접 무기 유닛",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%20781-A/Personal_Administrative_Melee_Unit.webp",
        tier: "exclusive",
        type: "knife",
        price: 4950,
        episode: 4.0
    },
    {
        name: "에보리 꿈날개 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EB%B3%B4%EB%A6%AC%20%EA%BF%88%EB%82%A0%EA%B0%9C/Evori_Dreamwings_Ghost.webp",
        tier: "ultra",
        type: "ghost",
        price: 2475,
        episode: 9.0
    },
    {
        name: "에보리 꿈날개 오딘",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EB%B3%B4%EB%A6%AC%20%EA%BF%88%EB%82%A0%EA%B0%9C/Evori_Dreamwings_Odin.webp",
        tier: "ultra",
        type: "odin",
        price: 2475,
        episode: 9.0
    },
    {
        name: "에보리 꿈날개 스펙터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EB%B3%B4%EB%A6%AC%20%EA%BF%88%EB%82%A0%EA%B0%9C/Evori_Dreamwings_Spectre.webp",
        tier: "ultra",
        type: "spectre",
        price: 2475,
        episode: 9.0
    },
    {
        name: "에보리 꿈날개 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EB%B3%B4%EB%A6%AC%20%EA%BF%88%EB%82%A0%EA%B0%9C/Evori_Dreamwings_Vandal.webp",
        tier: "ultra",
        type: "vandal",
        price: 2475,
        episode: 9.0
    },
    {
        name: "에보리의 마법봉",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%90%EB%B3%B4%EB%A6%AC%20%EA%BF%88%EB%82%A0%EA%B0%9C/Evori%2527s_Spellcaster.webp",
        tier: "exclusive",
        type: "knife",
        price: 4950,
        episode: 9.0
    },
    {
        name: "엘더플레임 프렌지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%98%EB%8D%94%ED%94%8C%EB%A0%88%EC%9E%84/Elderflame_Frenzy.webp",
        tier: "ultra",
        type: "frenzy",
        price: 2475,
        episode: 1.03
    },
    {
        name: "엘더플레임 져지",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%98%EB%8D%94%ED%94%8C%EB%A0%88%EC%9E%84/Elderflame_Judge.webp",
        tier: "ultra",
        type: "judge",
        price: 2475,
        episode: 1.03
    },
    {
        name: "엘더플레임 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%98%EB%8D%94%ED%94%8C%EB%A0%88%EC%9E%84/Elderflame_Operator.webp",
        tier: "ultra",
        type: "operator",
        price: 2475,
        episode: 1.03
    },
    {
        name: "엘더플레임 밴달",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%98%EB%8D%94%ED%94%8C%EB%A0%88%EC%9E%84/Elderflame_Vandal.webp",
        tier: "ultra",
        type: "vandal",
        price: 2475,
        episode: 1.03
    },
    {
        name: "엘더플레임 단검",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EC%97%98%EB%8D%94%ED%94%8C%EB%A0%88%EC%9E%84/Elderflame_Dagger.webp",
        tier: "exclusive",
        type: "knife",
        price: 4950,
        episode: 1.03
    },
    {
        name: "레디언트 엔터테인먼트 시스템 불독",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C/Radiant_Entertainment_System_Bulldog.webp",
        tier: "ultra",
        type: "bulldog",
        price: 2975,
        episode: 6.08
    },
    {
        name: "레디언트 엔터테인먼트 시스템 고스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C/Radiant_Entertainment_System_Ghost.webp",
        tier: "ultra",
        type: "ghost",
        price: 2975,
        episode: 6.08
    },
    {
        name: "레디언트 엔터테인먼트 시스템 오퍼레이터",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C/Radiant_Entertainment_System_Operator.webp",
        tier: "ultra",
        type: "operator",
        price: 2975,
        episode: 6.08
    },
    {
        name: "레디언트 엔터테인먼트 시스템 팬텀",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C/Radiant_Entertainment_System_Phantom.webp",
        tier: "ultra",
        type: "phantom",
        price: 2975,
        episode: 6.08
    },
    {
        name: "파워 피스트",
        img: "https://raw.githubusercontent.com/mincift1234/valorantospng/refs/heads/main/images/%EB%A0%88%EB%94%94%EC%96%B8%ED%8A%B8%20%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C/Power_Fist.webp",
        tier: "exclusive",
        type: "knife",
        price: 5950,
        episode: 6.08
    },
];

document.addEventListener("DOMContentLoaded", function () {
    displaySkins(skins);
});

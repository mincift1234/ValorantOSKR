self.onmessage = function (e) {
    const { skins, tier, type, sort, searchKeyword } = e.data;

    let filteredSkins = skins.filter((skin) => {
        return (
            (tier === "all" || skin.tier === tier) &&
            (type === "all" || skin.type === type) &&
            (searchKeyword === "" || skin.name.toLowerCase().includes(searchKeyword))
        );
    });

    if (sort === "high") {
        filteredSkins.sort((a, b) => b.price - a.price);
    } else {
        filteredSkins.sort((a, b) => a.price - b.price);
    }

    // 필터링된 데이터 메인 스레드로 전달
    self.postMessage(filteredSkins);
};
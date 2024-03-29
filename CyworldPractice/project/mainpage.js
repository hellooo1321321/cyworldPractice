


const goButton = document.getElementById('goButton');
const gogopageSelect = document.getElementsByName('gogopage');
const [options] = gogopageSelect;
console.log(options);

console.log(gogopageSelect);
goButton.addEventListener('click', () => {
    const selectedValue = gogopageSelect.value;
    console.log(selectedValue);
    let targetURL;  // 이동할 페이지 링크 저장

    switch (selectedValue) {
        case 'CHAN':
            targetURL = "https://www.naver.com/"; // 찬우 페이지 링크
            break;
        case 'DOO':
            targetURL = "https://www.naver.com/"; // 도아 페이지 링크
            break;
        case 'JUNG':
            targetURL = "https://www.naver.com/"; // 정민 페이지 링크
            break;
        case 'YOON':
            targetURL = "https://www.naver.com/"; // 윤재 페이지 링크
            break;
    }

    if (targetURL) {
        window.open = targetURL; // 선택된 값에 따라 페이지 이동
    } else {
        alert('준비중인 페이지입니다!'); // 선택하지 않았거나 없는 경우 알림 
    }
});
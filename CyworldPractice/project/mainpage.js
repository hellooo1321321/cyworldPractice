const playButton = document.getElementById('playButton');
const backgroundMusic = document.getElementById('backgroundMusic')

function toggleMusic() {
    if (backgroundMusic.paused) {
      backgroundMusic.play(); // 재생
      playButton.textContent = '음악 일시정지';
    } else {
      backgroundMusic.pause(); // 일시정지
      playButton.textContent = '음악 재생';
    }
  }
  
  // 버튼 클릭 이벤트에 음악 재생/일시정지 함수 연결
  playButton.addEventListener('click', toggleMusic);
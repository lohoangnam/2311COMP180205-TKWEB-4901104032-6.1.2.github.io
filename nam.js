document.addEventListener('DOMContentLoaded', function() {
    var toggleMusicBtn = document.getElementById('toggleMusicBtn');
    var backgroundMusic = document.getElementById('backgroundMusic');
  
    toggleMusicBtn.addEventListener('click', function() {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicBtn.textContent = 'XUỐNG NHẠC';
      } else {
        backgroundMusic.pause();
        toggleMusicBtn.textContent = 'LÊN NHẠC';
      }
    });
  
})
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('play-pause');
  const seekBar = document.getElementById('seek-bar');
  const currentTimeSpan = document.getElementById('current-time');

  playPauseButton.addEventListener('click', function () {
      if (audio.paused) {
          audio.play();
          playPauseButton.classList.remove('play');
          playPauseButton.classList.add('pause');
      } else {
          audio.pause();
          playPauseButton.classList.remove('pause');
          playPauseButton.classList.add('play');
      }
  });

  audio.addEventListener('timeupdate', function () {
      const currentTime = formatTime(audio.currentTime);
      currentTimeSpan.textContent = currentTime;
      seekBar.value = (audio.currentTime / audio.duration) * 100;
  });

  seekBar.addEventListener('input', function () {
      audio.currentTime = (seekBar.value / 100) * audio.duration;
  });

  function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
});



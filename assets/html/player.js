let song = document.getElementById("audio");
let playPauseBtn = document.getElementById("playerBtn");
let time = document.getElementById("time");
let volumeSlider = document.getElementById("volume");

volumeSlider.value = "50";

function togglePlay() {
  if (song.paused) {
    song.play();
    playPauseBtn.src = "pause.png";
  } else {
    song.pause();
    playPauseBtn.src = "play2.png";
  }
}

volumeSlider.addEventListener("input", function() {
  song.volume = this.value / 100;
});

time.addEventListener("input", function() {
  valctime = song.currentTime / 100;
  song.currentTime = this.value;
  console.log(song.currentTime);
});

function getTime() {
  time.value += 0.1;
}
setInterval(getTime, 1000);

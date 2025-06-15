let musicPlayer = document.querySelector(".music-player-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");

let soundBars = document.querySelector(".sound-bars");

// togglePlayer.addEventListener("click", function () {
//   isHidden = !isHidden;
//   if (isHidden) {
//     musicPlayer.classList.remove("hide");
//     togglePlayer.innerHTML = '<ion-icon name="remove-outline"></ion-icon>';
//     trackInfo.style.transitionDelay = "0.4s";
//     trackNav.style.transitionDelay = "0.4s";
//   } else {
//     musicPlayer.classList.add("hide");
//     togglePlayer.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
//     trackInfo.style.transitionDelay = "0s";
//     trackNav.style.transitionDelay = "0s";
//   }
// });

let soundBarsLottie = bodymovin.loadAnimation({
  container: soundBars,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets5.lottiefiles.com/packages/lf20_jJJl6i.json",
});

let trackList = [
  {
    name: "夜に駆ける",
    name_font_size: "1.125rem",
    artist: "YOASOBI",
    path: "./songs/01_Yoasobi_夜に駆ける.mp3",
  },
  {
    name: "祝福",
    name_font_size: "1.125rem",
    artist: "YOASOBI",
    path: "./songs/02_Yoasobi_祝福.mp3",
  },
  {
    name: "勇者",
    name_font_size: "1.125rem",
    artist: "YOASOBI",
    path: "./songs/03_Yoasobi_勇者.mp3",
  },
  {
    name: "怪物",
    name_font_size: "1.125rem",
    artist: "YOASOBI",
    path: "./songs/04_Yoasobi_怪物.mp3",
  },
  {
    name: "世界が終わるまでは",
    name_font_size: "0.75rem",
    artist: "WANDS",
    path: "./songs/05_WANDS_世界が終わるまでは.mp3",
  },
  {
    name: "Change The World",
    name_font_size: "0.5rem",
    artist: "V6",
    path: "./songs/06_V6_Change The World.mp3",
  },
  {
    name: "Butter-Fly",
    name_font_size: "0.9rem",
    artist: "Sho Oosawa",
    path: "./songs/07_Sho Oosawa_Butter-Fly.mp3",
  },
  {
    name: "Power",
    name_font_size: "1.125rem",
    artist: "G-DRAGON",
    path: "./songs/08_G-DRAGON_Power.mp3",
  },
  {
    name: "Home Sweet Home",
    name_font_size: "0.55rem",
    artist: "BIGBANG",
    path: "./songs/09_BIGBANG_Home Sweet Home.mp3",
  },
  {
    name: "Pit-a-Pat",
    name_font_size: "1.125rem",
    artist: "Defconn",
    path: "./songs/10_Defconn_Pit-a-Pat Racing.mp3",
  },
  {
    name: "踊り子",
    name_font_size: "1.125rem",
    artist: "Vaundy",
    path: "./songs/11_Vaundy_踊り子.mp3",
  },
];

function loadTrack(trackIndex) {
  currentTrack.src = trackList[trackIndex].path;
  currentTrack.load();
  trackName.textContent = trackList[trackIndex].name;
  trackName.style.fontSize = trackList[trackIndex].name_font_size;
  trackArtist.textContent = trackList[trackIndex].artist;
  currentTrack.addEventListener("ended", nextTrack);
}

loadTrack(trackIndex);

function playPauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<ion-icon name="pause-sharp"></ion-icon>';
  soundBarsLottie.playSegments([0, 120], true);
}

function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<ion-icon name="play-sharp"></ion-icon>';
  soundBarsLottie.stop();
}

function nextTrack() {
  if (trackIndex < trackList.length - 1) trackIndex += 1;
  else trackIndex = 0;
  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) trackIndex -= 1;
  else trackIndex = trackList.length - 1;
  loadTrack(trackIndex);
  playTrack();
}

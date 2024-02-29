const musicContainer = document.getElementById('music-container')
const prevBtn = document.getElementById('prev')
const stopBtn = document.getElementById('stop')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const timeDisplay = document.getElementById('time-display')

const audio = document.getElementById('audio')
const title = document.getElementById('song-title')
const cover = document.getElementById('cover')

const song = document.getElementsByClassName('song')

// convert all elements with the className 'song' into an "array"
const songArray = Array.from(song);

// Song Titles
const songs = ['hey', 'ukulele', 'summer', 'hip hop', 'big room'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(selectedSong) {
  title.innerText = selectedSong;
  audio.src = `music/${selectedSong}.mp3`;
  // cover.src = `images/${selectedSong}.jpg`

}

// Play Song
function playSong() {
  musicContainer.classList.add('play')

  playBtn.classList.remove('fa-play')
  playBtn.classList.add('fa-pause')

  audio.play()
}

// Pause Song
function pauseSong() {
  musicContainer.classList.remove('play')

  playBtn.classList.remove('fa-pause')
  playBtn.classList.add('fa-play')

  audio.pause()
}

// Stop Song
function stopSong() {
  musicContainer.classList.remove('play')

  playBtn.classList.remove('fa-pause')
  playBtn.classList.add('fa-play')

  // cover.transform = 'rotate(0deg)'
  // cover.classList.add('reset-rotation')

  audio.pause()
  audio.currentTime = 0
}

// Previous Song
function prevSong() {
  songIndex--

  if (songIndex < 0) {
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex])

  playSong()
}

// Next Song
function nextSong() {
  songIndex++

  if (songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])

  playSong()
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  // calulates the currentTime in "minutes"
  let minute = parseInt(Math.floor(currentTime) / 60)

  // calculates the seconds as "whole numbers" between 0 and 60 seconds
  let second = Math.floor(parseInt(currentTime) - 60 * minute)

  // calculates the remaining seconds of duration
  let remainingSecond = parseInt(duration) % 60

  // puts a '0' before the currentTime and duration if the seconds are < 0
  if(second < 10){
    second = `${'0' + second}`
  }

  if(remainingSecond < 10){
    remainingSecond = `${'0' + remainingSecond}`
  }

  // -- timeDisplay is shown if the audio duration is "NaN" (Not a Number) --
  // -- it prevents the duration to been shown as "NaN : NaN"
  if (audio.duration) {
    // song time is shown as "minute : seconds / duration"
    timeDisplay.innerText = `${minute + ':' + second} / ${Math.floor(duration / 60) + ':' + remainingSecond}`;
  }
}



// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  // const width = e.target.offsetWidth;

  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Select song
function selectSong(e) {
  // get the index of the selected song
  songIndex = songArray.indexOf(e.target);

  // apply the index and load the song
  loadSong(songs[songIndex]);

  playSong()
}

// Event Listener
playBtn.addEventListener('click', function () {
  const isPlaying = musicContainer.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  }
  else {
    playSong()
  }
})

// Change song
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// Stop song
stopBtn.addEventListener('click', stopSong)

// Time/Song update event
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress)

// Song ends
audio.addEventListener('ended', nextSong);

// Event to select each song of the songlist
for (n = 0; n < song.length; n++) {
  song[n].addEventListener('click', selectSong)
}

/**
 * Created by whomer on 4/22/2017.
 */

var video = document.getElementById("video");
var sound = document.getElementById("sound");

//play or pause toggle button
function playPause() {
  if (video.paused) {
    video.play();
  }else {
    video.pause();
  }
}

//control the mute toggle button
function mute(){
  if (video.muted){
    video.muted = false;
  }else {
    video.muted = true;
  }
}

//change the volume of the sound.
function volume() {
  video.volume = 0.5;
}

//jump back 10 seconds
function back10() {
  video.currentTime= video.currentTime - 10;
}

//slow motion the video
function slowMotion(){
  video.defaultPlaybackRate = 0.1;
  video.load();
}



//play audio sound
function playSound() {
  sound.play();
}
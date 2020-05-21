var e_play;
var e_video;
var e_pause;
var e_fast;
var e_rewind;

window.onload = function() {
  e_play = document.getElementById("play");
  e_pause = document.getElementById("pause");
  e_fast = document.getElementById("fast");
  e_rewind = document.getElementById("rewind");
  e_video = document.getElementById("video");

  e_play.addEventListener("click", play_func, false);
  e_pause.addEventListener("click", pause_func, false);
  e_fast.addEventListener("click", fast_func, false);
  e_rewind.addEventListener("click", rewind_func, false);
}

// 再生
function play_func() {
  e_video.playbackRate = 1;
  e_video.play();
}

// 停止
function pause_func() {
  e_video.pause();
}

// 早送り、クリックする毎に早くなる
function fast_func() {
  e_video.playbackRate++;
}

// 1秒戻る
function rewind_func() {
  pause_func();
  e_video.currentTime--;
}
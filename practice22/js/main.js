var e_play;
var e_pause;
var e_mute;
var e_down;
var e_up;
var e_loop;
var e_audio;

window.onload = function() {
  e_play = document.getElementById("play");
  e_pause = document.getElementById("pause");
  e_mute = document.getElementById("mute");
  e_down = document.getElementById("down")
  e_up = document.getElementById("up");
  e_loop = document.getElementById("loop")
  e_audio = document.getElementById("audio");

  e_play.addEventListener("click", play_func, false);
  e_pause.addEventListener("click", pause_func, false);
  e_mute.addEventListener("click", mute_func, false);
  e_down.addEventListener("click", down_func, false);
  e_up.addEventListener("click", up_func, false);
  e_audio.addEventListener("ended", loop_func, false);
}

function play_func() {
  e_audio.play();
}

function pause_func() {
  e_audio.pause();
}

function mute_func() {
  e_audio.volume = 0;
}

function down_func() {
  if(e_audio.volume > 0.1) {
    e_audio.volume -= 0.1;
  } else {
    e_audio.volume = 0;
  }
}

function up_func() {
  if(e_audio.volime < 0.9) {
    e_audio.volume += 0.1;
  } else {
    e_audio.volume = 1.0;
  }
}

function loop_func() {
  if(e_loop.checked) {
    // currentTimeプロパティは経過時間を表す
    e_audio.currentTime = 0;
    play_func();
  }
}
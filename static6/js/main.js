var image_dir = "image/";
var idx = 1;
var file_name = ["himawari.jpg", "sougen.jpg", "yakei.jpg"];
var time_id = null;

function timer_set() {
  if(time_id == null) {
    var late_w = document.getElementById("late").value;
    var late = Number(late_w);
    if(isNaN(late) || late == 0) {
      late = 1000;
    }
    time_id = setInterval(play, late);
  }
}

function play() {
  document.getElementById("gazou").src = image_dir + file_name[idx];
  idx++;
  idx %= file_name.length
}

function stop() {
  clearTimeout(time_id);
  time_id = null;
}

window.onload = function() {
  var play_id = document.getElementById("play");
  play_id.addEventListener("click", timer_set );
  var stop_id = document.getElementById("stop");
  stop_id.addEventListener("click", stop)
}
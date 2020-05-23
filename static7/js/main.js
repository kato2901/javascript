// 未完
var opacity = 1.0;
var timer_id = null;
const late = 50;

function timer_f_in() {
  if(timer_id == null) {
    timer_id = setInterval(click_f_in, late);
  }
}

function timer_f_out() {
  if(timer_id == null) {
    timer_id = setInterval(click_f_out, late);
  }
}

function click_f_in() {
  if(opacity < 1.0) {
    opacity += 0.1;
    document.getElementById("image").style.opacity = opacity;
  } else {
    clearInterval(timer_id);
    timer_id = null;
  }
}

function click_f_out() {
  if(opacity > 0) {
    opacity -= 0.1;
    document.getElementById("image").style.opacity = opacity;
  } else {
    clearInterval(timer_id);
    timer_id = null;
  }
}

function click_org() {
  clearInterval(timer_id);
  timer_id = null;
  opacity = 1.0;
  document.getElementById("image").style.opacity = opacity;
}

window.onload = function() {
  document.getElementById("f_in").addEventListener("click", click_f_in, false);
  document.getElementById("f_out").addEventListener("click", click_f_out, false);
  document.getElementById("org").addEventListener("click", click_org, false);
}
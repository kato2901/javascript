// 未完
var img;
var org_width = 0;
var org_height = 0;
var timer_id = null;
var loop_cnt = 10;
const size_up = 0.02;
const late = 50;

function timer_large() {
  if(timer_id == null) {
    timer_id = setInterval(click_large, late);
  }
}

function timer_small() {
  if(timer_id == null) {
    timer_id = setInterval(click_small, late);
  }

}

function init() {
  img = document.getElementById("image");
  org_width = img.width;
  org_height = img.height;
}

function click_large() {
  if (loop_cnt > 0) {
    dw = img.width * size_up;
    dh = img.height * size_up;
    img.width += dw;
    img.height += dh;
    loop_cnt--;
  } else {
    clearInterval(timer_id);
    timer_id = null;
    loop_cnt = 10;
  }
}

function click_small() {
  if (loop_cnt > 0) {
    dw = img.width * size_up;
    dh = img.height * size_up;
    img.width -= dw;
    img.height -= dh;
    loop_cnt--;
  } else {
    clearInterval(timer_id);
    timer_id = null;
    loop_cnt = 10;
  }
}

function click_org() {
  img.width = org_width;
  img.height = org_height;
  loop_cnt = 10;
}

window.onload = function() {
  document.getElementById("large").addEventListener("click", click_large, false);
  document.getElementById("small").addEventListener("click", click_small, false);
  document.getElementById("org").addEventListener("click", click_org, false);
  init();
}
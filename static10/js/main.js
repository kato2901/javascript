// 線形グラデーション
// var grd = ct.createLinearGradient(x1, y1, x2, y2);
// grd.addColorStop(pt,color);
// ct.fillStyle = grd;
// x1, y1・・・グラデーションの開始座標
// x2, y2・・・グラデーションの終了座標
// pt・・・グラデーションの範囲を0~1で示した時の地点
// color・・・その地点での色

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  ct.beginPath();
  var grd = ct.createLinearGradient(0, 0, 250, 250);
  grd.addColorStop( 0 ,"#ff0000");
  grd.addColorStop( 0.5 ,"#ffffff");
  grd.addColorStop( 1 ,"#ffff00");

  ct.fillStyle = grd;
  ct.fillRect(50, 50, 200, 200);
}

// 輪郭をグラデーション
window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  ct.beginPath();
  var grd = ct.createLinearGradient(50, 50, 250, 250);
  grd.addColorStop( 0 ,"#ff0000");
  grd.addColorStop( 0.2 ,"#ffff00");
  grd.addColorStop( 0.4 ,"#00ff00");
  grd.addColorStop( 0.6 ,"#00ffff");
  grd.addColorStop( 0.8 ,"#0000ff");
  grd.addColorStop( 1 ,"#ff00ff");

  ct.lineWidth = 10;
  ct.strokeStyle = grd;
  ct.strokeRect(50, 50, 200, 200);
}

// 円形グラデーション
// var grd = ct.createRadialGradient(x1, y1, r1, x2, y2, r2);
// x1,y1・・・グラデーションの開始中心座標
// r1・・・開始点半径
// x2, y2・・・グラデーションの終了座標
// r2・・・終了点半径

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  ct.beginPath();
  var grd = ct.createRadialGradient(150, 150, 5, 150, 150, 150);
  grd.addColorStop( 0 ,"#ff0000");
  grd.addColorStop( 0.5 ,"#ffff00");
  grd.addColorStop( 1 ,"#00ff00");

  ct.fillStyle = grd;
  ct.fillRect(50, 50, 200, 200);
}
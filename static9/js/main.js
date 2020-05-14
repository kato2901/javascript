// 四角の図形
window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");    // getContextは描画するためのオブジェクト、"2d"は固定値

// 塗り潰し
  ct.fillStyle = "#ff0000";
  ct.fillRect(50, 50, 100, 100);

// 輪郭もしくは円弧の描画
  ct.strokeStyle = "#00ff00";
  ct.strokeRect(75, 75, 150, 150);
}

// 円の図形
// beginPath();
// arc(x, y, r, s, e, flg);
// x,y・・・円の中心の座標
// r・・・円の半径
// s・・・開始角度
// e・・・終了角度
// flg・・・回る方向
// true・・・逆時計回り
// false・・・時計回り

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");


  ct.beginPath();       //描画の開始を宣言
  ct.arc(160, 160, 100, 0, 2 * this.Math.PI, true);
  ct.fillStyle = "#ff0000";     // 塗りつぶす色指定
  ct.fill();    // 塗りつぶす形

  ct.beginPath();
  ct.arc(280, 240, 100, 0, 2 * this.Math.PI, true);
  ct.strokeStyle = "#ff0000";
  ct.stroke();
}

// 直線の描画
window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  ct.beginPath();
  ct.moveTo(20, 20);   // 直線の開始位置
  ct.lineTo(200, 200);   // 終了位置
  ct.strokeStyle = "#ff0000";
  ct.stroke();
}

// 多角形の描画
window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  ct.beginPath();
  ct.moveTo(20, 20);
  ct.lineTo(80, 100);
  ct.lineTo(40, 250);
  ct.lineTo(150, 250);
  ct.lineTo(250, 100);
  ct.closePath();   // 最後の頂点と最初の頂点を結ぶ

  ct.lineWidth = 10;    // 線の太さ
  ct.strokeStyle = "#0000ff";
  ct.stroke();

  ct.fillStyle = "#00ffff";
  ct.fill();

}
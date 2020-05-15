// 画像の描画
// var img = new Image();
// img.src = 画像データのアドレス
// img.onload = function() {
//   ct.drawImage(this, x, y);
// };

// window.onload = function() {
//   var cv = document.getElementById("canvas1");
//   var ct = cv.getContext("2d");
// }

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  var img = new Image();
  img.src = "image/animal_oryx.jpg";

  img.onload = function() {
    ct.drawImage(this, 0, 0);
  };
}

// 描画の指定
// サイズの指定
// ct.drawImage(this, x, y, w, h)
// w・・・横
// y・・・縦

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  var img = new Image();
  img.src = "image/animal_oryx.jpg";

  img.onload = function() {
    ct.drawImage(this, 0, 0, 200, 160);
  };
}

// 元画像の切り抜き描画
// ct.drawImage(this, sx, sy, sw, sh, tx, ty, tw, th);

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  var img = new Image();
  img.src = "image/animal_oryx.jpg";

  img.onload = function() {
    ct.drawImage(this, 90, 100, 100, 80, 0, 0, 200, 160);
  };
}

// 移動
// ct.translate(dx, dy);
// dxは水平、dyは垂直方向の移動量

// 拡大・縮小
// ct.scale(sx, sy);
// sxは幅、syは高さの拡大率(等倍=1.0)

// 回転
// ct.rotate(ラジアン);
// 時計回りの回転角度のラジアン値

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  var img = new Image();
  img.src = "image/animal_oryx.jpg";

  img.onload = function() {
    ct.translate(180, 0);
    ct.scale(0.5, 0.5);
    ct.rotate(45/180*Math.PI);
    ct.drawImage(this, 0, 0);
  };
}

// クリッピング・・・画像などを特定の形にくり抜く
// ct.beginPath();
// ct.arc(x, y, r, s, e, flg);     図形を形成
// ct.stroke();
// ct.clip();
// ct.drawImage(this, x, y);

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");

  var img = new Image();
  img.src = "image/animal_oryx.jpg";

  img.onload = function() {
    ct.beginPath();
    ct.arc(200, 200, 150, 0, 2 * Math.PI,  false);
    ct.stroke();
    ct.clip();
    ct.drawImage(this, 50, 50);
  };
}
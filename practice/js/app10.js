// Mathオブジェクト・・・円周率の値や平方根など数学的な値や計算結果を得ることができるオブジェクト

var n = 4.58 ;
n *= 10 ;
document.write(
  "小数点以下を切り上げ" + Math.ceil(n)/10 + "です。<br>"
);
document.write(
  "小数点以下を切り捨て" + Math.floor(n)/10 + "です。<br>"
);
document.write(
  "小数点以下を四捨五入" + Math.round(n)/10 + "です。<br>"
);


// 数値の比較、絶対値
var m = -10 ;
var n = 5 ;

// 小さい方の値取得
document.write(
  m + "と" + n + "の小さい方の値は、" + Math.min(m,n) + "です。<br>"
);

// 大きい方の値を取得
document.write(
  m + "と" + n + "の大きい方の値は、" + Math.max(m,n) + "です。<br>"
);

// 絶対値を取得
document.write(
  m + "の絶対値は、" + Math.abs(m) + "です。<br>"
);

// 乱数・・・0以上1未満の値をランダムに返す

// 10回繰り返す中で乱数を取得
for (var i = 0; i < 10; i++) {
  document.write(Math.random() + "<br>");
}

// 1~50の中の乱数を取得
for (var i = 0; i < 10; i++) {
  var n = Math.random();
  document.write(
    (Math.floor(n * 50) + 1) + "(乱数 :" + n + ")<br>"
  );
}
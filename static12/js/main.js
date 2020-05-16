// 円グラフ
var data = [
  {level:"賛成"           ,value:35 ,color:"#ff0000"},  // 赤
  {level:"条件付きで賛成" ,value:30 ,color:"#0000ff"},  // 青
  {level:"反対"           ,value:20 ,color:"#00ff00"},  // 黄緑
  {level:"どちらでもない" ,value:10 ,color:"#ffff00"},  // 黄
  {level:"無回答"         ,value:5 ,color:"#00ffff"},   // 水
];

window.onload = function() {
  var cv = document.getElementById("canvas1");
  var ct = cv.getContext("2d");
  var rag;    // パーセンテージが描く角度を求めてその値を保存
  var sum = -0.5 * this.Math.PI;

  // 扇型を描画するため
  for(var i = 0; i < data.length; i++) {
    ct.beginPath();
    ct.moveTo(160, 160);    // 円グラフの中心
    rag = data [i].value / 50 * this.Math.PI;
    ct.arc(160, 160, 100, sum, sum += rag, false);    // falseは時計周りを描画
    ct.closePath();
    ct.fillStyle = data [i].color;
    ct.fill();
    // ラベルの表示
    ct.fillRect (300, i * 20 + 60, 10, 10);
    ct.font = "15px 'MS Gothic'";
    ct.fillStyle = "#000000";
    ct.fillText(data[i].level, 320, i * 20 + 70);   // y座標をi * 20 + 70とすることで項目名が重ならないよう位置をずらしている
    ct.fillText(data[i].value + "%", 450, i * 20 +70);
  }
}
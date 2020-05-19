var seiseki = [
  {shimei:"あべ ごろう"       , tokuten:"45"},
  {shimei:"すずき じろう"     , tokuten:"62"},
  {shimei:"やまだ しろう"     , tokuten:"78"},
  {shimei:"こばやし さぶろう" , tokuten:"57"},
  {shimei:"わたなべ たろう"   , tokuten:"82"}
];

var e_shimei;
var e_tokuten;

window.onload = function() {
  e_shimei = document.getElementById("shimei");
  e_tokuten = document.getElementById("tokuten");

  e_shimei.addEventListener("mouseover", function() {
    this.style.cursor = "pointer";}, false);
  e_tokuten.addEventListener("mouseover", function() {
    this.style.cursor = "pointer";}, false);
  e_shimei.addEventListener("click", sort_shimei, false);
  e_tokuten.addEventListener("click", sort_tokuten, false);
  show();
}

function show() {
  var msg = "";
  for(var i = 0; i < seiseki.length; i++) {
    msg += "<tr><th>" + (i + 1) + "</th>";
    msg += "<td>" + seiseki[i].shimei + "</td>";
    msg += "<td>" + seiseki[i].tokuten + "</td></tr>";
  }
  // tbodyの内容にメッセを代入
  document.getElementById("tb").innerHTML = msg;
}

function sort_shimei() {
  var work = new Object();
  // 基準点をループさせる
  for(var i = 0; i < seiseki.length - 1; i++) {
    // 比較対象をループさせる
    // 「あいうえお」は昇順で表示
    for(var j = i + 1; j < seiseki.length; j++) {
      if(seiseki[i].shimei > seiseki[j].shimei) {
        work["shimei"] = seiseki[j].shimei;
        [j].shimei;
        work["tokuten"] = seiseki[j].tokuten;
        seiseki[j].shimei = seiseki[i].shimei;
        seiseki[j].tokuten = seiseki[i].tokuten;
        seiseki[i].shimei = work["shimei"];
        seiseki[i].tokuten = work["tokuten"];
      }
    }
  }
  show();
}

// 後ろの値が大きい時は配列の中身を入れ替える処理(バブルソート)
function sort_tokuten() {
  var work = new Object();
  // 基準点をループさせる
  for(var i = 0; i < seiseki.length - 1; i++) {
    // 比較対象をループさせる
    // 数字の大きい順は降順
    for(var j = i + 1; j < seiseki.length; j++) {
      if(seiseki[i].tokuten < seiseki[j].tokuten) {
        work["shimei"] = seiseki[j].shimei;
        [j].shimei;
        work["tokuten"] =seiseki[j].tokuten;
        seiseki[j].shimei = seiseki[i].shimei;
        seiseki[j].tokuten = seiseki[i].tokuten;
        seiseki[i].shimei = work["shimei"];
        seiseki[i].tokuten = work["tokuten"];
      }
    }
  }
  show();
}
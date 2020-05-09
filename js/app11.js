// Dateオブジェクト・・・日付や時刻の編集を行うことのできるオブジェクト

var date = new Date();

// 西暦年　月　日　時　分　秒で表示
document.write (
  date.toLocaleString() + "<br>"
);
// 西暦年　月　日で表示
document.write (
  date.toLocaleDateString() + "<br>"
);
// 時　分　秒で表示
document.write (
  date.toLocaleTimeString() + "<br>"
);

// 任意の日付を設定
var date = new Date(2015, 11, 3, 15, 10, 30, 000);
var date2 = new Date();

document.write (
  date.toLocaleString() + "<br>"
);

date2.setFullYear(2014);
date2.setMonth(3 - 1);
date2.setDate(20);
date2.setHours(17);
date2.setMinutes(45);
date2.setSeconds(30);

document.write (
  date2.toLocaleString() + "<br>"
);

// 日付・時刻を取得
var youbi = ["日", "月", "火", "水", "木", "金", "土"];
var date = new Date();

document.write(youbi [date.getDay()] + "曜日<br>");
document.write(
  (date.getMonth() + 1 ) + "月<br>"
);
document.write(
  (date.getDate()) + "日<br>"
);
document.write(
  (date.getFullYear()) + "年<br>"
);
document.write(
  (date.getHours()) + "時<br>"
);
document.write(
  (date.getMinutes() ) + "分<br>"
);
document.write(
  (date.getSeconds() ) + "秒<br>"
);
document.write(
  (date.getMilliseconds() ) + "ミリ秒<br>"
);
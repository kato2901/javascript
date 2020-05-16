var date;
var e_tuki;
var e_hi;

window.onload = function() {
  e_tuki = document.getElementById("tuki");
  e_hi = document.getElementById("hi");

  date = new Date();
  date.setDate(date.getDate() + 1);

  var date2 = new Date(date.getTime());
  add_option(date2);

  e_hi.value = date.getDate();
  e_tuki.value = date.getMonth() + 1;
  e_tuki.addEventListener("change", change_tuki, false);
}

// 日付の設定 add_optionはDateオブジェクトを引数にする
function add_option(dt) {
  var day = dt.getDate();
  dt.setMonth(dt.getMonth() + 1);

  // 日の設定が0日ということは前日を意味するので、翌月の1日の前日(当月の末日)ということになる
  dt.setDate(0);
  
  // 変数iが翌日のdayから月末のgetDateまで変化する繰り返し
  for(var i = day; i <= dt.getDate(); i++) {
    // document.createElementでoptionの要素を生成
    var option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerHTML = i;
    e_hi.appendChild(option);
  }
}

function change_tuki() {
  var dt = new Date(date.getTime());
  dt.setMonth(e_tuki.value - 1);
  // 選択された月が当月でなければ1(1日)を設定する
  if(dt.getMonth() != date.getMonth()) {
    dt.setDate(1);
    // dtの月の値が当月より小さい場合は翌年の月になる
    if(dt.getMonth() < date.getMonth()) {
      dt.setFullYear(date.getFullYear() + 1);
    }
  }
  e_hi.length = 0;
  var date2 = new Date(dt.getTime());
  add_option(date2);
  e_hi.value = dt.getDate();
}
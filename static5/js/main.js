// onfocsイベント
function focus_text() {
  var e_id = document.getElementById("mess");
  e_id.innerHTML = "半角英数字を入力してください。"
}

// onblurイベント
function kingaku_keisan(su) {
  var e_id = document.getElementById("gokei");
  e_id.innerHTML = 1000 * su;
}

// onchangeイベント
function select_change(idx, no) {
  var data = ["", "銀行振込", "コンビニ支払", "クレジットカード支払", "代引", "着払い"];

  var mess = ["", "振込手数料はご負担ください", "200円かかる", "", "代引手数料がかかるよ", ""];

  var w_index = document.getElementById("no_index");
  w_index.innerHTML = idx;

  var w_houhou = document.getElementById("houhou");
  w_houhou.innerHTML = data[no];

  var w_mess = document.getElementById("message");
  w_mess.innerHTML = mess[no];
}

// onsubmitイベント
function form_check() {
  var err_flag = true;
  var text_id = document.getElementById("text_box");
  if (text_id.value.length == 0) {
    alert("データを入力してください");
    err_flag = false;
  }
  return err_flag;
}
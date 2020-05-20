// 未完
var e_read;
var e_write;
var e_clear;
var e_key_item;
var e_message;

window.onload = function() {
  e_read = document.getElementById("read");
  e_write = document.getElementById("write");
  e_clear = document.getElementById("clear");
  e_key_item = document.getElementById("key_item");

  e_read.addEventListener("click", read_data, false);
  e_write.addEventListener("click", write_data, false);
  e_clear.addEventListener("click", clear_all, false);
}

// 保存キーの入力を確認
function check_key_item() {
  var flag = true;
  if( e_key_item.value == "") {
    console.log(1);
    alert("保存キーが入力されていません");
    flag = false;
  }
  return flag;
}

function read_data() {
  if(check_key_item ()) {
    var data = localStorage.getItem(e_key_item.value);
    if(data != null) {
      e_message.value = data;
    } else {
      alert("保存キーに該当するデータがありません");
    }
  }
}

function write_data() {
  if(check_key_item()) {
    console.log(2);
    localStorage.setItem( e_key_item.value, e_message.value) ;
    alert("保存しました");
  }
}

function clear_all() {
  if(confirm("ローカルデータを全て初期化します")) {
    localStorage.clear();
    alert("初期化しました");
  }
}
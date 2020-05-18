window.onload = function() {
  document.getElementById("sousin").addEventListener("click", data_check, false);
}

// イベントを処理する関数は2種類の定義の仕方がある
// ①引数がない形  ②引数がひとつでもある形
// 引数がある場合は引数は何でも構わないが形はeventオブジェクトとなる
function data_check(event) {
  var msg = "";

  // +=でデータを足し込んでいく
  if(document.getElementById("code").value == "") {
    msg += "コード未入力です。\n";
  }

  if(document.getElementById("pword").value == "") {
    msg += "パスワード未入力です。\n";
  }

  if(msg != "") {
    alert(msg);
    return;
    // event.preventDefalutメソッドはイベントを停止するメソッドなので、実行による送信が行われなくなる
    // event.preventDefalut();
  }

  document.getElementById("form").submit();

}
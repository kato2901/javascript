// 正規表現
// 数字項目のチェック    /[^0-9]+/     文字列中に数字以外の文字が含まれている

// 英字項目のチェック    /[^a-zA-Z]+/    文字列の中に半角の英字以外の文字が含まれている

// 英数字項目のチェック    /[^a-zA-Z0-9]+/   文字列の中に半角の英数字以外の文字が含まれている

// ひらがな項目のチェック    /[^ぁ-ん]+/   文字列中に全角のひらがな以外の文字が含まれている

// カタカナ項目チェック    /[^ァ-ン]+/   文字列中に全角のカタカナ以外の文字が含まれている

var e_code;
var e_kana;
var e_suosin;
var e_name;

window.onload = function() {
  e_code = document.getElementById("code");
  e_kana = document.getElementById("kana");
  e_name = document.getElementById("nname");
  e_sousin = document.getElementById("sousin");

  // blurは選択が外された時に発生するイベント
  e_code.addEventListener("blur", check_code, false);
  e_kana.addEventListener("blur", check_kana, false);
  e_sousin.addEventListener("click", check_all, false);
}

function check_code() {
  var flag = true;
  // 数字か否かをチェックするには、matchメソッドを利用
  // matchメソッドはStringオブジェクトである文字列が引数の条件と一致しているか否かを判定するメソッド
  if(e_code.value.match(/[^0-9]+/)) {
    alert("会員番号が数値ではありません。");
    flag = false;
  }
  return flag;
}

function check_kana() {
  var flag = true;
  if(e_kana.value.match(/[^ぁ-ん]+/)) {
    alert("ふりがな、ひらがなではありません。");
    flag = false;
  }
  return flag;
}

function check_all() {
  var msg = "";
  if(e_code.value == "") {
    msg = "会員番号が未入力です。\n";
  }

  if(e_kana.value == "") {
    msg += "ふりがなが未入力です。\n";
  }

  if(e_name.value == "") {
    msg += "名前が未入力です。\n";
  }

  if(msg != "") {
    alert(msg);
  } else {
    if(check_code() && check_kana()) {
      document.getElementById("form").submit();
    }
  }
}
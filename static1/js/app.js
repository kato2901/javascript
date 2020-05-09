// DOM・・・HTML文章をオブジェクトとして扱えるようにしたもの

var text_1 =document.getElementById("text1");
var text_2 =document.getElementById("text2");
var text_3 =document.getElementById("text3");

text_1.innerHTML = "DOMで文字を表示しました。";
text_2.innerHTML = "文字に色をつけます。";
text_2.style.color = "#ffffff";
text_2.style.background = "#000000";
text_3.innerHTML = "<a href='http://yahoo.co.jp'>Yahoo!</a>";
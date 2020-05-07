// Stringオブジェクト・・・文字列を扱うオブジェクト
// lengthプロパティ・・・文字列の長さ(文字数)を保存するプロパティ

var str = "abcあいう";
document.write("「" + str + "」は、" + str.length + "文字です。");

// substringメソッド・・・文字列の一部を抜き出して新しい文字列を作るメソッド

var code = "ABC001";
document.write (
  code + "の4文字目以降は、" + code.substring(3) + "です。<br>");
document.write (
  code + "の3番目から4文字目は、" +
  code.substring(2,4) + "です。<br>"
);

// subsrtメソッド・・・substringとの違いは、２つ目の引数が文字位置ではなく、文字数

var code = "ABC001";
document.write (
  code + "の4文字目以降は、" + code.substr(3) + "です。<br>");
document.write (
  code + "の3番目から3文字は、" +
  code.substr(2,3) + "です。<br>"
);

// charAtメソッド・・・文字列から１文字だけ抜き取るメソッド

var str = "ABCDEFG";
document.write (
  str + "の5文字目は、" + str.charAt(4) + "です。<br>");

  // indexOfメソッド・・・文字列の中の指定文字の開始位置を探すメソッド

var str = "ABCABCABC";
document.write (
  str + "の中にBCは、" + (str.indexOf("BC")+1) + "文字目にあります。<br>");
  document.write (
    str + "の中にBCは、" + (str.indexOf("BC", 2)+1) + "文字目にあります。<br>");

// lastIndexOfメソッド・・・文字列中の指定文字列の開始位置を後方から遡って探すメソッド

var str = "ABCABCABC";
document.write (
  str + "の中にBCは、" + (str.lastIndexOf("BC")+1) + "文字目にあります。<br>");
  document.write (
    str + "の中にBCは、" + (str.lastIndexOf("BC", 2)+1) + "文字目にあります。<br>");

    // splitメソッド・・・文字列を指定文字で分割するメソッド

var prof = "氏名,年齢,住所,電話番号";
var profs = prof.split(",");
var len = profs.length;
for(var i = 0 ; i < len; i++) {
  document.write(i + "." + profs[i] + "<br>");
}
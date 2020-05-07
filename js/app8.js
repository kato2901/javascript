var a = 80;
var b = 90;

function view() {
  var a = 4;
  var b = 5;
  document.write("関数内:" + a + "," + b + "<br>");
}

view();
document.write("関数外" + a + "," + b + "<br>");
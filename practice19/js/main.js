var syousetu = [
  {sakka:"芥川龍之介", sakuhin:"蜘蛛の糸",   flag:false},
  {sakka:"太宰治",     sakuhin:"人間失格",   flag:false},
  {sakka:"太宰治",     sakuhin:"走れメロス", flag:false},
  {sakka:"中島敦",     sakuhin:"山月記",     flag:false},
  {sakka:"芥川龍之介", sakuhin:"杜子春",     flag:false},
  {sakka:"中島敦",     sakuhin:"名人伝",     flag:false},
  {sakka:"芥川龍之介", sakuhin:"羅生門",     flag:false},
  {sakka:"中島敦",     sakuhin:"弟子",       flag:false},
  {sakka:"太宰治",     sakuhin:"斜陽",       flag:false}
];
var e_text1;
var e_text2;
var e_change;

window.onload = function() {
  var msg = "オブジェクト名:syousetu<br>";
  e_text1 = document.getElementById("text1");
  e_text2 = document.getElementById("text2");
  e_change = document.getElementById("change");

  e_change.addEventListener("click", change, false);

  for(var i = 0; i < syousetu.length; i++) {
    msg += "sakka:" + syousetu[i].sakka;
    msg += "sakuhin:" + syousetu[i].sakuhin;
    msg += "flag:" + syousetu[i].flag + "<br>";
  }
  e_text1.innerHTML = msg;
}

// JSONフォーマットに変換
function change() {
  var msg = JSON.stringify(syousetu);
  e_text2.innerHTML = msg;
}
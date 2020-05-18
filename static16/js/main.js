var syousetu = [
  {sakka:"芥川龍之介", sakuhin:"蜘蛛の糸", flag:false},
  {sakka:"太宰治", sakuhin:"人間失格", flag:false},
  {sakka:"太宰治", sakuhin:"走れメロス", flag:false},
  {sakka:"中島敦", sakuhin:"山月記", flag:false},
  {sakka:"芥川龍之介", sakuhin:"杜子春", flag:false},
  {sakka:"中島敦", sakuhin:"名人伝", flag:false},
  {sakka:"芥川龍之介", sakuhin:"羅生門", flag:false},
  {sakka:"中島敦", sakuhin:"弟子", flag:false},
  {sakka:"太宰治", sakuhin:"斜陽", flag:false}
];

window.onload = function() {
  document.getElementById("search_button").addEventListener("click", search_sakka, false);
  show();
}
function show() {
  var msg = "";
  var bc;

  for(var i=0; i < syousetu.length; i++) {
    if(syousetu[i].flag) {
      bc = "#ffff00";
    } else {
      bc = "#ffffff";
    }

    msg += "<tr style='background-color:" + bc + "'>";
    msg += "<th>" + (i + 1) + "</th>";
    msg += "<td>" + syousetu[i].sakka + "</td>";
    msg += "<td>" + syousetu[i].sakuhin + "</td></tr>";
  }
  document.getElementById("tb").innerHTML = msg;
}

function search_sakka() {
  var search_name = document.getElementById("search_text").value;

  for(var i = 0; i < syousetu.length; i++) {
    syousetu[i].flag = false;   // 背景を初期化
    // RegExp 部分一致
    if(search_name != "" && syousetu[i].sakka.match (new RegExp (search_name))) {
      syousetu[i].flag = true;
    }
  }
  // 表の中身を再描画
  show();
}
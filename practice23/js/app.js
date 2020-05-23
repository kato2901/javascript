// 表示
$(function() {
  $("#text1").html("<p>jQueryが発行した文章</p>");
  $("#text1").css("color", "#0000ff");
});

// アラート
function button_click() {
  alert("ボタンが押されました")
}

$(function() {
  $("#button_id").click(button_click);
});

// マウスイベント
$(function() {
  $("#b_img").mouseover(function() {
    $(this).attr({"src" : "b_2.jpg"})
  });
  $("#b_img").mouseout(function() {
    $(this).attr ({"src" : "b_1.jpg"})
  });
});
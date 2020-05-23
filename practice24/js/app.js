// フェードイン/フェードアウト
$(function () {
  $("#f_in").click(function () {
    $("#image").fadeIn(2000);
  });

  $("#f_out").click(function () {
    $("#image").fadeOut(2000);
  });

  $("#org").click(function () {
    $("#image").fadeIn();
  });
});

// スライドダウン/スライドアップ
$(function() {
  $("#f_in").click(function () {
    $("#image").slideDown(2000);
  });

  $("#f_out").click(function () {
    $("#image").slideUp(2000);
  });

  $("#org").click(function () {
    $("#image").slideDown();
  });
});

// フェードイン/フェードアウトの間にイメージを入れ替える
$(function() {
  var dir = "image/";
  var fileName = ["himawari.jpg", "sougen.jpg", "yakei.jpg"];
  var idx = 1;
  $("#image").click(function(){
    $("#image").fadeOut(2000, function(){$(this).attr("src", dir + fileName[idx++]);}).fadeIn(2000);
    idx %= fileName.length;
  });
});
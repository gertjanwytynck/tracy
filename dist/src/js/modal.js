$(document).ready(function() {
  var el = $(".modal");
  el.draggable();
  el.resizable({
    aspectRatio: el.width() / el.height()
  });

  $("a[name=modal]").click(function(e) {
    e.preventDefault();
    var tracy = $("#tracy-container");
    var html = $("html");
    var height = $(window).height();
    var width = $(window).width();
    el.css("top", 64);
    el.css("right", 8);
    el.fadeIn(250);
  });

  $(".modal .close-modal").click(function(e) {
    e.preventDefault();
    $(".modal").fadeOut(250);
  });
});

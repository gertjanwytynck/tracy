$(document).ready(function() {
  $("#video-container").draggable();

  $("a[name=modal]").click(function(e) {
    e.preventDefault();
    var el = $(".modal");
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

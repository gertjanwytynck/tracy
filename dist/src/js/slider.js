$(document).ready(function() {
    // CONSTANT VARS
    const imageCount = 6;
    const path = "img/slider/";

    // RUN
    run(createArrayImages(path, imageCount), generateRandomNumber(imageCount));
});

// HELPER FUNCTIONS
var createArrayImages = function(path, imageCount) {
  var images = [];
  for (var i = 1; i <= imageCount; i++) {
    images.push(path + "img" + i + ".jpg");
  }
  return images;
}

var generateRandomNumber = function(imageCount) {
  return Math.floor(Math.random() * imageCount);
}

var run = function(images, random) {
   $("body").css("background-image", "url(" + images[random] + ")");
}

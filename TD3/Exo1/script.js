function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var img = new Image();
  img.onload = function () {
    for (var i = 0; i < 1; i++) {
      for (var j = 0; j < 1; j++) {
        ctx.drawImage(img, j * 1246, i * 333, 1246, 333);
      }
    }
  };
  img.src = "./images/montagne.jpg";
}

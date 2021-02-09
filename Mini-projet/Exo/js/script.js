var imgBoussole;
var imgAiguille;
var axeX;

function init() {
  imgBoussole = document.getElementById("imgBoussole");
  imgAiguille = document.getElementById("imgAiguille");
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.clearRect(0, 0, 300, 300);

  // Compass
  ctx.drawImage(imgBoussole, 300, 50);

  // Needle
  ctx.save();
  ctx.translate(600, 200);
  ctx.rotate(axeX*(Math.PI/30));
  ctx.drawImage(imgAiguille, -301, -145);
  ctx.restore();

  window.requestAnimationFrame(draw);
}

function deviceOrientation(event){
  axeX = event.alpha;
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientation, false);
}

init();
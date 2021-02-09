var imgBoussole;
var imgAiguille;
var axeX;

function init() {
  imgBoussole = document.getElementById("imgBoussole");
  imgAiguille = document.getElementById("imgAiguille");
  window.requestAnimationFrame(draw1);
  window.requestAnimationFrame(draw2);
}

function draw1() {
  var ctx1 = document.getElementById("canvas1").getContext("2d");

  ctx1.clearRect(0, 0, 300, 300);

  // Boussole
  ctx1.drawImage(imgBoussole, 300, 50);

  // Aiguille
  ctx1.save();
  ctx1.translate(600, 200);
  ctx1.rotate(axeX*(Math.PI/30));
  ctx1.drawImage(imgAiguille, -301, -145);
  ctx1.restore();

  window.requestAnimationFrame(draw1);
}

function draw2() {
  var ctx2 = document.getElementById('canvas2').getContext('2d');

  ctx2.clearRect(0, 0, 300, 300);

  ctx2.save();
  ctx2.translate(400, 150);
  ctx2.beginPath();
  ctx2.lineWidth = 14;
  ctx2.strokeStyle = 'blue';
  ctx2.arc(0, 0, 142, 0, Math.PI*2, true);
  ctx2.stroke();
  ctx2.restore();

  ctx2.save();
  ctx2.translate(400, 150);
  ctx2.rotate(axeX*(Math.PI/180));
  ctx2.strokeStyle = "red";
  ctx2.fillStyle = "red";
  ctx2.lineWidth = 6;
  ctx2.beginPath();
  ctx2.moveTo(-100, 0);
  ctx2.lineTo(100, 0);
  ctx2.stroke();
  ctx2.restore();

  window.requestAnimationFrame(draw2);
}

function deviceOrientation(event){
  axeX = event.alpha;
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientation, false);
}

init();
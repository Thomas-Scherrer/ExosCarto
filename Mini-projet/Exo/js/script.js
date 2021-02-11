var imgBoussole;
var imgAiguille;
var axeX;

function init() {
  imgBoussole = document.getElementById("imgBoussole");
  imgAiguille = document.getElementById("imgAiguille");
  // Canvas
  window.requestAnimationFrame(draw);
}

// Canvas
function draw() {
  var ctx1 = document.getElementById("canvas").getContext("2d");

  ctx1.clearRect(0, 0, 300, 300);

  // Boussole
  ctx1.drawImage(imgBoussole, 300, 50);

  // Aiguille
  ctx1.save();
  ctx1.translate(600, 200);
  ctx1.rotate(axeX*(Math.PI/30));
  ctx1.drawImage(imgAiguille, -301, -145);
  ctx1.restore();

  window.requestAnimationFrame(draw);
}

init();
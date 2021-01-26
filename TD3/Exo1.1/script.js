function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var myimg = document.getElementById("imgMontagne");
  
  // Montagne
  ctx.drawImage(myimg, 0, 0);

  // Maison (carré)
  ctx.fillStyle = "orange";
  ctx.fillRect(20, 220, 100, 100);

  // Porte (rectangle)
  ctx.fillStyle = "brown";
  ctx.fillRect(30, 270, 30, 50);

  // Toit (triangle)
  ctx.beginPath();
  ctx.moveTo(70, 120);
  ctx.lineTo(20, 220);
  ctx.lineTo(120, 220);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();

  // Soleil
  ctx.beginPath();
  ctx.arc(550, 60, 50, 0, Math.PI * 2, true);
  ctx.strokeStyle = "yellow";
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
}

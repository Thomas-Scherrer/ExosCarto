function deviceOrientation(orientation) {
  var alpha = orientation.alpha;
  var beta = orientation.beta;
  var gamma = orientation.gamma;
  document.getElementById("orientation").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>"; 
}

function deviceMotion(mouvement) {
  var x = mouvement.accelerationIncludingGravity.x;
  var y = mouvement.accelerationIncludingGravity.y;
  var z = mouvement.accelerationIncludingGravity.z;
  document.getElementById("mouvement").innerHTML = "<ul><li>X : " + x + "</li><li>Y : " + y + "</li><li>Z : " + z + "</li></ul>"; 
}

if(window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", deviceOrientation, false);
} else {
  // Le navigateur ne supporte pas l'événement deviceorientation
}

if(window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", deviceMotion, false);
} else {
  // Le navigateur ne supporte pas l'événement devicemotion
}
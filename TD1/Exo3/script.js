function process(event) {
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;
  document.getElementById("log").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>"; 
}

if(window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", process, false);
  } else {
    console.log("Le navigateur ne supporte pas l'évènement deviceorientation")
  }
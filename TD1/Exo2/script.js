var options = {
  enableHighAccuracy: true,
};

// Fonction currentPosition()
function currentPosition(position) {
  var infopos = "Ma position actuelle :<br>";
  infopos += "Latitude : " + position.coords.latitude + "<br>";
  infopos += "Longitude: " + position.coords.longitude + "<br>";
  infopos +=
    "Avec une précision de " + position.coords.accuracy + " mètres" + "<br>";
  infopos +=
    "Et une vitesse de déplacement de la position égale à " +
    position.coords.speed +
    "<br>";
  infopos += "Voici le timestamp actuel: " + position.timestamp + "<br>";
  document.getElementById("infoposition").innerHTML = infopos;
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

// Fonction watchPosition()
function surveillePosition(position) {
  var infopos = "Ma position surveillée :<br>";
  infopos += "Latitude : " + position.coords.latitude + "<br>";
  infopos += "Longitude: " + position.coords.longitude + "<br>";
  infopos +=
    "Avec une précision de " + position.coords.accuracy + " mètres" + "<br>";
  infopos +=
    "Et une vitesse de déplacement de la position égale à " +
    position.coords.speed +
    "<br>";
  infopos += "Voici le timestamp actuel: " + position.timestamp + "<br>";
  document.getElementById("surveilleposition").innerHTML = infopos;
}

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(currentPosition, error, options);
var survId = navigator.geolocation.watchPosition(
  surveillePosition,
  error,
  options
);

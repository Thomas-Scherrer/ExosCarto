var options = {
  enableHighAccuracy: true,
};

var mymap = L.map("mapid").setView([25, -80], 4);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
  foo: "bar",
}).addTo(mymap);

// Triangle des Bermudes
var polygon = L.polygon([
  [25.5322, -80.2726],
  [33.06, -64.77],
  [18.484473, -66.3639],
]).addTo(mymap);

window.polygon.setStyle({
  color: "red",
  fillColor: "#C00C00",
});

var circle = L.circle([26.2, -70.66], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 960000,
}).addTo(mymap);


// Distance triangle des Bermudes - Marseille
var latCentreBermudes = 27.13;
var longCentreBermudes = -68.91;

var latMarseille = 43.29;
var longMarseille = 5.36;

function getDistance(lat1,lng1,lat2,lng2) {
  // Radius de la Terre
  var R = 6371; 
  var dLat = degToRad(lat2-lat1); 
  var dLon = degToRad(lng2-lng1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  // Distance en km
  var d = R * c; 
  return d;
}

function degToRad(deg) {
  return (deg * Math.PI)/180
}

document.getElementById('distance').textContent = getDistance(latCentreBermudes, longCentreBermudes, latMarseille, longMarseille);
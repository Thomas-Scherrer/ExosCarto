navigator.geolocation.getCurrentPosition(success, error);
window.addEventListener("deviceorientation", deviceOrientation, true);

var long;
var lat;
var precision;
var myPosition = {}
var compass = new L.Control.Compass()

function success(pos) {
    
    long = pos.coords.longitude
    lat = pos.coords.latitude
    precision = pos.coords.accuracy

    myPosition.lat = lat
    myPosition.long = long

    var map = L.map('mapid').setView([lat, long], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    map.addControl(compass);

    // Cercle autour de ma position
    var circle = L.circle([lat, long], {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: precision
    }).addTo(map);

}

function error() {
    console.log("Vous n'avez pas autorisé la géolocalisation")
}


function deviceOrientation(event) {
    compass.setAngle(event.alpha)
}
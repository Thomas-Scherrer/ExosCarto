var mymap = L.map('mapid').setView([43.7031, 7.2661], 13);

var options = {
    enableHighAccuracy: true,
  };

function currentPosition(position) {
    mylat = "Ma latitude : " + position.coords.latitude + "<br>";
    mylong = "Ma longitude: " + position.coords.longitude + "<br>";
    document.getElementById("mylat").innerHTML = mylat;
    document.getElementById("mylong").innerHTML = mylong;
    // mymap = L.map('mapid').setView([mylat, mylong], 13);
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(currentPosition, error, options);
  var marker = L.marker([43.7031, 7.2661]).addTo(mymap);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic2NoZXJyZXJ0aG9tYXMiLCJhIjoiY2tqdjVmZzFpMDVvZDJwcXJqZmF4c2dpNiJ9.aS-Tjo5tQYTdZcFYMTLLoQ",
  }
).addTo(mymap);

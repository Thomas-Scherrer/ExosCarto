var latitude = 0;
var longitude = 0;
var precision = 0;
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(async function (position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    var mymap = L.map("mapid").setView([latitude, longitude], 12);

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
    var marker = L.marker([43.7031, 7.2661]).addTo(mymap);
  });

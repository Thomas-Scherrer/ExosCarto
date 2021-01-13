var mymap = L.map("mapid").setView([25, -80], 4);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
  foo: "bar",
}).addTo(mymap);

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

var dist = 2*coords.accuracy*Math.asin(Math.sqrt(Math.pow(Math.sin((coords.latitude-marseilleLat)/2), 2)+Math.cos(marseilleLat)*Math.cos(coords.latitude)*Math.pow(Math.sin((coords.longitude-marseilleLon)/2), 2)));

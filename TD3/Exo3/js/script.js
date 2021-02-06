// script.js

// init scene
const scene = new THREE.Scene();

// init camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const texture = new THREE.TextureLoader().load("textures/earth-map.png");
const materialTex = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, materialTex);

// orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// white directional light shining from the top
const directionalLight = new THREE.DirectionalLight(0xffffff, 4);

camera.position.z = 5;

scene.add(sphere);
scene.add(directionalLight);

// getCurrentPosition
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    localStorage.setItem('long', position.coords.longitude)
    localStorage.setItem('lat', position.coords.latitude)
}

function error() {
    console.log("Vous n'avez pas autorisé la géolocalisation")
}

// marqueur à la position actuelle
var long = localStorage.getItem("long");
var lat = localStorage.getItem("lat");

const gltfLoader = new THREE.GLTFLoader();

// fonction Lat/Lon to cartésien
function latLonToCartesien(long, lat) {
  long = (-long * Math.PI) / 180;
  lat = (lat * Math.PI) / 180;
  const radius = 1;
  var x = radius * Math.cos(lat) * Math.cos(long);
  var y = radius * Math.sin(lat);
  var z = radius * Math.cos(lat) * Math.sin(long);
  return {
    x,
    y,
    z,
  };
}

// utilisation du canard (duck.gltf) en guise de marqueur à la position actuelle
gltfLoader.load(
  "models/duck.gltf",
  function (gltf) {
    gltf.scene.scale.set(0.02, 0.02, 0.02);
    var coords = latLonToCartesien(long, lat);
    gltf.scene.position.x = coords.x;
    gltf.scene.position.y = coords.y;
    gltf.scene.position.z = coords.z;
    scene.add(gltf.scene);
  }
);

// marqueurs sous forme de spheres avec les drapeaux en texture pour identifier les pays
function sphereMarqueur(drapeaux) {
  const geometry = new THREE.SphereGeometry(0.01, 32, 32);
  const texture = new THREE.TextureLoader().load(drapeaux);
  const materialTex = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(geometry, materialTex);
  return sphere;
}

// fonction utilisant l'API restcountries
function getCountries(callback) {
  fetch("https://restcountries.eu/rest/v2/all").then((resp) => {
    resp.json().then((data) => {
      callback(data);
    });
  });
}

// fonction ajoutant les marqueurs aux emplacements des différents pays
function marqueurs(texture, long, lat) {
  var marqueur = sphereMarqueur(texture);
  var coords = latLonToCartesien(long, lat);
  marqueur.position.set(coords.x, coords.y, coords.z);
  scene.add(marqueur);
}

getCountries(function (countries) {
  countries.forEach((country) => {
    marqueurs(country.flag, country.latlng[1], country.latlng[0]);
  });
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

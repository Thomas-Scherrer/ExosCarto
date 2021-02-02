// script.js

// init scene
const scene = new THREE.Scene();

// init camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// renderer
const renderer = new THREE.WebGLRenderer();

// controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );

// geometry
const geometry = new THREE.SphereGeometry( 1, 32, 32 );

// loader
const loader = new THREE.TextureLoader();

// texture
const material = new THREE.MeshBasicMaterial({
  map: loader.load('textures/crash.png'),
});

// sphere
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.set(1, -1, 0);

// position de la caméra
camera.position.z = 5;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

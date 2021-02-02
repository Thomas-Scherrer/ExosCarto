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

// particules
/*var particules = new THREE.Particle( new THREE.ParticleCanvasMaterial({
  color: 0xFF0000,
  opacity: 1,
  program: function(context){
    context.beginPath();
    context.arc(0,0,1,0,Math.PI * 2, true);
    context.closePath();
    context.fill();
  }
}));
particules.position.x = 0;
particules.position.y = 0;
particules.position.z = 0;
particules.scale.x = particules.scale.y = 100;
scene.add(particules); */

// renderer
const renderer = new THREE.WebGLRenderer();

// orbit controls
const orbitControls = new THREE.OrbitControls( camera, renderer.domElement );

// deviceOrientation controls
const deviceOrientationControls = new THREE.DeviceOrientationControls( camera );

window.addEventListener('devicemotion', function(event) {
  console.log('Device Motion alpha :' + event.rotationRate.alpha);
  console.log('Device Motion beta :' + event.rotationRate.beta);
  console.log('Device Motion gamma :' + event.rotationRate.gamma);
});

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (event) {
    var rotateDegrees = event.alpha;
    var frontToBack = event.beta;
    var leftToRight = event.gamma;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
  }, true);
}

var handleOrientationEvent = function (rotateDegrees, frontToBack, leftToRight) {
  console.log('Device Orientation alpha :' + rotateDegrees);  
  console.log('Device Orientation beta :' + frontToBack); 
  console.log('Device Orientation gamma :' + leftToRight);
};

window.addEventListener("compassneedscalibration", function(event) {
  alert('Your compass needs calibrating! Wave your device in a figure-eight motion');
  event.preventDefault();
}, true);

// geometry
const geometry = new THREE.SphereGeometry( 1, 32, 32 );

// texture loader
const textureLoader = new THREE.TextureLoader();

// texture
const material = new THREE.MeshBasicMaterial({
  map: textureLoader.load('textures/crash.png'),
});

// sphere
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.set(1, -1, 0);

// position de la caméra
camera.position.z = 8;
//camera.lookAt(particules);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// GLTF loader instantiation
const gltfLoader = new THREE.GLTFLoader();

// Load a glTF resource
gltfLoader.load(
  // resource 
  'models/duck.gltf',
  // called when the resource is loaded
  function ( gltf ) {
    scene.add( gltf.scene );
  },

  // called while loading is progressing
  function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },

  // called when loading has errors
  function ( error ) {
    console.log( 'An error happened' );
  }
);

// White directional light shining from the top
const directionalLight = new THREE.DirectionalLight( 0xffffff, 4 );
scene.add( directionalLight );

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

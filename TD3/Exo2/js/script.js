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
camera.position.z = 5;

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

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 4 );
scene.add( directionalLight );

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

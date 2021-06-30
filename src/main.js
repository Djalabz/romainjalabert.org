
// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true, 
});

renderer.setPixelRatio(window.devicePixelRatio);

// Responsive canvas

// window.addEventListener('resize', function() {

//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();

//         renderer.setSize(window.innerWidth, window.innerHeight);
        
// });


function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update any render target sizes here
  }
}


camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusKnotGeometry( 7, 2, 200, 16 );
const material = new THREE.MeshStandardMaterial({ color: 0x4771FF, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
torus.position.y = -5

scene.add(torus);

animate()

// Icosahedron

const icoGeometry = new THREE.IcosahedronGeometry(8, 2);
const icosa = new THREE.Mesh(icoGeometry, material);
icosa.position.y = 7;
icosa.position.x = -2.7;


scene.add(icosa);

animate()


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// Animation Loop

function animate() {

  resizeCanvasToDisplaySize();

  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.z += 0.01;
  torus.rotation.y += 0.005;

//   moon.rotation.x += 0.005;

  // controls.update();


  renderer.render(scene, camera);
}


animate();
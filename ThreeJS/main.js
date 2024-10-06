import * as THREE from 'three';

//"We need three things: scene, camera, renderer"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Now we are going to create a triangle

//Setting background color
scene.background = new THREE.Color(0x1b1e2b);

//I had big trouble because most examples used Geometry() and that is deprecated.
//So I used BufferGeometry() and it works very differently
const triangleGeometry = new THREE.BufferGeometry();
//Defining vertice positions
const vertices = new Float32Array([
    -0.50, 0, 0,
    0.50, 0, 0,
    0, 0.87, 0
  ]);
// Adding them to the geometry
triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

//Arranging the vertices with indices
const indices = new Uint16Array([0, 1, 2]);
triangleGeometry.setIndex(new THREE.BufferAttribute(indices, 1));

// Defining and adding colors
const colors = new Float32Array([
    0, 1, 0, // green for vertex a
    0, 0, 1, // blue for vertex b
    1, 0, 0  // red for vertex c
]);

triangleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

//Now we are going to create the material ensuring that the colors are displayed
const material = new THREE.MeshBasicMaterial( { vertexColors: true, side: THREE.DoubleSide } );

//Now we are going to create the triangle mesh
const triangle = new THREE.Mesh(triangleGeometry, material);
scene.add(triangle);

camera.position.z = 3; //move the camera away from the triangle

// We will use an animation loop to render the scene and the triangle
function animate() {

    //This part renders the scene
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
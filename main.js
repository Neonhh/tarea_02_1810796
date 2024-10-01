import * as THREE from 'three';

//"We need three things: scene, camera, renderer"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Now we are going to create a triangle

//The only way I found that worked was to add the vertices manually to a BufferGeometry
let a = new THREE.Vector3(-0.50, 0, 0);
let b = new THREE.Vector3(0.50, 0, 0);
let c = new THREE.Vector3(0, 0.87, 0);
const triangleGeometry = new THREE.BufferGeometry().setFromPoints([a, b, c]);

//Now we are going to create the material (color)
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );

//Now we are going to create the mesh with the geometry and material
const triangle = new THREE.Mesh(triangleGeometry, material);
scene.add(triangle);

camera.position.z = 3; //move the camera away from the triangle

// We will use an animation loop to render the scene and the triangle
function animate() {

    //This part renders the scene
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

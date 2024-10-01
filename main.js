import * as THREE from 'three';

//"We need three things: scene, camera, renderer"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Now we are going to create a triangle geometry with the specified vertice positions

/*
const geometry = new THREE.Geometry();
let vertice1 = new THREE.Vector3( -0.50, 0, 0 );
let vertice2 = new THREE.Vector3( 0.50, 0, 0 );
let vertice3 = new THREE.Vector3( 0, 0.87, 0 );

geometry.vertices.push( vertice1, vertice2, vertice3 );

// We also have to build a triangular face on these vertices

let face = new THREE.Face3( 0, 1, 2 );
geometry.faces.push( face );

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );

const triangle = new THREE.Mesh( geometry, material );
scene.add( triangle );

camera.position.z = 5; //move the camera away from the triangle

*/

//Now we are going to create a cube

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const cube = new THREE.Mesh( cubeGeometry, material );
scene.add( cube );

camera.position.z = 5; //move the camera away from the cube

// We will use an animation loop to render the scene and the triangle
function animate() {
    //This part animates the triangle
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //This part renders the scene
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

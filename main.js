import * as THREE from 'three';

//"We need three things: scene, camera, renderer"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Now we are going to create a cube

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5; //move the camera away from the cube

// We will use an animation loop to render the scene and the cube
function animate() {
    //This part animates the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //This part renders the scene
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

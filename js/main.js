import * as THREE from './three.js';

//Crear una escena
const scene = new THREE.Scene();

//Crea una camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

//Crea un elemento HTML para visualizar la escena 3D
document.body.appendChild( renderer.domElement );

//Dibujar un cuboide
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//Crea un material para la geometria
const material = new THREE.MeshBasicMaterial( { color: 0x00eeff } );

//Dibuja la Geometria con el material
const cube = new THREE.Mesh( geometry, material );

//Se agrega el cubo a la escena
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;
	cube.rotation.z += 0.02;

	renderer.render( scene, camera );

}
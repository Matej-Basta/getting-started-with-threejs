import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import WebGL from "jsm/capabilities/WebGL.js";
import { createCube, create3DObject, createLines } from "./objects.js";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 45;
const aspect = w / h;
const near = 1;
const far = 500;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// 3D object shape
//const mesh = create3DObject();

// Cube
// const cube = createCube();

// Light
const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);

// Lines
// const lines = createLines();

const animate = (t = 0) => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}

if (WebGL.isWebGLAvailable()) {
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}
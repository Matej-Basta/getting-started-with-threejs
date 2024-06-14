import * as THREE from "three";

export const createCube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

export const create3DObject = () => {
    const geo = new THREE.IcosahedronGeometry(1.0, 2);
    const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        flatShading: true,
    })
    const mesh = new THREE.Mesh(geo, mat);

    const wireMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
    })
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.001);
    mesh.add(wireMesh);
    return mesh;
}
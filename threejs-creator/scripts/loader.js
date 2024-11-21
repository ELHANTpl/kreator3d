console.log('Loader.js załadowany');

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function initScene(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  console.log('Renderer gotowy'); // Debug

  return { scene, camera, renderer };
}

export function loadModel(scene, modelPath) {
  const loader = new GLTFLoader();
  loader.load(
    modelPath,
    (gltf) => {
      const car = gltf.scene;
      scene.add(car);
      console.log('Model załadowany:', car); // Debug
    },
    undefined,
    (error) => {
      console.error('Błąd ładowania modelu:', error); // Debug
    }
  );
}

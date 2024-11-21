import { initScene, loadModel } from './loader.js';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('scena-edytora');

  if (!container) {
    console.error('Nie znaleziono elementu o ID "scena-edytora".');
    return;
  }

  // Inicjalizacja sceny
  const { scene, camera, renderer } = initScene(container);

  // Wczytaj samochód
  loadModel(scene, 'https://cdn.jsdelivr.net/gh/ELHANTpl/kreator3d/threejs-creator/src/models/car1/lambo.glb');
});

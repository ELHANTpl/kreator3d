console.log('Skrypt main.js załadowany'); // Dodaj na początku pliku

import { initScene, loadModel } from './loader-v1.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('DOMContentLoaded event triggered');

  const container = document.getElementById('scena-edytora');
  if (!container) {
    console.error('Nie znaleziono elementu o ID "scena-edytora".');
    return;
  }
  console.log('Kontener #scena-edytora znaleziony');

  const { scene, camera, renderer } = initScene(container);
  console.log('Scena zainicjalizowana');

  loadModel(scene, 'https://cdn.jsdelivr.net/gh/ELHANTpl/kreator3d/threejs-creator/src/models/car1/lambo.glb');
  console.log('Model samochodu wczytywany...');
});

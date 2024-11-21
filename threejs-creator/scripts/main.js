import { initScene, loadModel } from './loader.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log('DOMContentLoaded event triggered'); // Sprawdzenie, czy DOM jest załadowany

  const container = document.getElementById('scena-edytora');
  if (!container) {
    console.error('Nie znaleziono elementu o ID "scena-edytora".');
    return;
  }
  console.log('Kontener #scena-edytora znaleziony'); // Debug

  // Inicjalizacja sceny
  const { scene, camera, renderer } = initScene(container);
  console.log('Scena zainicjalizowana'); // Debug

  // Wczytaj model samochodu
  loadModel(scene, 'https://cdn.jsdelivr.net/gh/ELHANTpl/kreator3d/threejs-creator/src/models/car1/lambo.glb');
  console.log('Model samochodu wczytywany...'); // Debug
});

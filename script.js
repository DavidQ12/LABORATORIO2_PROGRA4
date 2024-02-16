document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos los elementos del DOM
    const mouseoverExample = document.getElementById('mouseoverExample');
    const clickExample = document.getElementById('clickExample');
    const hiddenText = document.getElementById('hiddenText');
    const focusExample = document.getElementById('focusExample');
  
    // Añadimos listeners a los elementos
    mouseoverExample.addEventListener('mouseover', () => cambiarColor(mouseoverExample, 'blue'));
    mouseoverExample.addEventListener('mouseout', () => cambiarColor(mouseoverExample, 'initial'));
  
    clickExample.addEventListener('click', () => toggleVisibility(hiddenText));
  
    focusExample.addEventListener('focus', () => resaltarCampo(focusExample));
    focusExample.addEventListener('blur', () => quitarResaltado(focusExample));
  });
  
  function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
  }
  
  function toggleVisibility(elemento) {
    elemento.style.display = (elemento.style.display === 'none') ? 'block' : 'none';
  }
  
  function resaltarCampo(elemento) {
    elemento.style.border = '2px solid green';
  }
  
  function quitarResaltado(elemento) {
    elemento.style.border = '1px solid #ddd';
  }
  
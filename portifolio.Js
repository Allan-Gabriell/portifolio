alert('funcionou');
let rotationDegree = 20;
        
function rotateIcon() {
  const rotatingIcon = document.getElementById('rotationHtml');
  rotatingIcon.style.transform = `rotate(${rotationDegree}deg)`;
  rotationDegree = (rotationDegree === 20) ? 30 : 20; // Alterna entre 20 e 30 graus
  requestAnimationFrame(rotateIcon);
}

rotateIcon();

alert('funcionou');
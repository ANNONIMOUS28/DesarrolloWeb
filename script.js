const verMasBtn = document.getElementById('verMasBtn');
const contenidoExtra = document.getElementById('contenidoExtra');

verMasBtn.addEventListener('click', () => {
    if (contenidoExtra.style.display === 'block') {
        contenidoExtra.style.display = 'none';
        verMasBtn.textContent = 'Ver Más';
    } else {
        contenidoExtra.style.display = 'block';
        verMasBtn.textContent = 'Ver Menos';
    }
});

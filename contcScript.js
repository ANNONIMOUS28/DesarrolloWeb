document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contacto-form');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = formulario.nombre.value;
        const email = formulario.email.value;
        const mensaje = formulario.mensaje.value;

        if (nombre && email && mensaje) {
            alert('¡Mensaje enviado correctamente! Gracias por contactarme.');
            formulario.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

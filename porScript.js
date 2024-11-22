document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    const proyectos = document.querySelectorAll('.proyecto');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            const filtro = boton.getAttribute('data-filter');

            proyectos.forEach(proyecto => {
                if (filtro === 'todos' || proyecto.classList.contains(filtro)) {
                    proyecto.style.display = 'block';
                } else {
                    proyecto.style.display = 'none';
                }
            });
        });
    });
});

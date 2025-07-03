document.addEventListener('DOMContentLoaded', function() {
  // Toggle contacto
    const botonContacto = document.getElementById('boton-contacto');
    const infoContacto = document.getElementById('info-contacto');

    botonContacto.addEventListener('click', function() {
        infoContacto.classList.toggle('visible');
        botonContacto.textContent = infoContacto.classList.contains('visible') 
        ? 'Ocultar Contacto' 
        : 'Mostrar Contacto';
    });

  // Toggle acerca de mí
    const botonAcerca = document.getElementById('boton-acerca');
    const infoAcerca = document.getElementById('info-acerca');

    botonAcerca.addEventListener('click', function() {
        infoAcerca.classList.toggle('visible');
        botonAcerca.textContent = infoAcerca.classList.contains('visible') 
        ? 'Ocultar Acerca de mí' 
        : 'Mostrar Acerca de mí';
    });

    // Toggle sección central + video
    const botonToggleCentro = document.getElementById('boton-toggle-centro');
    const contenido = document.querySelector('.contenido3');
    const videoCarga = document.getElementById('video-carga');

    botonToggleCentro.addEventListener('click', function() {
        if (contenido.style.display === 'none') {
        contenido.style.display = 'block';
        videoCarga.style.display = 'none';
        botonToggleCentro.textContent = 'Ocultar sección central y mostrar un video genial de kratos';
        } else {
        contenido.style.display = 'none';
        videoCarga.style.display = 'block';
        botonToggleCentro.textContent = 'Mostrar sección central y ocultar video';
        }
    });

  // Validación formulario contacto
    const form = document.getElementById('form-contacto');
    const emailInput = document.getElementById('email');
    const mensajeError = document.getElementById('mensaje-error');
    const mensajeExito = document.getElementById('mensaje-exito');

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        mensajeError.style.display = 'block';
        mensajeError.textContent = 'Por favor, ingresa un correo válido.';
        mensajeExito.style.display = 'none';
    } else {
        mensajeError.style.display = 'none';
        mensajeExito.style.display = 'block';
        form.reset();
    }
    });
});



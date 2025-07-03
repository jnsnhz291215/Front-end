document.addEventListener('DOMContentLoaded', function () {
  const botonContacto = document.getElementById('boton-contacto');
  const infoContacto = document.getElementById('info-contacto');

  botonContacto.addEventListener('click', function () {
    infoContacto.classList.toggle('visible');
    botonContacto.textContent = infoContacto.classList.contains('visible')
      ? 'Ocultar Contacto'
      : 'Mostrar Contacto';
  });

  const botonAcerca = document.getElementById('boton-acerca');
  const infoAcerca = document.getElementById('info-acerca');

  botonAcerca.addEventListener('click', function () {
    infoAcerca.classList.toggle('visible');
    botonAcerca.textContent = infoAcerca.classList.contains('visible')
      ? 'Ocultar Acerca de mí'
      : 'Mostrar Acerca de mí';
  });

  const botonToggleCentro = document.getElementById('boton-toggle-centro');
  const contenido = document.querySelector('.contenido3');
  const videoCarga = document.getElementById('video-carga');

  botonToggleCentro.addEventListener('click', function () {
    const visible = contenido.style.display !== 'none';
    contenido.style.display = visible ? 'none' : 'block';
    videoCarga.style.display = visible ? 'block' : 'none';
    botonToggleCentro.textContent = visible
      ? 'Mostrar sección central y ocultar video'
      : 'Ocultar sección central y mostrar un video genial de kratos';
  });

  const form = document.getElementById('form-contacto');
  const emailInput = document.getElementById('email');
  const mensajeError = document.getElementById('mensaje-error');
  const mensajeExito = document.getElementById('mensaje-exito');
  const botonEnviar = form.querySelector('button');

  form.addEventListener('submit', function (event) {
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
      botonEnviar.disabled = true;
      form.reset();

      setTimeout(() => {
        mensajeExito.style.display = 'none';
        botonEnviar.disabled = false;
      }, 3000);
    }
  });

  const contenedorVolteo = document.querySelector('.contenedor-volteo');
  if (contenedorVolteo) {
    contenedorVolteo.addEventListener('click', () => {
      contenedorVolteo.classList.toggle('volteado');
    });
  }
});



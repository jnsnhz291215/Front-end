document.addEventListener('DOMContentLoaded', function () {
  // Toggle Contacto
  const botonContacto = document.getElementById('boton-contacto');
  const infoContacto = document.getElementById('info-contacto');

  botonContacto.addEventListener('click', function () {
    infoContacto.classList.toggle('visible');
    botonContacto.textContent = infoContacto.classList.contains('visible')
      ? 'Ocultar Contacto'
      : 'Mostrar Contacto';
  });

  // Toggle Acerca de mí
  const botonAcerca = document.getElementById('boton-acerca');
  const infoAcerca = document.getElementById('info-acerca');

  botonAcerca.addEventListener('click', function () {
    infoAcerca.classList.toggle('visible');
    botonAcerca.textContent = infoAcerca.classList.contains('visible')
      ? 'Ocultar Acerca de mí'
      : 'Mostrar Acerca de mí';
  });

  // Toggle sección central y video
  const botonToggleCentro = document.getElementById('boton-toggle-centro');
  const contenido = document.querySelector('.contenido3');
  const videoCarga = document.getElementById('video-carga');

  botonToggleCentro.addEventListener('click', function () {
    const visible = contenido.style.display !== 'none' && contenido.style.display !== '';
    contenido.style.display = visible ? 'none' : 'block';
    videoCarga.style.display = visible ? 'block' : 'none';
    botonToggleCentro.textContent = visible
      ? 'Mostrar sección central y ocultar video'
      : 'Ocultar sección central y mostrar un video genial de kratos';
  });

  // Volteo imagen perfil
  const contenedorVolteo = document.querySelector('.contenedor-volteo');
  if (contenedorVolteo) {
    contenedorVolteo.addEventListener('click', () => {
      contenedorVolteo.classList.toggle('volteado');
    });
  }

  // Formulario contacto toggle y validación
  const form = document.getElementById('form-contacto');
  const mensajeError = document.getElementById('mensaje-error');
  const mensajeExito = document.getElementById('mensaje-exito');
  const toggleFormCheckbox = document.getElementById('toggle-form');
  const labelToggle = document.querySelector('label[for="toggle-form"]');
  const mensajesEnviados = [];

  // Estado inicial formulario
  function actualizarVisualFormulario() {
    if (toggleFormCheckbox.checked) {
      form.classList.add('visible');
      labelToggle.textContent = 'Pulsa aquí para ocultar';
    } else {
      form.classList.remove('visible');
      labelToggle.textContent = 'Pulsa aquí para contactarme';
      mensajeError.style.display = 'none';
      mensajeExito.style.display = 'none';
    }
  }
  actualizarVisualFormulario();

  toggleFormCheckbox.addEventListener('change', actualizarVisualFormulario);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const telefonoValido = /^(\+?56)?\s?(0?9\d{8}|[2-7]\d{7})$/.test(telefono);
    const palabrasMensaje = mensaje.split(/\s+/).filter(w => w.length > 0).length;

    if (!nombre || !apellido || !telefono || !email || !mensaje) {
      mensajeError.textContent = 'Por favor completa todos los campos.';
      mensajeError.style.display = 'block';
      mensajeExito.style.display = 'none';
      return;
    }
    if (!telefonoValido) {
      mensajeError.textContent = 'Por favor ingresa un número de teléfono chileno válido.';
      mensajeError.style.display = 'block';
      mensajeExito.style.display = 'none';
      return;
    }
    if (!emailValido) {
      mensajeError.textContent = 'Por favor ingresa un correo electrónico válido.';
      mensajeError.style.display = 'block';
      mensajeExito.style.display = 'none';
      return;
    }
    if (palabrasMensaje > 250) {
      mensajeError.textContent = 'El mensaje no puede superar las 250 palabras.';
      mensajeError.style.display = 'block';
      mensajeExito.style.display = 'none';
      return;
    }

    // Guardar mensaje localmente
    mensajesEnviados.push({ nombre, apellido, telefono, email, mensaje });
    console.log("📥 Mensajes enviados:", mensajesEnviados);

    mensajeError.style.display = 'none';
    mensajeExito.style.display = 'block';

    form.reset();
    toggleFormCheckbox.checked = false;
    actualizarVisualFormulario();

    setTimeout(() => {
      mensajeExito.style.display = 'none';
    }, 3000);
  });
});

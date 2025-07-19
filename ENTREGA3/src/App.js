import React, { useState } from 'react';
import './style.css';

function App() {
  const [mostrarContacto, setMostrarContacto] = useState(false);
  const [mostrarAcerca, setMostrarAcerca] = useState(false);
  const [mostrarSeccionCentral, setMostrarSeccionCentral] = useState(true);
  const [imagenVolteada, setImagenVolteada] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const [mensajeError, setMensajeError] = useState('');
  const [mensajeExito, setMensajeExito] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validarTelefono = (telefono) => {
    const regex = /^(\+?56)?\s?(0?9\d{8}|[2-7]\d{7})$/;
    return regex.test(telefono);
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const contarPalabras = (texto) => {
    return texto.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeError('');
    setMensajeExito(false);

    const { nombre, apellido, telefono, email, mensaje } = formData;

    if (!nombre || !apellido || !telefono || !email || !mensaje) {
      setMensajeError('Por favor completa todos los campos.');
      return;
    }

    if (!validarTelefono(telefono)) {
      setMensajeError('Por favor ingresa un número de teléfono chileno válido.');
      return;
    }

    if (!validarEmail(email)) {
      setMensajeError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (contarPalabras(mensaje) > 250) {
      setMensajeError('El mensaje no puede superar las 250 palabras.');
      return;
    }

    // Aquí podrías hacer envío o guardado de datos

    setMensajeExito(true);
    setFormData({ nombre: '', apellido: '', telefono: '', email: '', mensaje: '' });
    setToggleForm(false);

    setTimeout(() => {
      setMensajeExito(false);
    }, 3000);
  };

  return (
    <>
      <div className="rectangulo-horizontal">
        <div className="contenido1">
          <h1>Juan Alejandro Sanhueza Godoy</h1>
          <p>Nacionalidad: Chileno</p>
          <p>Estado civil: Soltero</p>
          <p>Estudiante de Ingeniería en Ciberseguridad</p>
        </div>
        <button
          className="boton-estilo pulse"
          onClick={() => setMostrarSeccionCentral(!mostrarSeccionCentral)}
        >
          {mostrarSeccionCentral
            ? 'Ocultar sección central y mostrar un video genial de kratos'
            : 'Mostrar sección central y ocultar video'}
        </button>
      </div>

      <div className="rectangulo-vertical">
        <div className="imagen-perfil">
          <div
            className={`contenedor-volteo ${imagenVolteada ? 'volteado' : ''}`}
            onClick={() => setImagenVolteada(!imagenVolteada)}
            style={{ cursor: 'pointer' }}
          >
            <div className="cara cara-frontal">
              <img src="/img/luffyg5v2.jpg" alt="Imagen de perfil" />
              <div className="texto-volteo">Haz clic para voltear</div>
            </div>
            <div className="cara cara-trasera">
              <img src="/img/gwenlol.jpg" alt="Imagen alterna" />
              <div className="texto-volver">Volver</div>
            </div>
          </div>
        </div>

        <div className="contenido2">
          <button
            className="boton-estilo pulse"
            onClick={() => setMostrarContacto(!mostrarContacto)}
          >
            {mostrarContacto ? 'Ocultar Contacto' : 'Mostrar Contacto'}
          </button>

          <div
            id="info-contacto"
            className={`info-oculta ${mostrarContacto ? 'visible' : ''}`}
          >
            <h2>Contacto:</h2>
            <ul>
              <li>Teléfono personal: (+56 9) 1234-5678</li>
              <li>Correo: juan.sanhueza@example.com</li>
              <li>Página web: www.sitioincreible.com</li>
              <li>LinkedIn: linkedin.com/in/juan-sanhueza</li>
              <li>GitHub: github.com/juan-sanhueza</li>
            </ul>
          </div>

          <h2>Habilidades:</h2>
          <ul>
            <li>Programación en Python</li>
            <li>Seguridad Informática</li>
            <li>Desarrollo Web</li>
            <li>Trabajo en equipo</li>
          </ul>

          <h2>Educación:</h2>
          <ul>
            <li>Instituto Sagrado Corazón de San Bernardo (2009 - 2021)</li>
            <li>INACAP, Ciberseguridad (2024 - En curso)</li>
          </ul>

          <div className="imagenes-pequenas">
            <a href="https://colegioisc.cl/" target="_blank" rel="noreferrer">
              <img src="/img/logo_isc.png" alt="Logo Instituto Sagrado Corazón" />
            </a>
            <a href="https://www.inacap.cl/" target="_blank" rel="noreferrer">
              <img src="/img/Logotipo_Inacap.png" alt="Logo INACAP" />
            </a>
          </div>

          <h2>Idiomas:</h2>
          <ul>
            <li>Español (Nativo)</li>
            <li>Inglés (Intermedio)</li>
          </ul>

          <h2>Licencia de conducir:</h2>
          <ul>
            <li>Clase B desde 2022</li>
          </ul>
        </div>
      </div>

      <div className="rectangulo-info">
        <div
          className="contenido3"
          style={{ display: mostrarSeccionCentral ? 'block' : 'none' }}
        >
          <button
            className="boton-estilo pulse-verde"
            onClick={() => setMostrarAcerca(!mostrarAcerca)}
          >
            {mostrarAcerca ? 'Ocultar Acerca de mí' : 'Mostrar Acerca de mí'}
          </button>

          <div
            id="info-acerca"
            className={`info-oculta ${mostrarAcerca ? 'visible' : ''}`}
          >
            <h2>Acerca de mí:</h2>
            <p>
              Nací en 2002, soy un apasionado de la tecnología y la ciberseguridad.
              Me encanta aprender sobre nuevas herramientas y técnicas para proteger la información y los sistemas.
            </p>
            <p>
              Me destaco por ser una persona comprometida, con gran capacidad de análisis, pensamiento crítico y atención al detalle.
              Disfruto trabajando en equipo y también soy capaz de desenvolverme con autonomía.
            </p>
            <p>
              Actualmente estudio Ingeniería en Ciberseguridad en INACAP y busco oportunidades para aplicar mis conocimientos en entornos reales,
              contribuir a proyectos significativos y seguir desarrollándome como profesional en el área de la seguridad informática.
            </p>
          </div>

          <h2>Experiencia Laboral:</h2>
          <ul>
            <li>Empresa XYZ - Desarrollador Web (2018 - Presente)</li>
            <li>Empresa ABC - Programador Junior (2016 - 2018)</li>
          </ul>

          <h2>Voluntariado:</h2>
          <ul>
            <li>Participación en eventos de ciberseguridad INACAP</li>
            <li>Asistencia técnica en talleres comunitarios de computación (2022)</li>
          </ul>

          <h2>Intereses:</h2>
          <ul>
            <li>Ciberseguridad ofensiva (CTFs)</li>
            <li>Lectura sobre hacking ético</li>
          </ul>

          <h2>Proyectos Destacados:</h2>
          <ul>
            <li><strong>TaskPro:</strong> App de gestión de tareas hecha en Flask y MySQL (2025)</li>
            <li><strong>Escáner de vulnerabilidades:</strong> Script en Python que detecta puertos abiertos</li>
          </ul>

          <div className="rectangulo-contacto">
            <input
              type="checkbox"
              id="toggle-form"
              hidden
              checked={toggleForm}
              onChange={() => setToggleForm(!toggleForm)}
            />
            <label
              htmlFor="toggle-form"
              className="boton-estilo pulse-verde boton-contacto-form"
            >
              {toggleForm ? 'Pulsa aquí para ocultar' : 'Pulsa aquí para contactarme'}
            </label>

            <form
              id="form-contacto"
              className={`contenido-contacto ${toggleForm ? 'visible' : ''}`}
              onSubmit={handleSubmit}
              noValidate
            >
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Juan"
                value={formData.nombre}
                onChange={handleInputChange}
              />

              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                required
                placeholder="Sanhueza"
                value={formData.apellido}
                onChange={handleInputChange}
              />

              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                placeholder="+56 9 1234 5678"
                value={formData.telefono}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="juan@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="mensaje">Mensaje (máx. 250 palabras):</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                maxLength={250}
                required
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={handleInputChange}
              />

              <button type="submit" className="boton-estilo" id="boton-enviar">
                Enviar
              </button>

              {mensajeError && <p className="mensaje-error">{mensajeError}</p>}
              {mensajeExito && (
                <p className="mensaje-exito">¡Mensaje enviado correctamente!</p>
              )}
            </form>
          </div>
        </div>

        <div
          id="video-carga"
          style={{
            display: mostrarSeccionCentral ? 'none' : 'block',
            textAlign: 'center',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ maxHeight: '400px', maxWidth: '100%' }}
          >
            <source src="/img/kratos.webm" type="video/webm" />
          </video>
          <p>¡Disfruta del video de Kratos!</p>
        </div>
      </div>
    </>
  );
}

export default App;

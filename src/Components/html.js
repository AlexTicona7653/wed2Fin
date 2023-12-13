import React from 'react';




const HTML = () => {
  return (
    <div className="html-container">
      <div className="header-c">
        <div className="logo-t">
          {/* Logo */}
          <img src="https://1.bp.blogspot.com/-1r91I7v8uxs/X4Z7XZNdyqI/AAAAAAAABSM/uTW8letzBLMqa3dsMf8JBygYpViCItZFQCNcBGAsYHQ/w1200-h630-p-k-no-nu/logo-css.png" alt="Logo" className="logo" />
          {/* Título */}
          <h1>HTML</h1>
        </div>
        <div className="side-logo">
          {/* Logo lateral */}
          <img src="https://image.slidesharecdn.com/html-140215074152-phpapp01/95/html-1-638.jpg?cb=1392450195" alt="Logo Lateral" className="side-logo-img" />
        </div>
        
      </div>
      <div className="sections">
        <div className="left-section section">
          
          <p>HTML, siglas en inglés de HyperText Markup Language (‘lenguaje de marcado de hipertexto’), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. Es un estándar a cargo del World Wide Web Consortium (W3C) o Consorcio WWW, organización dedicada a la estandarización de casi todas las tecnologías ligadas a la web, s</p>
          <img src="URL_imagen_izquierda.jpg" alt="Imagen Izquierda" />
          <p>
            Texto de la sección izquierda. Puede ser una descripción o contenido relevante.
          </p>
          <p>Historia</p>
          <p>El lenguaje HTML basa su filosofía de desarrollo en la diferenciación. Para añadir un elemento externo a la página (imagen, vídeo, script, entre otros.), este no se incrusta directamente en el código de la página, sino que se hace una referencia a la ubicación de dicho elemento mediante texto. De este modo, la página web contiene solamente texto mientras que recae en el navegador web (interpretador del código) la tarea de unir todos los elementos y visualizar la página final. Al ser un estándar, HTML busca ser un lenguaje que permita que cualquier página web escrita en una determinada versión, pueda ser interpretada de la misma forma (estándar) por cualquier navegador web actualizado.

HTML es un lenguaje de marcado que nos permite indicar la estructura de nuestro documento mediante etiquetas. Este lenguaje nos ofrece una gran adaptabilidad, una estructuración lógica y es fácil de interpre­tar tanto por humanos como por máquinas.</p>
          
        </div>
        <div className="right-section section">
          <h2>Creador</h2>
          <img src="https://th.bing.com/th/id/R.86976160f0aba9097feb2f24ab118202?rik=cb7BxPyq%2bCQmug&pid=ImgRaw&r=0" alt="Imagen Derecha" />
          <p>
          Timothy "Tim" John Berners-Lee
          </p>
          
        </div>
        
      </div>
      <div className="video-container">
        <iframe
          width="560" // Ancho del video
          height="315" // Alto del video
          src="https://youtu.be/cqMfPS8jPys?list=PLhSj3UTs2_yVHt2DgHky_MzzRC58UHE4z" // Reemplaza con el ID del video de YouTube
          title="YouTube Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="foot">
        <div className="footer-text">
          <p>Texto encima de los botones</p>
        </div>
        <div className="button-container">
          <div className="download-button">
            <a href="https://editor-html.softonic.com/" className="download-link">Descarga Editor</a>
          </div>
          <div className="download-button">
            <a href="https://youtu.be/kKrVPkTlRAA" className="download-link">Ver video</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML;

import React from 'react';
import img1 from '../assets/php.jpg';
import img2 from '../assets/fundaphp.jpg';
import img3 from '../assets/ejemphp.jpg';

const Descargas = () => {
  const handleDownloadLink = () => {
    window.location.href = 'https://tu_link_de_descarga1.com';
  };

  const handleDownloadFacebook = () => {
    window.location.href = 'https://tu_link_de_descarga2.com';
  };

  const handleDownloadElige = () => {
    window.location.href = 'https://tu_link_de_descarga3.com';
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <h1 className="title">PHP</h1>
      </div>
      <div className="images-container">
        <div className="image-wrapper">
          <img src={img1} alt="Imagen 1" />
          <p>Logo PHP</p>
        </div>
        <div className="image-wrapper">
          <img src={img2} alt="Imagen 2" />
          <p>Fundador de PHP</p>
        </div>
        <div className="image-wrapper">
          <img src={img3} alt="Imagen 3" />
          <p>Uso de código de Visual Studio para programación PHP</p>
        </div>
      </div>
      <div className="description-container">
        <p>PHP es un lenguaje de programación interpretado2​ del lado del servidor y de uso general que se adapta especialmente al desarrollo web.3​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.4​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.5​ PHP originalmente significaba Personal Home Page (Página personal), pero ahora significa el inicialismon ​ recursivo PHP: Hypertext Preprocessor.​</p>
        <h2>Historia</h2>
        <p>
        Fue originalmente diseñado en Perl, con base en la escritura de un grupo de CGI binarios escritos en el lenguaje C por el programador danés-canadiense Rasmus Lerdorf en el año 1994 para mostrar su currículum vítae y guardar ciertos datos, como la cantidad de tráfico que su página web recibía. El 8 de junio de 1995 fue publicado "Personal Home Page Tools" después de que Lerdorf lo combinara con su propio Form Interpreter para crear PHP/FI.

Dos programadores israelíes del Technion, Zeev Suraski y Andi Gutmans, reescribieron el analizador sintáctico (parser, en inglés) en 1997 y crearon la base del PHP3, y cambiaron el nombre del lenguaje por PHP: Hypertext Preprocessor. Inmediatamente comenzaron experimentaciones públicas de PHP3, y se publicó oficialmente en junio de 1998. Para 1999, Suraski y Gutmans reescribieron el código de PHP, y produjeron lo que hoy se conoce como motor Zend. También fundaron Zend Technologies en Ramat Gan, Israel.

En mayo del 2000, PHP 4 se lanzó bajo el poder del motor Zend 1.0. El 13 de julio de 2007 se anunció la suspensión del soporte y desarrollo de la versión 4 de PHP,22​ y, a pesar de lo anunciado, se ha liberado una nueva versión con mejoras de seguridad, la 4.4.8, publicada el 13 de enero del 2008, y posteriormente la versión 4.4.9, publicada el 7 de agosto del 2008.23​ Según esta noticia,24​ se le dio soporte a fallos críticos hasta el 9 de agosto del 2008.

El 13 de julio de 2004, se lanzó PHP 5, utilizando el motor Zend Engine 2.0 (o Zend Engine 2). Incluye todas las ventajas que provee el nuevo Zend Engine 2, como:
        </p>
      </div>
      <div className="buttons-container">
        <button onClick={handleDownloadLink}>Descarga PHP</button>
        <button onClick={handleDownloadFacebook}>Facebook</button>
        <button onClick={handleDownloadElige}>Vea mas</button>
      </div>
    </div>
  );
};

export default Descargas;


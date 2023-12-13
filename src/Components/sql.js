import React from 'react';
import AitanaVideo from '../assets/Aitana.mp4';
import Image1 from '../assets/Sql.jpg';
import Image2 from '../assets/CreaSql.jpg'; 
import Image3 from '../assets/ejemsql.jpg'; 

const SQL = () => {
  return (
    <div className="sql-container">
      <h1 className="sql-title">SQL</h1>
      <p>SQL (por sus siglas en inglés Structured Query Language; en español lenguaje de consulta estructurada) es un lenguaje específico de dominio, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.2​ Una de sus principales características es el manejo del álgebra y el cálculo relacional para efectuar consultas con el fin de recuperar, de forma sencilla, información de bases de datos, así como realizar cambios en ellas.</p>
      <div className="sql-content">
        <div className="sql-images">
          <div className="sql-image">
            <img src={Image1} alt="Descripción de la imagen 1" />
            <h4>Logo</h4>
          </div>
          <div className="sql-image">
            <img src={Image2} alt="Descripción de la imagen 2" />
            <h4>Creador DE SQL</h4>
          </div>
          <div className="sql-image">
            <img src={Image3} alt="Descripción de la imagen 3" />
            <h4>Funcionamiento</h4>
          </div>
        </div>
        <div className="sql-video">
          <video width="400" controls>
            <source src={AitanaVideo} type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="sql-buttons">
            <button>Descargar</button>
            <button>Reproducir</button>
          </div>
        </div>
       
      </div>
      <h2>Origen y Creación</h2>
      <p>Los orígenes de SQL están ligados a las bases de datos relacionales, específicamente las que residían en máquinas IBM bajo el sistema de gestión System R, desarrollado por un grupo de la IBM en San José, California.

Al principio fue IBM, e IBM creó SQL. SQL, originalmente un acrónimo de "Lenguaje de consulta estructurado" ("Structured Query Language”), es un lenguaje unificado para definir, consultar, modificar y controlar los datos en una base de datos relacional. Su nombre se pronuncia oficialmente "ess-cue-ell" (según el American National Standards Institute).

El modelo relacional de gestión de bases de datos fue propuesto en 1970 por el Dr. E. F. Codd en el Laboratorio de Investigación de IBM en San José, California, y se desarrolló durante la década siguiente en universidades y laboratorios de investigación. SQL, uno de varios lenguajes que surgieron de este trabajo inicial, ahora se ha apoderado casi por completo del mundo de los lenguajes de bases de datos relacionales. Los proveedores de sistemas de administración de bases de datos relacionales que inicialmente eligieron otros lenguajes han acudido en masa a SQL; Las organizaciones de normalización nacionales e internacionales han propuesto una versión codificada del lenguaje.

En 1970, E. F. Codd propone el modelo relacional y asociado a este un sublenguaje de acceso a los datos basado en el cálculo de predicados.3​ Basándose en estas ideas, los laboratorios de IBM definieron el lenguaje SEQUEL (Structured English Query Language) que más tarde fue ampliamente implementado por el sistema de gestión de bases de datos (SGBD) experimental System R, desarrollado en 1977 también por IBM. Sin embargo, fue Oracle quien lo introdujo por primera vez en 1979 en un producto comercial.

El SEQUEL terminó siendo el predecesor de SQL, que es una versión evolucionada del primero. SQL pasa a ser el lenguaje por excelencia de los diversos sistemas de gestión de bases de datos relacionales surgidos en los años siguientes y fue por fin estandarizado en 1986 por el ANSI, dando lugar a la primera versión estándar de este lenguaje, "SQL-86" o "SQL1". Al año siguiente este estándar es también adoptado por ISO.</p>
    </div>
  );
};

export default SQL;

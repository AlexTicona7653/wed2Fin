import React from 'react';
import PythonImage from '../assets/Python.jpg'; // Ruta de tu imagen de Python
import Logo from '../assets/logoPy.jpg'; // Ruta de tu logo

const Python = () => {
  return (
    <div className="centered-container">
    <div className="centered-container">
      <div className="header">
        <img src={Logo} alt="Logo" />
        <h1>PYTHON</h1>
      </div>
      <div className="content">
        
        <img src={PythonImage} alt="Python" />
        <a href="https://www.python.org/downloads/" download>
          <button>Descargar</button>
        </a>
        <h2>Que es Python</h2>
        <p>Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, por ejemplo: Instagram, Netflix, Spotify, Panda3D, entre otros.2 Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.
Administrado por Python Software Foundation, posee una licencia de código abierto, denominada Python Software Foundation License.3 Python se clasifica constantemente como uno de los lenguajes de programación más populares.
</p>
        <h2>Historia</h2>
        <p>Python fue creado a finales de los años ochenta5​ por Guido van Rossum en Stichting Mathematisch Centrum (CWI), en los Países Bajos, como un sucesor del lenguaje de programación ABC, capaz de manejar excepciones e interactuar con el sistema operativo Amoeba.6​

El nombre del lenguaje proviene de la afición de su creador por los humoristas británicos Monty Python.7​

Guido van Rossum es el principal autor de Python, y su continuo rol central en decidir la dirección de Python es reconocido, refiriéndose a él como Benevolente Dictador Vitalicio (en inglés: Benevolent Dictator for Life, BDFL); sin embargo el 12 de julio de 2018 declinó de dicha situación de honor sin dejar un sucesor o sucesora y con una declaración altisonante:8​

Entonces, ¿qué van a hacer todos ustedes? ¿Crear una democracia? ¿Anarquía? ¿Una dictadura? ¿Una federación?
Guido van Rossum
El 20 de febrero de 1991, van Rossum publicó el código por primera vez en alt.sources, con el número de versión 0.9.0.10​ En esta etapa del desarrollo ya estaban presentes clases con herencia, manejo de excepciones, funciones y los tipos modulares, como: str, list, dict, entre otros. Además en este lanzamiento inicial aparecía un sistema de módulos adoptado de Modula-3; van Rossum describe el módulo como «una de las mayores unidades de programación de Python».5​ El modelo de excepciones en Python es parecido al de Modula-3, con la adición de una cláusula else.6​ En el año 1994 se formó comp.lang.python, el foro de discusión principal de Python, marcando un hito en el crecimiento del grupo de usuarios de este lenguaje.

Python alcanzó la versión 1.0 en enero de 1994. Una característica de este lanzamiento fueron las herramientas de la programación funcional: lambda, reduce, filter y map.11​ Van Rossum explicó que «hace 12 años, Python adquirió lambda, reduce(), filter() y map(), cortesía de Amrit Perm, un hacker informático de Lisp que las implementó porque las extrañaba».12​

La última versión liberada proveniente de CWI fue Python 1.2. En 1995, van Rossum continuó su trabajo en Python en la Corporation for National Research Initiatives (CNRI) en Reston, Virginia, donde lanzó varias versiones del software.</p>
      </div>
      <div className="foo">
        <div className="footer-text">
          <p>Texto encima de los botones</p>
        </div>
        <div className="button-container">
          <div className="download-button">
            <a href="https://www.python.org/downloads/" className="download-link">Descargar Python</a>
          </div>
          <div className="download-button">
            <a href="https://youtu.be/nKPbfIU442g" className="download-link">Ver video</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Python;



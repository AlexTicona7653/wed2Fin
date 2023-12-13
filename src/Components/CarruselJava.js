import {Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/CreJV.jpg";
import meter2 from "../assets/JVLOGO.jpg";
import meter3 from "../assets/CodigoJV.jpg";
import fondo from "../assets/Fond.webp"

export const CarruselJava = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                <h2>Imagenes</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                           <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Creador Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Logo JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Codigo en Java</h5>
                            </div>
                            
                        </Carousel>
                        <br></br>
                        <br></br>
                        <p>Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.2​3​

El lenguaje de programación Java fue desarrollado originalmente por James Gosling, de Sun Microsystems (constituida en 1983 y posteriormente adquirida el 27 de enero de 2010 por la compañía Oracle),4​ y publicado en 1995 como un componente fundamental de la plataforma Java de Sun Microsystems. Su sintaxis deriva en gran medida de C y C++, pero tiene menos utilidades de bajo nivel que cualquiera de ellos. Las aplicaciones de Java son compiladas a bytecode (clase Java), que puede ejecutarse en cualquier máquina virtual Java (JVM) sin importar la arquitectura de la computadora subyacente.</p>
                        <h2>Historia</h2>
                        Java se creó como una herramienta de programación para ser usada en un proyecto de set-top-box en una pequeña operación denominada the Green Project en Sun Microsystems en 1991. El equipo (green team), compuesto por trece personas y dirigido por James Gosling, trabajó durante 18 meses en Sand Hill Road, Menlo Park (California), para desarrollarlo.

El lenguaje se denominó inicialmente Oak (por un roble que había fuera de la oficina de Gosling), luego pasó a llamarse red tras descubrir que Oak era ya una marca comercial registrada para adaptadores de tarjetas gráficas, y finalmente se le renombró java.

Es frecuentada por algunos de los miembros del equipo. Pero no está claro si es un acrónimo o no, aunque algunas fuentes señalan que podría tratarse de las iniciales de sus diseñadores: James Gosling, Arthur Van Hoff y Andy Bechtolsheim. Otros abogan por el siguiente acrónimo, Just Another Vague Acronym ("simplemente otro acrónimo ambiguo más"). La hipótesis que más fuerza tiene es la de que Java debe su nombre a un tipo de café disponible en la cafetería cercana; de ahí que el icono de Java sea una taza de café caliente. Un pequeño signo que da fuerza a esta teoría es que los cuatro primeros bytes (el número mágico) de los archivos.class que genera el compilador, son en hexadecimal, 0xCAFEBABE. A pesar de todas estas teorías, el nombre fue sacado al parecer de una lista aleatoria de palabras
               </div>
  </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={fondo} alt="Image" />
    </section>
  )
  }
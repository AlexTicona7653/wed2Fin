import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import headerImg from "../assets/lo.webp";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import 'animate.css';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Escoge", "El lenguaje", "que te GUSTE" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
        setIndex(prevIndex => prevIndex + 1);
      }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                 <TrackVisibility>
                 {({ isVisible }) =>
                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a esta wed</span>
                <h1 className="title-with-gradiente">
            Lenguajes de programación
          </h1>
                <h1><span className="wra">{text}</span></h1>
               <h2>{'¿Qué es un lenguaje de programación?'}</h2>
                  <p>Un lenguaje de programación es un lenguaje formal o artificial, compuesto por símbolos, que, por medio de ciertas instrucciones, permite a un programador dar órdenes o establecer acciones consecutivas y algoritmos que servirán para crear programas que controlen el comportamiento físico y lógico de una máquina.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>}
                  </TrackVisibility>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
         
                <img src={headerImg} alt="Header Img"/>
              
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}
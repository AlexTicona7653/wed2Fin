import {Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/Padre2.jpg";
import meter2 from "../assets/Padre1.jpg";
import meter3 from "../assets/Padre3.jpg";
import meter4 from "../assets/Padre4.jpg";
import fondo from "../assets/img/color-sharp.png"

export const Skills = () => {
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
                <h2>Padre de los lenguajes de programación</h2>
                        <p>En los cincuenta, los tres primeros lenguajes de programación modernos, cuyos descendientes aún continúan siendo utilizados, son:<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                           <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>FORTRAN (1957), creado por John Backus.</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>LISP (1958), creado por John McCarthy.</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>COBOL (1959), creado por Grace Hopper</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5> Grace Hopper</h5>
                            </div>
                        </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={fondo} alt="Image" />
    </section>
  )
  }
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/JVA.jpg";
import projImg2 from "../assets/PHPP.jpg";
import projImg3 from "../assets/PTHON.jpg";
import projImg4 from "../assets/SQLL.jpg";
import projImg5 from "../assets/JAVASCRIP.jpg";
import projImg6 from "../assets/CMAS.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Projects = () => {

  const projects = [
    {
      title: "Inicio en JAVA",
      description: "Desarrollo de sofware",
      imgUrl: projImg1,
    },
    {
      title: "Inicio en PHP",
      description: "Desarrollo de sofware",
      imgUrl: projImg2,
    },
    {
      title: "Inicio en PYTHON",
      description: "Desarrollo de sofware",
      imgUrl: projImg3,
    },
    {
      title: "Inicio en SQL",
      description: "Desarrollo de sofware",
      imgUrl: projImg4,
    },
    {
      title: "Inicio en JAVASSCRIP",
      description: "Desarrollo de sofware",
      imgUrl: projImg5,
    },
    {
      title: "Inicio en C++",
      description: "Desarrollo de sofware",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
                 {({ isVisible }) =>
                 <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
              <h2>Mas Información</h2>
                <p>El siguiente podra observar los logos de los lenguajes de programación y los Creditos</p>
                </div>}
                </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Logos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Creditos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        Mas Infromación
                    </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Copyright 2023. Todos los derechos reservados.</p>
            <h2>Alex Ticona Larico</h2>
            <p>Contáctanos: ticonaalex874@gmail.com | Cel: 68035039</p>
            <div className="footer-links">
              
              <a href="/acerca-de">Acerca de</a>
              <div className="social-icon">
                        <a href="https://www.linkedin.com/"> <img src={navIcon1} alt=""/></a>
                        <a href="https://www.facebook.com/"> <img src={navIcon2} alt=""/></a>
                        <a href="https://www.instagram.com/"> <img src={navIcon3} alt=""/></a>
                    </div>
            </div>
           
                    <h2>Agradecimientos Especiales</h2>
          <ul>
            <li>Ph.D. Marisol Tellez Vargas </li>
            <li>Auxiliar: Leonel Lima</li>
          </ul>
                        </Tab.Pane> 
                    <Tab.Pane eventKey="third">No disponible</Tab.Pane>
                      
                  </Tab.Content>
                </Tab.Container>
              
           </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
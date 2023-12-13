import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/logofooter.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/"><img src={navIcon1} /></a>
              <a href="https://www.facebook.com/"><img src={navIcon2} /></a>
              <a href="https://www.instagram.com/"><img src={navIcon3} /></a>
            </div>
            <p>Copyright 2023. Todos los derechos reservador</p>
            <p>Alex Ticona Larico</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
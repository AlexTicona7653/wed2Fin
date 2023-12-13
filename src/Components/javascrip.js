import React from 'react';
import "./CaruselJavas";
import { CarouselJavas } from './CaruselJavas';
const javascrip = () => {
  return (
    <div>
      <div className="header-contai">
        <div className="logo-ti">
          <img src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" alt="Logo" className="logo" />
         
          <h1>JAVASCRIP</h1>
        </div>
        <div className="side-logo">
          <img src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" alt="Logo Lateral" className="side-logo-img" />
        </div>
        
      </div>
      {/* Cuerpo */}
      
      <div className="body-cont">
      <CarouselJavas/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor eu lacus consequat, vitae congue nisi ultrices.</p>
       
        <div className="foote">
        <div className="footer-text">
          <p>Vea mas en el siguiente:</p>
        </div>
        <div className="button-container">
          <div className="download-button">
            <a href="https://www.java.com/es/download/ie_manual.jsp" className="download-link">Descarga Javascrip</a>
          </div>
          <div className="download-button">
            <a href="https://youtu.be/odnLWsAe3lM" className="download-link">Ver video</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default javascrip;
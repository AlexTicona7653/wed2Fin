import React from 'react';
import "./CarruselJava";
import { CarruselJava } from './CarruselJava';
const java = () => {
  return (
    <div>
      <div className="head">
        <div className="logg">
          <img src="https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png" alt="Logo" className="logo" />
          
          <h1>JAVA</h1>
        </div>
        <div className="side-logo">
          <img src="https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png" alt="Logo Lateral" className="side-logo-img" />
        </div>
        
      </div>
      
      <div className="body-cc">
      <CarruselJava/>
          <div className="foo">
        <div className="footer-text">
          <p>Texto encima de los botones</p>
        </div>
        <div className="button-container">
          <div className="download-button">
            <a href="https://www.java.com/es/download/ie_manual.jsp" className="download-link">Descargar Java</a>
          </div>
          <div className="download-button">
            <a href="https://youtu.be/2ZXiuh0rg3M?list=PLWtYZ2ejMVJkjOuTCzIk61j7XKfpIR74K" className="download-link">Ver video</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default java;


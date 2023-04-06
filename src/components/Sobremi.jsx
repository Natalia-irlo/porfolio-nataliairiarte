import React from 'react';
import Aboutme from './Aboutme';
import './Aboutmemore.css';

const Sobremi = () => {
  return (
    <div>
      <Aboutme />
      <div className='ammore'>
      <div className='aboutme-all'>
      <div className='text-sobremi'>
        <h5>
          <p>Soy una desarrolladora web junior en formación desde los últimos meses,</p>
          <p>con experiencia en el campo del diseño y en el manejo de bases de datos,</p>
          <p>áreas que trato de unir adentrándome en el frontend y backend respectivamente.</p>
        </h5>
      </div>
      <h4 className='text-sobremi'><b>SOFT SKILLS</b></h4>
      <div className='softskills'>
      <div>
        <h5>
        <li>Liderazgo y trabajo en equipo</li>
        <li>Puntual</li>
        <li>Responsable</li>
        <li>En constante formación</li>
        </h5>
      </div>
      <div>
        <h5>
        <li>Organizada</li>
        <li>Resolutiva</li>
        <li>Facilidad de adaptación</li>
        <li>Creativa</li>
        </h5>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Sobremi
import React from 'react';
import Aboutme from './Aboutme';
import './Studies.css';

const Formacion = () => {
  return (
    <div>
      <Aboutme />
      <div className='studies-text'>
        <div>
      <h6>
        <p><b>Oct 2022 - Abril 2023</b></p>
        <p><b>Sept 2014 - Dic 2015</b></p>
        <p><b>Sept 2012 - Jun 2014</b></p>
      </h6>
    </div>
    <div>
      <h6>
      <p>Desarrollo Web FullStack (850h) Factoría F5</p>
      <p>CFGS Secretariado AFundación (A Coruña)</p>
      <p>CFGS Administración y Finanzas CIFP Porta da Auga (Ribadeo)</p>
      </h6>
    </div>
      </div>
      <h4 className='text-studies'><b>HARD SKILLS</b></h4>
      <div className='hardskills'>
      <div>
        <h6>
        <li>HTML y CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Laravel</li>
        </h6>
      </div>
      <div>
        <h6>
        <li>Figma</li>
        <li>Illustrator</li>
        <li>Canva</li>
        <li>Netlify</li>
        <li>GitHub</li>
        <li>Paquete Office</li>
        </h6>
      </div>
      </div>
    </div>
  )
}

export default Formacion
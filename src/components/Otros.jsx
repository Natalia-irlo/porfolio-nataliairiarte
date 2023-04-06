import React from 'react';
import Aboutme from './Aboutme';
import './Others.css';

const Otros = () => {
  return (
    <div>
      <Aboutme />
      <div className='others-complete'>
      <div className='titulos'>
      <h4 className='text-idiom'><b>IDIOMAS</b></h4>
      
        <h6>
        <li>Inglés <b>B2 Pearson Certificated</b></li>
        <li>Gallego <b>Celga 2</b></li>
        </h6>
      </div>
      <div className='titulos'>
      <h4 className='text-others'><b>OTROS</b></h4>
     
        <h6>
        <li>Carnet de conducir <b>B1</b> y vehículo propio</li>
        <li>Título <b>PRL</b></li>
        </h6>
      </div>
      </div>
    </div>
  )
}

export default Otros
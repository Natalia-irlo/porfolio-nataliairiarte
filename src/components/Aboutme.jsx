import React from 'react';
import './aboutme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotonatalia from '../assets/img/fotonatalia.jpg';
import icongithub from '../assets/img/icongithub.png';
import iconlink from '../assets/img/iconlink.png';
import iconmail from '../assets/img/iconmail.png';
import iconphone from '../assets/img/iconphone.png';
import locationicon from '../assets/img/locationicon.png';
import { Link } from "react-router-dom";


const Aboutme = () => {

  const showPhoneNumber = () => {
    window.alert("Este es mi número de teléfono: (+34) 610 610 462 puedes ponerte en contacto conmigo a través de llamadas y WhatsApp");
  };
  
  return (
    <div className='aboutme-page'> 
    <div className='location-am'>
      <div className='icon-location'>
        <img src={locationicon} alt="Localización" width={30}/>
      </div>
      <div className='text-location'>
        <p><b>Asturias</b></p>
        <p><b>Galicia</b></p>
      </div>
      <div className='text-datos'>
      <h3>NATALIA IRIARTE LÓPEZ</h3>
      <div>
        <h6>Junior Full Stack Developer</h6>
      </div>
      </div>
      <Link className="nav-link" target="_self" aria-current="page" to='/'>
      <img className="fotoperfil" src={fotonatalia} alt="Foto de perfil" width={100} />
      </Link>
      
      <div className="icons">
        <a href="https://github.com/Natalia-irlo" target="_blank" rel="noopener noreferrer"><img src={icongithub} alt="GitHub" width={40}/></a>
        <a href="https://www.linkedin.com/in/nataliairlo/" target="_blank" rel="noopener noreferrer"><img src={iconlink} alt="Linkdin" width={52}/></a>
        <a href="mailto:natiriarte5@gmail.com"><img className="iconmail" src={iconmail} alt="Mail" width={50}/></a>
        <button className='boton-phone' onClick={showPhoneNumber}><img src={iconphone} alt="Phone" width={40}/></button>

      </div>
    </div>
    </div>
    
  )
}

export default Aboutme
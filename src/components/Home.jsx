import React from "react";
//import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import fotonatalia from '../assets/img/fotonatalia.jpg';
import icongithub from '../assets/img/icongithub.png';
import iconlink from '../assets/img/iconlink.png';
import iconmail from '../assets/img/iconmail.png';
import iconphone from '../assets/img/iconphone.png';
import locationicon from '../assets/img/locationicon.png';

const Home = () => {

  const showPhoneNumber = () => {
    window.alert("Este es mi número de teléfono: (+34) 610 610 462 podéis poneros en contacto conmigo a través de llamadas y WhatsApp");
  };

  return (
    <div className="datos">
      <h2>NATALIA IRIARTE LÓPEZ</h2>
      <h5><b>Junior Full Stack Developer</b></h5>
      <h5><img className="location" src={locationicon} alt="Localización" width={25} /> Asturias - Galicia</h5>
      <a href="https://github.com/Natalia-irlo" target="_blank" rel="noopener noreferrer"><img className="fotoperfil" src={fotonatalia} alt="Foto de perfil" width={200} /></a>
      <div className="icons">
        <a href="https://github.com/Natalia-irlo" target="_blank" rel="noopener noreferrer"><img src={icongithub} alt="GitHub" width={50}/></a>
        <a href="https://www.linkedin.com/in/nataliairlo/" target="_blank" rel="noopener noreferrer"><img src={iconlink} alt="Linkdin" width={62}/></a>
        <a href="mailto:natiriarte5@gmail.com"><img className="iconmail" src={iconmail} alt="Mail" width={60}/></a>
        <button className='boton-phone' onClick={showPhoneNumber}><img src={iconphone} alt="Phone" width={50}/></button>
      </div>
    </div>
  );
}

export default Home;
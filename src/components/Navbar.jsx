import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="botones">
      <button className='boton-menu'>
        <Link className="links nav-link" target="_self" aria-current="page" to='/Sobremi'><b>SOBRE MI</b>
        </Link>
      </button>
      <button className='boton-menu'>
        <Link className="links nav-link" target="_self" aria-current="page" to='/Formacion'><b>FORMACIÓN</b>
        </Link>
      </button>
      <button className='boton-menu'>
        <Link className="links nav-link" target="_self" aria-current="page" to='/Work'><b>EXPERIENCIA</b>
        </Link>
      </button>
      <button className='boton-menu'>
        <Link className="links nav-link" target="_self" aria-current="page" to='/Others'><b>FORMACIÓN COMPLEMENTARIA</b>
        </Link>
      </button>
    </div>
  )
}

export default Navbar
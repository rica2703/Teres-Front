import React, { useState } from 'react';
import textos from '../../js/main';
import Boton from '../atomos/boton';
import css from '../../style/main.css';
import Input from '../atomos/input';
import Alerta from './alerta';
import Logo from '../../assets/img/logo.png';
function Header() {

    return (
        <>
        <div className='headerArriba'>

             <div className="headerRosa">
            <label  className="" >{textos.textoHeader.titulo}</label>
        </div>
        <div className="centradoLogo">
        <img src={Logo} alt="not-found" className="logoHeaderPink" />
        </div>
        </div>
            
        </>
    );
}

export default Header;

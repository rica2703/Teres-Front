import React, { useState } from 'react';
import textos from '../../js/main';
import Boton from '../atomos/boton';
import css from '../../style/main.css';
import Input from '../atomos/input';
import Alerta from './alerta';

function Header() {

    return (
        <>
            <div className='headerRosa'>
                <Boton className="botonHeader" textoBoton={textos.textoHeader.titulo} />
                <Boton className="botonHeader" textoBoton={textos.textoHeader.opc1} />
                <Boton className="botonHeader" textoBoton={textos.textoHeader.opc2} />
                <Boton className="botonHeader" textoBoton={textos.textoHeader.opc3} />
                <Boton className="botonHeader" textoBoton={textos.textoHeader.opc4} />
                <Input type="text" placeholder="Buscar producto" className="inputHeader" />
            </div>
            
        </>
    );
}

export default Header;

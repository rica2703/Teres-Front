import HeaderPink from "../atomos/headerPink.jsx";
import Input from '../atomos/input.jsx';
import Boton from "../atomos/boton";
import textos  from '../../js/main.js';
import Etiqueta from '../atomos/etiqueta.jsx';
import { useState } from "react";
// import userContext from "../../context/userContext.js";
import css from '../../style/main.css'
function Perfil() {

    

    return (
        <>
            <HeaderPink />
            <div className="contenedorFormularioHno">
           
                <div className="contenedorModificar">
                    <Etiqueta className="etiquetaModificar" textoP={textos.nombre} />
                    <Input type="text" className="inputRegistrar" placeholder={textos.nombre} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta className="etiquetaModificar" textoP={textos.apellidos} />
                    <Input type="text" className="inputRegistrar" placeholder={textos.apellidos} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta className="etiquetaModificar" textoP={textos.correo} />
                    <Input type="text" className="inputRegistrar" placeholder={textos.correo} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta textoP={textos.telefono}  className="etiquetaModificar"/>
                    <Input type="text" className="inputRegistrar" placeholder={textos.telefono} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta textoP={textos.contraseña} className="etiquetaModificar" />
                    <Input type="text" className="inputRegistrar" placeholder={textos.contraseña} />
                </div>
                <Boton textoBoton={textos.textoBotones.guardar} className="botonComprar" />
            </div>
        </>
    );
}
export default Perfil;
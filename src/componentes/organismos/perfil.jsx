import HeaderPink from "../atomos/headerPink.jsx";
import Input from '../atomos/input.jsx';
import Boton from "../atomos/boton";
import textos  from '../../js/main.js';
import Etiqueta from '../atomos/etiqueta.jsx';
import { useState,useEffect } from "react";
// import userContext from "../../context/userContext.js";
import css from '../../style/main.css';
const APIUSUARIO=`http://localhost:8080/api/usuarios/ricardo27`;
function Perfil() {
    const[usuario,setusuario]=useState({
        userName:"",
        pass:"",
        name:"",
        lastName:"",
        tel:"",
        email:"",
    });
    useEffect(()=>{
        async function fetchData(){
            const response=await fetch(APIUSUARIO);
            const data=await response.json();
            setusuario({
                userName:data.usuario,
                pass:data.contraseña,
                name:data.nombre,
                lastName:data.apellidos,
                tel:data.telefono,
                email:data.correo,
            });
            // alert(productos[0].conceptoPago)
        }
        fetchData();
    },[]);
    

    return (
        <>
            <HeaderPink />
            <div className="contenedorFormularioHno">
           
                <div className="contenedorModificar">
                    <Etiqueta className="etiquetaModificar" textoP={textos.nombre} />
                    <Input type="text" className="inputRegistrar" placeholder={usuario.name} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta className="etiquetaModificar" textoP={textos.apellidos} />
                    <Input type="text" className="inputRegistrar" placeholder={usuario.lastName} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta className="etiquetaModificar" textoP={textos.correo} />
                    <Input type="text" className="inputRegistrar" placeholder={usuario.email} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta textoP={textos.telefono}  className="etiquetaModificar"/>
                    <Input type="text" className="inputRegistrar" placeholder={usuario.tel} />
                </div>
                <div className="contenedorModificar">
                    <Etiqueta textoP={textos.contraseña} className="etiquetaModificar" />
                    <Input type="text" className="inputRegistrar" placeholder={usuario.pass} />
                </div>
                <Boton textoBoton={textos.textoBotones.guardar} className="botonComprar" />
            </div>
        </>
    );
}
export default Perfil;
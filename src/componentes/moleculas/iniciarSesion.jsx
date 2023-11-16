import style from '../../style/main.css';
import Boton from "../atomos/boton";
import Input from "../atomos/input";
import Label from "../atomos/label";
import textos from '../../js/main.js';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alerta from './alerta.jsx';
import { useContext } from 'react';
import { useEffect } from 'react';
// import userContext from '../../context/userContext.js';
const ApiUsuario = `http://localhost:8080/api/usuarios/`;
function IniciarSesion(props) {
    // const contextValue=useContext(userContext);
    const[usuario,setUsuario]=useState("");
    const[password,setPassword]=useState("");
    const[validar,setValidar]=useState(false);
    const[validacionDatos,setValidacionDatos]=useState(false);
    const navigate=useNavigate();
    const [userApi, setUserApi] = useState({
        usuario: "",
        contraseña: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        correo: "",

    });
    const handlerChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handlerChangeUserName=(e)=>{
        setUsuario(e.target.value);
    }
    const validarUserName=(e)=>{
        if(usuario===""){

            setUsuario(e.target.value);
        }
    }
    const validarPassword=(e)=>{
        if(password===""){
            setPassword(e.target.value);
        }
    }
    const handlerClickValidar=() => {
        
      }
useEffect(()=>{async function fetchData(){
    try {
        const respuesta =await fetch(ApiUsuario+usuario);
        const data=await respuesta.json();
        if(data.error){
            throw{message:"error"}
        }
        else{
            setUserApi({
                usuario: data.usuario,
                contraseña: data.contraseña,
                nombre: data.nombre,
                apellidos:data.apellidos,
                telefono:data.telefono,
                correo: data.correo,
            });
            // handlerClickValidar();
            // alert(password+" pass de api rest "+userApi.contraseña);
        }
        
    } catch (error) {
        setValidar(false);
        // alert(validar);
    }
}
fetchData();
});
    const handlerClick=()=>{
        if(userApi.usuario===usuario&&userApi.contraseña===password){
            // alert("entro")
            navigate("/perfil");
            // alert(validar);
        }
        else{
            setValidacionDatos(true);
        }
    }


    return (
        <>
            <form action="">
                <div className='contenedorFormularioHno'>
                    <img src={logo} alt="404-not found" className='imagenRegistrar' />
                    <Label className="textoRegistrar" textoLabel={textos.usuario}  />
                    <Input className="inputRegistrar" type="text"onBlur={validarUserName} onChange={handlerChangeUserName} />
                    <Label className="textoRegistrar" textoLabel={textos.contraseña} />
                    <Input className="inputRegistrar" type="password" onBlur={validarPassword}onChange={handlerChangePassword}/>
                    <Boton className="botonRegistrar" textoBoton={textos.botonIniciarSesion} onClick={()=>handlerClick()} type="button"/>
                    {/* <Link onClick={()=>handlerClick()}type='button' to={"/perfil"} className='botonRegistrar'>{textos.botonIniciarSesion}</Link> */}
                    {/* <Label className="textoRegistrar" textoLabel="ó"/> */}
                    <Boton className="botonRegistrar" textoBoton={textos.registarse} onClick={props.onClick} type="button"/>
                    
                </div>
            </form>
            {validar&&(
                <Alerta textoP={textos.textoBotones.crearUsuarioVacio} onClick={()=>setValidar(false)} textoLink={textos.textoBotones.ok} />
            )}
            {validacionDatos&&(
                <Alerta textoP={textos.textoBotones.datosIncorrectos} onClick={()=>setValidacionDatos(false)} textoLink={textos.textoBotones.ok}/>
            )}
        </>
    );
}
export default IniciarSesion;
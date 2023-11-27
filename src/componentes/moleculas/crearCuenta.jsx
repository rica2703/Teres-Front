import Boton from "../atomos/boton";
import Input from "../atomos/input";
import Label from "../atomos/label";
import style from '../../style/main.css';
import logo from '../../assets/img/logo.png';
import textos from '../../js/main.js';
import Alerta from '../moleculas/alerta.jsx'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ApiUsuario = `http://localhost:8080/api/usuarios/`;
function CrearCuenta(props) {
    const [validar,setValidar]=useState(false);
    const [usuario, setUsuario] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate=useNavigate();
    const [nuevoUsuario, setNuevoUsuario] = useState({
        usuario: "",
        nombre: "",
        apellidos: "",
        telefono: "",
        correo: "",
        contraseña: "",
    });
    const handlerChangeUsuario=(e)=>{
        setUsuario(e.target.value);
    }
    const handlerChangeNombre=(e)=>{
        setNombre(e.target.value);
    }
    const handlerChangeApellidos=(e)=>{
        setApellidos(e.target.value);
    }
    const handlerChangeTelefono = (e) => {
        // alert("entro");
        setTelefono(e.target.value);
        console.log(telefono)
    }
    const handlerChangeCorreo=(e)=>{
        setCorreo(e.target.value);
    }
    const handlerChangeContraseña=(e)=>{
        setContraseña(e.target.value);
    }
const validarUsuario=(e)=>{
    setNuevoUsuario({
        usuario: usuario,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contraseña: contraseña,
    });
}
const validarNombre=(e)=>{
    setNuevoUsuario({
        usuario: usuario,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contraseña: contraseña,
    });
}
const validarApellidos=(e)=>{
    setNuevoUsuario({
        usuario: usuario,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contraseña: contraseña,
    });
}
const validarTelefono=(e)=>{
    setNuevoUsuario({
        usuario: usuario,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contraseña: contraseña,
    });
}
const validarCorreo=(e)=>{
    setCorreo(e.target.value);
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!regex.test(correo)) {
            alert("Correo no valido");
        } else {
            setNuevoUsuario({
                usuario: usuario,
                nombre: nombre,
                apellidos: apellidos,
                telefono: telefono,
                correo: correo,
                contraseña: contraseña,
            });
        }
}
const validarContraseña=(e)=>{
    setNuevoUsuario({
        usuario: usuario,
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        correo: correo,
        contraseña: contraseña,
    });
}




    const handlerClick=async()=>{
        setNuevoUsuario({
            usuario: usuario,
            nombre: nombre,
            apellidos: apellidos,
            telefono: telefono,
            correo: correo,
            contraseña: contraseña,
        });
        try {
            if(usuario===""||nombre===""||apellidos===""||telefono===""||correo===""||contraseña===""){
                setValidar(true);
            }
            else{
                const respuesta=await fetch(ApiUsuario,{
                    method:'post',
                    headers:{'Content-Type':'application/json',},
                    body:JSON.stringify(nuevoUsuario),
                });
                if (respuesta.ok) {
                    // La solicitud se completó con éxito
                    // alert('Usuario creado con éxito');
                    navigate("/comprar");
                  } else {
                    // La solicitud no se completó con éxito
                    alert('Error al crear el usuario');
                  }
            }
        } catch (error) {
            alert("El usuario ya existe intente con otro");
        }
    }

    return (
        <>
            <div className="">
                <form action="">
                    <div className="contenedorFormulario">
                        <div className="contenedorBotonCerrar">
                            <Boton className="botonCerrar" textoBoton={textos.botonCerrar} onClick={props.onClick} type="button" />
                        </div>
                        <img src={logo} alt="404-not found" className="imagenRegistrar" />
                        <Label textoLabel={textos.usuario} />
                        <Input className="inputRegistrar" type="text" onBlur={validarUsuario} onChange={handlerChangeUsuario} />
                        <Label textoLabel={textos.nombre} />
                        <Input className="inputRegistrar" type="text" onBlur={validarNombre} onChange={handlerChangeNombre} />
                        <Label textoLabel={textos.apellidos} />
                        <Input className="inputRegistrar" type="text" onBlur={validarApellidos} onChange={handlerChangeApellidos} />
                        <Label textoLabel={textos.telefono} />
                        <Input className="inputRegistrar" type="tel" onBlur={validarTelefono} onChange={handlerChangeTelefono} />
                        <Label textoLabel={textos.correo} />
                        <Input className="inputRegistrar" type="email" onBlur={validarCorreo} onChange={handlerChangeCorreo} />
                        <Label textoLabel={textos.contraseña} />
                        <Input className="inputRegistrar" type="password" onBlur={validarContraseña} onChange={handlerChangeContraseña} />
                        <Boton className="botonRegistrar" type="button" textoBoton={textos.boton} onClick={()=>handlerClick()} />
                    </div>
                </form>
            </div>
            {validar&&
            (
                <div>
            <Alerta textoP={textos.textoBotones.crearUsuarioVacio} onClick={()=>setValidar(false)} textoLink={textos.textoBotones.ok} />
            </div>
            )}
        </>
    );
}
export default CrearCuenta;
import HeaderPink from "../atomos/headerPink";
import Boton from "../atomos/boton";
import Etiqueta from "../atomos/etiqueta";
import Input from '../atomos/input';
import textos from "../../js/main";
import DetalleProducto from "../moleculas/DetalleProducto";
import { Label } from "reactstrap";
import { useEffect, useState } from "react";
import OpcionLista from "../moleculas/opcionLista";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
function DetallePedido() {
    const navigate=useNavigate();
    const {user,setUser}=useContext(userContext);
    const [nombreUbi,setNombreUbi]=useState("");
    const [precio,setPrecio]=useState("0");
    const [opciones,setOpciones]=useState(false);
    const [envio,setEnvio]=useState(0.0);
    const [total,setTotal]=useState(0.0);
    const opcion1=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar1);
        setEnvio(40);
    }
    const opcion2=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar2);
        setEnvio(40);

    }
    const opcion3=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar3);
        setEnvio(40);

    }
    const opcion4=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar4);
        setEnvio(0.0);

    }
    useEffect(()=>{

        setTotal(user.precio+envio);
    });
const handleClickRealizarPedido=()=>{
    setUser({
        usuarioContexto:user.usuarioContexto, 
        urlContexto:user.urlContexto,
        pedido:user.pedido,
        color:user.color,
        piezas:user.piezas,
       nombrePedido:user.nombrePedido,
       lugar:nombreUbi,
       envio:envio,
       precio:total,
    });
    // alert("usuario pagina detallePedido: "+user.usuarioContexto);
    navigate("/pago");
}
useEffect(()=>{
    if(user.usuarioContexto===""){
    navigate("/login");
    }
        });
    
    return (<>
        <HeaderPink />
        <div className="contenedorDetallePedido">
            {/* <div className="contenedorDetallePedido1">
                <img className="imagenDetallePedido" src="" alt="Not-Found" />
                <Etiqueta textoP={textos.ramoDe} />
                <Etiqueta textoP={textos.pzs} />
                <Etiqueta textoP="{textoContenedorProducto[0].precio1}" />
            </div> */}
            <DetalleProducto src={user.urlContexto} nombreP={user.nombrePedido} piezasP={user.piezas+" pzs"} precioP={"$"+user.precio}/>
            <div className="contenedorDetallePedido2">
                <div className="tituloDetallesPedido">
                    <Etiqueta textoP={textos.detalles} />
                </div>
                <div className="detallePedido2">

                    <div className="detallePedido2Left">
                        <Etiqueta textoP={textos.orden} />
                        <Etiqueta textoP={textos.envio} />
                        <Etiqueta textoP={textos.total} />

                    </div>
                    <div className="detallePedido2right">
                        <Etiqueta textoP={"$"+user.precio} />
                        <Etiqueta textoP={"$"+envio} />
                        <Etiqueta textoP={"$"+total} />

                    </div>
                </div>
            </div>
            <div className="ubicacion">
                <Etiqueta textoP={textos.ubicacion}/>
                <Etiqueta textoP={nombreUbi}/>
                <Boton onClick={()=>setOpciones(true)} className="botonUbicacion" />
            </div>
            <Boton className="botonRealizarPedido" onClick={()=>handleClickRealizarPedido()} textoBoton={textos.textoBotones.realizarPedido} />
        </div>
            {opciones&&
            <OpcionLista onClick1={opcion1} onClick2={opcion2} onClick3={opcion3} onClick4={opcion4}/>
            }
    </>);
}
export default DetallePedido;
import HeaderPink from "../atomos/headerPink";
import DetalleProducto from "../moleculas/DetalleProducto";
import Boton from "../atomos/boton";
import textos from "../../js/main";
import css from "../../style/main.css";
import userContext from "../../context/userContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function VerPedidos(props){
    const navigate=useNavigate();
    const {user,setUser}=useContext(userContext);
    useEffect(()=>{
        if(user.usuarioContexto===""){
        navigate("/login");
        }
            });
    return(<>
    <div className="alinearFila">
    <DetalleProducto src={props.src} nombreP={props.userName} piezasP={props.nombreP} precioP={props.precioP}/>
    
    <Boton className="botonAceptarPedido" onClick={props.onClickAceptar} textoBoton={props.textoBotonA}/>
    <Boton className={props.botonClaseRechazar} onClick={props.onClickRechazar}textoBoton={props.textoBotonR}/>
    
    </div>
    </>);
}
export default VerPedidos;
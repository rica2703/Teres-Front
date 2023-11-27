import HeaderPink from "../atomos/headerPink";
import Boton from "../atomos/boton";
import  textos  from "../../js/main";
import { useNavigate } from "react-router-dom";
import userContext from "../../context/userContext";
import { useEffect } from "react";
import { useContext } from "react";
function MenuAdmin(){
    const {user,setUser}=useContext(userContext);
    const navigate=useNavigate();
    const handleClick=()=>{
        setUser({
            usuarioContexto: user.usuarioContexto,
            contraseñaContexto: user.contraseñaContexto
          });
        navigate("/reporte");
    }
    const handleClickBoton2=()=>{
        setUser({
            usuarioContexto: user.usuarioContexto,
            contraseñaContexto: user.contraseñaContexto
          });
        navigate("/ver-productos");
    }
    const handleClickBoton3=()=>{
        setUser({
            usuarioContexto: user.usuarioContexto,
            contraseñaContexto: user.contraseñaContexto
          });
        navigate("/ver-pedidos");
    }
    useEffect(()=>{
        if(user.usuarioContexto===""){
        navigate("/login");
        }
            });

    return(<>
    <HeaderPink/>
    <div className="contenedorMenuAdmin">
        <Boton className="botonesMenuAdmin"onClick={()=>handleClickBoton3()} textoBoton={textos.textoBotones.verPedidos}/>
        <Boton className="botonesMenuAdmin" onClick={()=>handleClickBoton2()} textoBoton={textos.textoBotones.verProductos}/>
        <Boton onClick={()=>handleClick()} className="botonesMenuAdmin" textoBoton={textos.textoBotones.reporteVentas}/>

    </div>
    
    </>);
}
export default MenuAdmin;
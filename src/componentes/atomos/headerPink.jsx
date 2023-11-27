import Boton from "./boton";
import textos from '../../js/main.js';
import Logo from '../../assets/img/logo.png';
import { useNavigate } from "react-router-dom";
function HeaderPink(){
    const navigate=useNavigate();
    const handleClickCerrarSesion=()=>{
        navigate("/login");
    }
    return(
        <>
        <div className="headerRosa">
            <label  className="" >{textos.textoHeader.titulo}</label>
        </div>
        <div className="centradoLogo">
        <img src={Logo} alt="not-found" className="logoHeaderPink" />
        </div>
        <Boton className="botonSeguimiento" textoBoton="Cerrar Sesion" onClick={()=>handleClickCerrarSesion()}/>
        </>
    );
}
export default HeaderPink;
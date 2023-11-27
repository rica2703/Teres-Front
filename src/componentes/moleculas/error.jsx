import { useNavigate } from "react-router-dom";
import Boton from "../atomos/boton";
import Etiqueta from "../atomos/etiqueta";
import css from '../../style/main.css';
function Error(){
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/")
    }
    return(<>
    <div className="centradoErr">
    <Etiqueta textoP="No se encontro la pagina"/>
    <Boton className="botonSeguimiento" textoBoton="Regresar" onClick={()=>handleClick()}/>
    </div>
    </>);
}
export default Error;
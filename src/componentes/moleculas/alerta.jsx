import Etiqueta from "../atomos/etiqueta";
import Boton from "../atomos/boton";
import css from '../../style/main.css';
import { Link } from "react-router-dom";
function Alerta(props){
    return(
        <>
        <div className="alerta">
            <div className="alertaCuadro">
            <Etiqueta textoP={props.textoP} className=""/>
            {/* <Boton className="botonAlert" textoBoton={textos.botonIniciarHeader} onClick={props.onClick}/> */}
            <Link className="botonAlert" to={props.to} onClick={props.onClick}>{props.textoLink}</Link>
            </div>
        </div>
        </>
    );
}
export default Alerta;
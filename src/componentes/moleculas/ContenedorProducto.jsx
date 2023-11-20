import Etiqueta from "../atomos/etiqueta";
import css from '../../style/main.css';
import Boton from "../atomos/boton";
import textos from "../../js/main";
function ContenedorProducto(props){
    return (<>
    <div className="contenedorProductos">
        <img src={props.src} alt="not-found" />
        <div className="contenedorTexto">
            <Etiqueta textoP={props.textoNombre} className=""/>
            <Etiqueta textoP={props.textoPrecio} className=""/>
            <Boton className="botonCarrusel" onClick={props.onClick} textoBoton={textos.textoHeader.comprar}/>
        </div>
    </div>
    </>);
}
export default ContenedorProducto;
import Etiqueta from "../atomos/etiqueta";
import css from '../../style/main.css'
function ContenedorProducto(props){
    return (<>
    <div className="contenedorProductos">
        <img src={props.src} alt="not-found" />
        <div className="contenedorTexto">
            <Etiqueta textoP={props.textoNombre} className=""/>
            <Etiqueta textoP={props.textoPrecio} className=""/>
        </div>
    </div>
    </>);
}
export default ContenedorProducto;
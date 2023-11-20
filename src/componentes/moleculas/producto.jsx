import Boton from "../atomos/boton";
import textos from "../../js/main";
import cc from '../../style/main.css';
import Etiqueta from "../atomos/etiqueta";
function Producto(props){
    return(<>
<div className="contenedorProductoComprar">
    <img src={props.src} className="imagenProductoComprar" alt="not-found" />
    <Etiqueta textoP={props.textoP}/>
    <Etiqueta textoP={props.textoPrecio}/>
    <Boton className="botonComprarProducto" onClick={props.onClick} textoBoton={textos.textoBotones.comprarProducto}/>
</div>
    </>);
}
export default Producto;
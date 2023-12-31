import Boton from "../atomos/boton";
import textos from "../../js/main";
import cc from '../../style/main.css';
import Etiqueta from "../atomos/etiqueta";
import { useEffect, useState } from "react";
import VerProductos from "../organismos/verProductos";
function Producto(props) {
    const [validar, setValidar] = useState(false);
    useEffect(() => {

    });
    return (<>
        <div className="contenedorProductoComprar">
            <div className="divImagenes">
            <img src={props.src} className="imagenProductoComprar" alt="not-found" />
            </div>
            <Etiqueta textoP={props.textoP} />
            <Etiqueta textoP={props.textoPrecio} />
            <Boton className="botonComprarProducto" onClick={props.onClick} textoBoton={props.textoBoton} />
        </div>
    </>);
}
export default Producto;
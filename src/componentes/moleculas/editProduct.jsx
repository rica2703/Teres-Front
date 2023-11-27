import Boton from "../atomos/boton";
import textos from "../../js/main";
import cc from '../../style/main.css';
import Etiqueta from "../atomos/etiqueta";
import { useEffect, useState } from "react";
import VerProductos from "../organismos/verProductos";
function EditProduct(props) {
    return (<>
        <div className="contenedorProductoComprar">
            <img src={props.src} className="imagenProductoComprar" alt="not-found" />
            <Etiqueta textoP={props.textoP} />
            <Etiqueta textoP={props.textoPrecio} />
            <Boton className="botonComprarProducto" onClick={props.onClick} textoBoton={props.textoBoton} />
            <Boton className="botonComprarProducto" onClick={props.onClickRemove} textoBoton={props.textoBotonEliminar} />
        </div>
    </>);
}
export default EditProduct;





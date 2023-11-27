import Etiqueta from "../atomos/etiqueta";
import textos from "../../js/main";
function DetalleProducto(props){
    return(<>
    <div className="contenedorDetallePedido1">
                <img className="imagenDetallePedido" src={props.src} alt="Not-Found" />
<div className="contenedorDetallePedido3">

                <Etiqueta textoP={props.nombreP} />
                <Etiqueta textoP={props.piezasP} />
                <Etiqueta textoP={props.precioP} />
</div>
            </div>
    </>);
}
export default DetalleProducto;
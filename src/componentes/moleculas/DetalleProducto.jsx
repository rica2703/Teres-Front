import Etiqueta from "../atomos/etiqueta";
import textos from "../../js/main";
function DetalleProducto(){
    return(<>
    <div className="contenedorDetallePedido1">
                <img className="imagenDetallePedido" src="" alt="Not-Found" />
                <Etiqueta textoP={textos.ramoDe} />
                <Etiqueta textoP={textos.pzs} />
                <Etiqueta textoP="{textoContenedorProducto[0].precio1}" />
            </div>
    </>);
}
export default DetalleProducto;
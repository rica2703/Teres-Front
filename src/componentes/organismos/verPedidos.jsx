import HeaderPink from "../atomos/headerPink";
import DetalleProducto from "../moleculas/DetalleProducto";
import Boton from "../atomos/boton";
import textos from "../../js/main";
import css from "../../style/main.css"
function VerPedidos(){
    return(<>
    <HeaderPink/>
    <div className="alinearFila">
    <DetalleProducto/>
    <Boton textoBoton={textos.textoBotones.aceptar}/>
    <Boton textoBoton={textos.textoBotones.rechazar}/>
    </div>
    </>);
}
export default VerPedidos;
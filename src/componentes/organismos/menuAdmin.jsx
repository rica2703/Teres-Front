import HeaderPink from "../atomos/headerPink";
import Boton from "../atomos/boton";
import  textos  from "../../js/main";
function MenuAdmin(){
    return(<>
    <HeaderPink/>
    <div className="contenedorMenuAdmin">
        <Boton className="botonesMenuAdmin" textoBoton={textos.textoBotones.verPedidos}/>
        <Boton className="botonesMenuAdmin" textoBoton={textos.textoBotones.verProductos}/>
        <Boton className="botonesMenuAdmin" textoBoton={textos.textoBotones.reporteVentas}/>

    </div>
    
    </>);
}
export default MenuAdmin;
import Header from "../moleculas/header";
import Etiqueta from "../atomos/etiqueta";
import textos  from "../../js/main";
import css from '../../style/main.css';
import Input from "../atomos/input";
import Boton from "../atomos/boton";
function Pedido() {
    return (<>
        <Header />
        <div className="contenedorPedido">
            <div className="pedido">

                <div className="pedidoDivStart">
                    {/* personaliza producto */}
                    <Etiqueta className="nombrePedido" textoP={textos.noFlores} />
                    <Input type="number" className="inputCantidadFloresPedido" />
                    <Etiqueta classname="" textoP={textos.color} />
                    <div className="divBotonesColores">
                        <Boton className="botonRojo" />
                        <Boton className="botonAmarillo" />
                        <Boton className="botonAzul" />
                        <Boton className="botonRosa" />
                    </div>
                    <br />
                </div>
                <div className="pedidoDivCenter">
                    {/* aqui va la imagen */}
                    {/* <img className="imagenPedido" src={textoContenedorProducto[0].link} alt="" /> */}
                </div>
                <div className="pedidoDivEnd">
                    {/* nombre del producto */}
                    <Etiqueta className="nombrePedido" textoP={textos.ramoDe} />
                </div>
            </div>
            <footer></footer>
        </div>
    </>);
}
export default Pedido;
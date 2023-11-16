import Etiqueta from "../atomos/etiqueta";
import Boton from "../atomos/boton";
import css from '../../style/main.css';
import textos from "../../js/main.js";
function OpcionLista(props) {
    return (

        <>
            <div className="alertaOpciones">
                <div className="alertaCuadroOpciones">
                    <Etiqueta textoP={textos.elegirOpc} />
                    <Boton className="botonOpcionesAlert" textoBoton={textos.textoBotones.lugar1} onClick={props.onClick1} />
                    <Boton className="botonOpcionesAlert" textoBoton={textos.textoBotones.lugar2} onClick={props.onClick2} />
                    <Boton className="botonOpcionesAlert" textoBoton={textos.textoBotones.lugar3} onClick={props.onClick3} />
                    <Boton className="botonOpcionesAlert" textoBoton={textos.textoBotones.lugar4} onClick={props.onClick4} />
                </div>
            </div>
        </>

    );
}
export default OpcionLista;
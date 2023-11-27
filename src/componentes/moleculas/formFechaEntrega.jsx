import css from '../../style/main.css'
import Input from "../atomos/input";
import Etiqueta from "../atomos/etiqueta";
import Boton from '../atomos/boton';
function FormFechaEntrega(props){
    return(
        <>
         <div className="alertaForm">
            <div className="alertaCuadro">
                <Etiqueta textoP="DÍA DE ENTREGA"/>
                <Input onChange={props.onChangeDate} className="inputFormDate" type="date"/>
                <Etiqueta textoP="HORA DE ENTREGA"/>
                <Input onChange={props.onChangeTime} className="inputFormDate" type="time"/>
                <Boton className="botonAlert" onClick={props.onClick} textoBoton="Guardar datos de entrega"/>
                </div>
            </div>
        </>
    );
}
export default FormFechaEntrega;
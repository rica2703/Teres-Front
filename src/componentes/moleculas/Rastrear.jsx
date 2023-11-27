import css from '../../style/main.css';
import textos from "../../js/main"; function Rastrear(props) {
    return (<>


        <div className="centroSeguimiento">
            <div className="vertical">
                <div className={props.opcion1} onClick={props.onClick}></div>
                <div className={props.circuloOpcion1}></div>
                <div className={props.opcion2}></div>
                <div className={props.circuloOpcion2}></div>
                <div className={props.opcion3}></div>
                <div className={props.circuloOpcion3}></div>
            </div>
            <div className="verticalDerecho">
                <p>{textos.proceso1}</p>
                <p>{textos.proceso2}</p>
                <p>{props.textoEntrega}</p>
            </div>
            <div className='derechoImagen'>
                <p>{props.textoP}</p>
                <img src={props.src} className="imagenRastrear" alt="" />
            </div>
        </div>

    </>);
}
export default Rastrear;
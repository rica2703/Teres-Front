import css from '../../style/main.css'
import Etiqueta from '../atomos/etiqueta';
function Filas(props){
    return(<>
    <div className=''>
        
     <tr>
            <td><Etiqueta textoP={props.colConcepto} className="conceptoPago"/></td>
            <td><Etiqueta textoP={props.colCodigo} className='codProVen'/></td>
            <td>{props.colNombreProducto}</td>
            <td>{props.colEspecificaciones}</td>
            <td>{props.colNombreUsuario}</td>
            <td>{props.colFecha}</td>
            <td>{props.colCostoEnvio}</td>
            <td>{props.colCostoProducto}</td>
            <td><Etiqueta textoP={props.colTotal} className='total'/></td>
        </tr>
        
    </div>
    </>);
}
export default Filas;
import css from '../../style/main.css';
import Etiqueta from '../atomos/etiqueta';
import textos from '../../js/main';
import Filas from './filas';
function Tabla(props) {
    return (<>
        <table className="tabla">
            <tr className='columna'>
                <th>{textos.tabla.col1}</th>
                <th>{textos.tabla.col2}</th>
                <th>{textos.tabla.col3}</th>
                <th>{textos.tabla.col4}</th>
                <th>{textos.tabla.col5}</th>
                <th>{textos.tabla.col6}</th>
                <th>{textos.tabla.col7}</th>
                <th>{textos.tabla.col8}</th>
                <th>{textos.tabla.col9}</th>
            </tr>
            <Filas colConcepto={props.colConcepto}
                colCodigo={props.colCodigo}
                colNombreProducto={props.colNombreProducto}
                colEspecificaciones={props.colEspecificaciones}
                colNombreUsuario={props.colNombreUsuario}
                colFecha={props.colFecha}
                colCostoEnvio={props.colCostoEnvio}
                colCostoProducto={props.colCostoProducto}
                colTotal={props.colTotal} />
        </table>
    </>);
}
export default Tabla;
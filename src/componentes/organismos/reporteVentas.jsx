import { useEffect, useState } from "react";
import HeaderPink from "../atomos/headerPink";
import Tabla from "../moleculas/tabla";
import Filas from "../moleculas/filas";
import textos from "../../js/main";
import Etiqueta from "../atomos/etiqueta";
import userContext from "../../context/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const APIVENTAS=`http://localhost:8080/api/ventas/`;
function Reporte(props){
    const navigate=useNavigate();
    const {user,setUser}=useContext(userContext);

const[productos,setProductos]=useState([]);
useEffect(()=>{
    async function fetchData(){
        const response=await fetch(APIVENTAS);
        const data=await response.json();
        setProductos(data.slice());
        // alert(productos[0].conceptoPago)
    }
    fetchData();
},[]);
useEffect(()=>{
    if(user.usuarioContexto===""){
    navigate("/login");
    }
        });
    return(<>
    <HeaderPink/>
    {/* <p>{productos[0].nombreProducto}</p> */}
    <div className="alinearFila">
    {/* <Tabla key={index} colConcepto={producto.conceptoPago}
            colCodigo={producto.codigoProductoVendido}
            colNombreProducto={producto.NombreProducto}
            colEspecificaciones={producto.especificaciones}
            colNombreUsuario={producto.nombreUsuario}
            colFecha={producto.fechaCompra}
            colCostoEnvio={producto.envioCosto}
            colCostoProducto={producto.costoProducto}
            colTotal={producto.total}/> */}
             <table className="tabla">
            <tr className='columna'>
                <th>{textos.tabla.col1}</th>
                <th>{textos.tabla.col10}</th>
                <th>{textos.tabla.col2}</th>
                <th>{textos.tabla.col3}</th>
                <th>{textos.tabla.col4}</th>
                <th>{textos.tabla.col5}</th>
                {/* <th>{textos.tabla.col6}</th> */}
                <th>{textos.tabla.col11}</th>
                <th>{textos.tabla.col12}</th>
                <th>{textos.tabla.col7}</th>
                <th>{textos.tabla.col8}</th>
                <th>{textos.tabla.col9}</th>
            </tr>
            
          
            
        {productos.map((producto,index)=>(
            // <Filas key={index} colConcepto={producto.conceptoPago}
            // colCodigo={producto.codigoProductoVendido}
            // colNombreProducto={producto.nombreProducto}
            // colEspecificaciones={producto.especificaciones}
            // colNombreUsuario={producto.nombreUsuario}
            // colFecha={producto.fechaCompra}
            // colCostoEnvio={producto.envioCosto}
            // colCostoProducto={producto.costoProducto}
            // colTotal={producto.total}/>
            <tr>
            <td><Etiqueta textoP={producto.conceptoPago} className="conceptoPago"/></td>
            <td><img src={producto.urlImagen} alt="404-not-found" className="imagenReportePedido" /></td>
            <td><Etiqueta textoP={producto.codigoProductoVendido} className='codProVen'/></td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.especificaciones}</td>
            <td>{producto.nombreUsuario}</td>
            {/* <td>{producto.fechaCompra}</td> */}
            <td>{producto.datosEnvio}</td>
            <td>{producto.estado}</td>
            <td>{producto.envioCosto}</td>
            <td>{producto.costoProducto}</td>
            <td><Etiqueta textoP={producto.total} className='total'/></td>
            </tr>
            ))}
             </table>
        
    </div>
    </>);
}
export default Reporte;
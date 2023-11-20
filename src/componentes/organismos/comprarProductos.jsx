import HeaderPink from '../atomos/headerPink.jsx';
import Producto from '../moleculas/producto.jsx';
import userContext from '../../context/userContext.js';
import { useContext } from 'react';
import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const ApiProductos=`http://localhost:8080/api/productos/`;
function Comprar(){
  const {user,setUser}=useContext(userContext);
  const navigate=useNavigate();
    // const[productoApi,setPorductoApi]=useState();
const [productos,setProductos]=useState([]);

useEffect(()=>{
  async function fetchData(){
    const resp= await fetch(ApiProductos);
    const data=await resp.json();
    setProductos(data.slice());
    // alert(arreglo.length);
    if(user.usuarioContexto===""&&user.contraseñaContexto===""){
      navigate("/login");
    }
    else{
      setUser({usuarioContexto:user.usuarioContexto,contraseñaContexto:user.contraseñaContexto});
      navigate("/comprar");
    }
  }
  fetchData();
},[]);
const handleBuy=(codigoProducto)=>{
// alert("El codigo del producto es: "+codigoProducto);
setUser({pedido:codigoProducto});
// alert("el pedido es: "+user.pedido)
navigate("/pedido");
}
    return(<>
    <HeaderPink/>
    <div className='contenedorComponenteProducto'>
      {/* <Navigate to="/login"/> */}
          {productos.map((producto,index)=>(
    <Producto src={producto.urlImagen} textoP={producto.nombreP} onClick={()=>handleBuy(producto.codigoProducto)} textoPrecio={"$"+producto.precioUnitario}/>
          ))}
    </div>
    </>);
}
export default Comprar;
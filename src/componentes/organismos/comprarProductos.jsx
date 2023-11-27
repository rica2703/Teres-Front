import HeaderPink from '../atomos/headerPink.jsx';
import Producto from '../moleculas/producto.jsx';
import userContext from '../../context/userContext.js';
import textos from '../../js/main.js';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Boton from '../atomos/boton.jsx';
const ApiProductos = `http://localhost:8080/api/productos/`;
function Comprar() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  // const[productoApi,setPorductoApi]=useState();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(ApiProductos);
      const data = await resp.json();
      setProductos(data.slice());
      // alert(arreglo.length);
      if (user.usuarioContexto === "" && user.contraseñaContexto === "") {
        navigate("/login");
      }
      else {
        setUser({
          usuarioContexto: user.usuarioContexto,
          contraseñaContexto: user.contraseñaContexto
        });
        // alert(user.usuarioContexto);
        navigate("/comprar");
      }
    }
    fetchData();
  }, []);
  const handleBuy = (codigoProducto) => {
    // alert("El codigo del producto es: "+codigoProducto);
    setUser({
      usuarioContexto: user.usuarioContexto,
      contraseñaContexto: user.contraseñaContexto,
      pedido: codigoProducto
    });
    // alert("el pedido es: "+user.pedido)
    navigate("/pedido");
  }
  const handleClickRastrear =()=>{
    setUser({
      usuarioContexto: user.usuarioContexto,
      contraseñaContexto: user.contraseñaContexto
    });
    navigate("/seguimiento");
  }
  return (<>
    <HeaderPink />
    <Boton className="botonSeguimiento" textoBoton="Rastrear Producto" onClick={()=>handleClickRastrear()}/>
    <div className='contenedorComponenteProducto'>
      {/* <Navigate to="/login"/> */}
      {productos.map((producto, index) => (
        <Producto textoBoton={textos.textoBotones.comprarProducto} src={producto.urlImagen} textoP={producto.nombreP} onClick={() => handleBuy(producto.codigoProducto)} textoPrecio={"$" + producto.precioUnitario} />
      ))}
    </div>
  </>);
}
export default Comprar;
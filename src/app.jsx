import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import Home from './componentes/organismos/home';
import Formulario from '../src/componentes/organismos/formulariosRegistrarIniciar'
import Perfil from './componentes/organismos/perfil';
import Pedido from './componentes/organismos/pedido';
import DetallePedido from './componentes/organismos/detallePedido';
import Pago from './componentes/organismos/pago';
import MenuAdmin from './componentes/organismos/menuAdmin';
import Reporte from './componentes/organismos/reporteVentas';
import Comprar from './componentes/organismos/comprarProductos';
import VerProductos from './componentes/organismos/verProductos';
import AprobarPedidos from './componentes/organismos/AprobarPedidos';
import Seguimiento from './componentes/moleculas/seguimiento';
import userContext from './context/userContext';
import Error from './componentes/moleculas/error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/reporte",
    element: <Reporte />,
  },
  {
    path:"/seguimiento",
    element:<Seguimiento/>,
  },
  {
    path: "/ver-pedidos",
    element: <AprobarPedidos/>,
  },
  {
    path: "/menu-administrador",
    element: <MenuAdmin />,
  },
  {
    path: "/pago",
    element: <Pago />,
  },
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/detallePedido",
    element: <DetallePedido />,
  },
  {
    path: "/pedido",
    element: <Pedido />,
  },
  {
    path: "/login",
    element: <Formulario />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/comprar",
    element: <Comprar />,
  },
  {
    path:"/ver-productos",
    element:<VerProductos/>,
  },
  {
    path:"*",
    element:<Error/>
  },
]);

function App() {
  const [user, setUser] = useState({
    usuarioContexto: "",
    contraseñaContexto: "",
    pedido:"",
    color:"",
    piezas:"",
    nombrePedido:"",
    urlContexto:"",
    precio:"",
    lugar:"",
    fecha:"",
    envio:"",
  });
  return (<>
    <userContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  </>)
}
export default App;
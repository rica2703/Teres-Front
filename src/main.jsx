import React from 'react'
import ReactDOM from 'react-dom/client';
// import Home from './componentes/organismos/home';
// import Formulario from '../src/componentes/organismos/formulariosRegistrarIniciar'
// import Perfil from './componentes/organismos/perfil';
// import Pedido from './componentes/organismos/pedido';
// import DetallePedido from './componentes/organismos/detallePedido';
// import Pago from './componentes/organismos/pago';
// import MenuAdmin from './componentes/organismos/menuAdmin';
// import VerPedidos from './componentes/organismos/verPedidos';
// import Reporte from './componentes/organismos/reporteVentas';
import App from './app';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
// path:"/reporte",
// element:<Reporte/>,
//   },
//   {
//     path:"/ver-pedidos",
//     element:<VerPedidos/>,
//   },
//   {
//     path:"/menu-administrador",
//     element:<MenuAdmin/>,
//   },
//   {
//     path:"/pago",
//     element:<Pago/>,
//   },
//   {
//     path: "",
//     element: <Home/>,
//   },
//   {
//     path:"/detallePedido",
//     element:<DetallePedido/>,
//   },
//   {
//     path:"/pedido",
//     element:<Pedido/>,
//   },
//   {
//     path:"/login",
//     element:<Formulario/>,
//   },
//   {
//     path:"/perfil",
//     element:<Perfil/>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)

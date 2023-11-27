import HeaderPink from "../atomos/headerPink";
import Etiqueta from "../atomos/etiqueta";
import Boton from "../atomos/boton";
import css from '../../style/main.css'
import textos from "../../js/main";
import { useContext } from "react";
import userContext from "../../context/userContext";
import { useState, useEffect } from "react";
import Alerta from "../moleculas/alerta";
import { useNavigate } from "react-router-dom";
const APIVENTAS = `http://localhost:8080/api/ventas/`;
function Pago() {
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(null);
  const [pagoRealizado, setPagoRealizado] = useState(false);
  const [numRandomApi,setNumRandomApi]=useState({
    conceptoPagoRandom:"",
  });
  const { user, setUser } = useContext(userContext);
  const [errorApi,setErrorApi]=useState(false);
  const [venta, setVenta] = useState({
    conceptoPago: "",
    urlImagen:"",
    codigoProductoVendido:"",
    nombreProducto: "",
    especificaciones: "",
    nombreUsuario: "",
    fechaCompra: "",
    datosEnvio:"",
    estado: "",
    envioCosto:"",
    costoProducto:"",
    total: "",
  });
  useEffect(() => {
    // Generar un número aleatorio de 6 dígitos al cargar la página
    setRandomNumber(generateRandomNumber());
  }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, equivalente a componentDidMount en clases.

  function generateRandomNumber() {
    // Generar un número aleatorio de 6 dígitos
    return Math.floor(100000 + Math.random() * 900000);
  }
  useEffect(() => {
    // alert("num random"+randomNumber);
    async function fetchData() {
      try {
        const respuesta = await fetch(APIVENTAS + randomNumber);
        const data = await respuesta.json();
        if (data.error) {
          throw { message: "error" }
        }
        else{
          // alert("genero nuevo numero random");
          generateRandomNumber();
            }
        }
        catch(err){
// alert("error")
        }
      }
      fetchData();
    });
  //   setUser({
  //     usuarioContexto:user.usuarioContexto, 
  //     pedido:user.pedido,
  //     color:user.color,
  //     piezas:user.piezas,
  //    nombrePedido:user.nombrePedido,
  //    precio:total,
  // });
  useEffect(()=>{
    setVenta({
      conceptoPago: randomNumber,
      urlImagen:user.urlContexto,
      codigoProductoVendido:user.pedido,
      nombreProducto: user.nombrePedido,
      especificaciones: "Color: "+user.color+" piezas: "+user.piezas+"-",
      nombreUsuario: user.usuarioContexto,
      fechaCompra: "",
      datosEnvio:user.lugar,
      estado: "En espera",
      envioCosto:user.envio,
      costoProducto:user.precio-user.envio,
      total: user.precio,
    });
  });
  const handleClick =async () => {
    try{
      const res=await fetch(APIVENTAS,{
        method:'post',
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify(venta),
      });
      if (res.ok) {
        // La solicitud se completó con éxito
        // alert('Usuario creado con éxito');
        setPagoRealizado(true);
      } else {
        // alert("entro")
    // La solicitud no se completó con éxito
    // alert('Error al crear la compra');
    setErrorApi(true);
  }
}
catch(err){
  // alert("no se cargo");
}
   
  }
  useEffect(()=>{
    if(user.usuarioContexto===""){
    navigate("/login");
    }
        });
  return (<>
    <HeaderPink />
    <div className="contenedorMetodoPago">
      <Etiqueta textoP={textos.metodosPago} />
      <div className="contenedorMetodoPago2">
        <Etiqueta textoP={textos.transferencia} />
        <div className="conceptoPago-Pago">
          <Etiqueta textoP={textos.cuneta} />
          <Etiqueta textoP={textos.noCuneta} />
        </div>
        <div className="conceptoPago-Pago">
          <Etiqueta textoP={textos.conceptoPago} />
          <Etiqueta textoP={randomNumber} />
        </div>
        <div className="conceptoPago-Pago">
          <Etiqueta textoP={textos.cantidadPagar} />
          <Etiqueta textoP={user.precio} />
        </div>
        <Boton className="botonContinuarPedido" onClick={() => handleClick()} textoBoton={textos.textoBotones.realizoTransferencia} />
        {pagoRealizado && (
          <div>
            <Alerta textoP={textos.mensajePagoRealizado} textoLink={textos.textoBotones.ok} onClick={() => setPagoRealizado(false) + navigate("/comprar")} />
          </div>
        )}
        {errorApi&&(

          <div>
        <Alerta textoP={textos.errorCompra} textoLink={textos.textoBotones.ok}/>
       </div>
    )}
      </div>

    </div>
  </>);
}
export default Pago;
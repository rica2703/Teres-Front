
import VerPedidos from "./verPedidos";
import AsignarFechaPedido from "../moleculas/asignarFechapedido";
import HeaderPink from "../atomos/headerPink";
import Boton from "../atomos/boton";
import textos from "../../js/main";
import css from "../../style/main.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "../moleculas/alerta";
const ApiVentas = `http://localhost:8080/api/ventas/`;
// const APIPRODUCTOS=`http://localhost:8080/api/productos/`;
function AprobarPedidos() {
    const navigate=useNavigate();
    const[alertaRechazo,setAlertaRechazo]=useState(false);
    const [mostAlert,setMostAlert]=useState(false);
    const [conceptoPago,setConceptoPago]=useState("");
    const [estatus, setEstatus] = useState("Preparando");
    const [urlImagen,setUrlImagen] = useState("");
    const [codigoProducto,setCodigoProducto] = useState("");
    const [nombreProducto,setnombreProducto] = useState("");
    const [especificaciones,SetEspecificaciones,] = useState("");
    const [nombreUsuario,setNombreUsuario] = useState("");
    const [fecha,SetFecha] = useState("");
    const [datosEnvio,setDatosEnvio] = useState("");
    const [envioCosto,setEnvioCosto] = useState("");
    const [costoProducto,setCostoProducto] = useState("");
    const [total,setTotal] = useState("");

    const [pedido, setPedido] = useState({
        urlImagen: "",
        codigoProductoVendido: "",
        nombreProducto: "",
        especificaciones: "",
        nombreUsuario: "",
        fechaCompra: "",
        datosEnvio: "",
        estado: "",
        envioCosto: "",
        costoProducto: "",
        total: "",

    });

    useEffect(() => {
        setPedido({
            urlImagen: urlImagen,
            codigoProductoVendido: codigoProducto,
            nombreProducto: nombreProducto,
            especificaciones: especificaciones,
            nombreUsuario: nombreUsuario,
            fechaCompra: fecha,
            datosEnvio: datosEnvio,
            estado: estatus,
            envioCosto: envioCosto,
            costoProducto: costoProducto,
            total: total,
        });
    });
    const [pedidos, setPedidos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(ApiVentas);
            const data = await resp.json();
            const pedidosEnEspera = data.filter((pedido) => pedido.estado === 'En espera');
            // alert("entro: "+data.nombreUsuario);

            setPedidos(pedidosEnEspera.slice());
        }
        fetchData();
    }, []);

   
    const handleClickAceptar = async (conceptoPago, urlImagen, codigoProductoVendido, nombreProducto, especificaciones, nombreUsuario, fechaCompra, datosEnvio, envioCosto, costoProducto, total, estado) => {
        setConceptoPago(conceptoPago);
        setUrlImagen(urlImagen);
        setCodigoProducto(codigoProductoVendido);
        setnombreProducto(nombreProducto);
        SetEspecificaciones(especificaciones);
        setNombreUsuario(nombreUsuario);
        SetFecha(fechaCompra);
        setDatosEnvio(datosEnvio);
        setEnvioCosto(envioCosto);
        setCostoProducto(costoProducto);
        setTotal(total);
        setEstatus("Preparando");
        setMostAlert(true);
    }
    const handleClickRechazar = (conceptoPago, urlImagen, codigoProductoVendido, nombreProducto, especificaciones, nombreUsuario, fechaCompra, datosEnvio, envioCosto, costoProducto, total) => {

        setConceptoPago(conceptoPago);
        setUrlImagen(urlImagen);
        setCodigoProducto(codigoProductoVendido);
        setnombreProducto(nombreProducto);
        SetEspecificaciones(especificaciones);
        setNombreUsuario(nombreUsuario);
        SetFecha(fechaCompra);
        setDatosEnvio(datosEnvio);
        setEnvioCosto(envioCosto);
        setCostoProducto(costoProducto);
        setTotal(total);
        setEstatus("Rechazado");
        setAlertaRechazo(true);
    }
    const handleClickRealizado=async()=>{
        // alert("entro")
        try {
            
            // alert(pedido.estado)
            const res = await fetch(ApiVentas + conceptoPago, {
                method: 'put',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(pedido),
            });
            if (res.ok) {
                // La solicitud se completó con éxito
                // alert('Usuario creado con éxito');
                // alert("aceptado con exito");
                setMostAlert(false)
                navigate("/menu-administrador");
            } else {
                // alert("entro")
                // La solicitud no se completó con éxito
                // alert('Error al crear la compra');
                alert("Error probablemente este producto ya fue aceptado, intente de nuevo");
                setMostAlert(false)
                navigate("/menu-administrador");
            }
        }
        catch (err) {
            alert("error al aceptar pedido");
            setMostAlert(false)
            navigate("/menu-administrador");
        }
    }
    const handleClickRealizadoRechazo=async()=>{
        // alert("entro")
        try {
            
            // alert(pedido.estado)
            // alert("concepto rechazo: "+conceptoPago);
            const res = await fetch(ApiVentas + conceptoPago, {
                method: 'put',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(pedido),
            });
            if (res.ok) {
                // La solicitud se completó con éxito
                // alert('Usuario creado con éxito');
                // alert("aceptado con exito");
                setAlertaRechazo(false);
                navigate("/menu-administrador");
            } else {
                // alert("entro")
                // La solicitud no se completó con éxito
                // alert('Error al crear la compra');
                // alert("Error probablemente este producto ya fue aceptado, intente de nuevo");
                setAlertaRechazo(false);
                navigate("/menu-administrador");
            }
        }
        catch (err) {
            alert("no se pudo rechazar el pedido intente de nuevo");
            setAlertaRechazo(false);
            navigate("/menu-administrador");
        }
    }
    return (<>
        <HeaderPink />
        {pedidos.map((pedidos, index) => (
            <VerPedidos botonClaseRechazar="botonRechazarPedido" textoBotonA={textos.textoBotones.aceptar} textoBotonR={textos.textoBotones.rechazar}key={index} src={pedidos.urlImagen} onClickAceptar={() => handleClickAceptar(pedidos.conceptoPago, pedidos.urlImagen, pedidos.codigoProductoVendido, pedidos.nombreProducto, pedidos.especificaciones, pedidos.nombreUsuario, pedidos.fechaCompra, pedidos.datosEnvio, pedidos.envioCosto, pedidos.costoProducto, pedidos.total, pedidos.estado)} onClickRechazar={() => handleClickRechazar(pedidos.conceptoPago, pedidos.urlImagen, pedidos.codigoProductoVendido, pedidos.nombreProducto, pedidos.especificaciones, pedidos.nombreUsuario, pedidos.fechaCompra, pedidos.datosEnvio, pedidos.envioCosto, pedidos.costoProducto, pedidos.total)} nombreP={pedidos.nombreProducto} userName={pedidos.nombreUsuario} precioP={"$" + pedidos.total} />
        ))}
        {mostAlert&&(
        <Alerta  textoP="Pedido Aceptado correctamente" textoLink="ok" onClick={()=>handleClickRealizado()}/>
        )}
        {alertaRechazo&&(
        <Alerta textoP="Pedido rechazado correctamente" textoLink="ok" onClick={()=>handleClickRealizadoRechazo()}/>
        )}
        <AsignarFechaPedido/>
    </>);
}
export default AprobarPedidos;
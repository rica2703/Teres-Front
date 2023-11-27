import textos from "../../js/main";
import VerPedidos from "../organismos/verPedidos";
import FormFechaEntrega from "./formFechaEntrega";
import { useState,useEffect } from "react";
const ApiVentas = `http://localhost:8080/api/ventas/`;
function AsignarFechaPedido(){
    const [pedidos, setPedidos] = useState([]);
    const[fechaInput,setFechaInput]=useState("");
    const[hora,setHora]=useState("");
    const [formulario,setFormulario]=useState(false);
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
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(ApiVentas);
            const data = await resp.json();
            const pedidosEnEspera = data.filter((pedido) => pedido.estado === 'Preparando');
            // alert("entro: "+data.nombreUsuario);

            setPedidos(pedidosEnEspera.slice());
        }
        fetchData();
    }, []);
    const handleClickAceptar=(conceptoPago, urlImagen, codigoProductoVendido, nombreProducto, especificaciones, nombreUsuario, fechaCompra, datosEnvio, envioCosto, costoProducto, total)=>{
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
        // setEstatus("Preparando");
        setFormulario(true);
    }
    const handleClickGuardar=async()=>{
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
                alert("guardado con exito");
                setFormulario(false)
            
            } else {
                // alert("entro")
                // La solicitud no se completó con éxito
                // alert('Error al crear la compra');
                alert("Error probablemente este producto ya no existe, intente de nuevo");
                setFormulario(false)
               
            }
        }
        catch (err) {
            alert("error al crear fecha de entrega");
            setFormulario(false)
           
        }
        setFormulario(false);
    }
    const handlerChangeTime=(e)=>{setHora(e.target.value);}
    const handlerChangeDate=(e)=>{setFechaInput(e.target.value);}
    useEffect(()=>{
        setEstatus("Día de entrega: "+fechaInput+" Hora: "+hora);
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
    return(<>
    <div className="pedidosPreparacion">
      <p>{textos.pedidosTitulo}</p>
    </div>
     {pedidos.map((pedidos, index) => (
            <VerPedidos botonClaseRechazar="ocultarBoton" textoBotonA={textos.textoBotones.asignarDiaEntrega} key={index} src={pedidos.urlImagen} onClickAceptar={() => handleClickAceptar(pedidos.conceptoPago, pedidos.urlImagen, pedidos.codigoProductoVendido, pedidos.nombreProducto, pedidos.especificaciones, pedidos.nombreUsuario, pedidos.fechaCompra, pedidos.datosEnvio, pedidos.envioCosto, pedidos.costoProducto, pedidos.total, pedidos.estado)} onClickRechazar={() => handleClickRechazar(pedidos.conceptoPago, pedidos.urlImagen, pedidos.codigoProductoVendido, pedidos.nombreProducto, pedidos.especificaciones, pedidos.nombreUsuario, pedidos.fechaCompra, pedidos.datosEnvio, pedidos.envioCosto, pedidos.costoProducto, pedidos.total)} nombreP={pedidos.nombreProducto} userName={pedidos.nombreUsuario} precioP={"$" + pedidos.total} />
        ))}
        {formulario&&(
        <FormFechaEntrega onChangeTime={handlerChangeTime} onChangeDate={handlerChangeDate} onClick={()=>handleClickGuardar()}/>
        )}
        {/* <p>{"hora: "+hora}</p> */}
    </>);
}
export default AsignarFechaPedido;
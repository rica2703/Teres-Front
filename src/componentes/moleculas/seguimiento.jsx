import Etiqueta from "../atomos/etiqueta";
import HeaderPink from "../atomos/headerPink";
import css from '../../style/main.css';
import Rastrear from "./Rastrear";
import textos from "../../js/main";
const ApiVentas = `http://localhost:8080/api/ventas/`;
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import userContext from "../../context/userContext";
import { useContext } from "react";
function Seguimiento(){
    const navigate=useNavigate();
    const { user, setUser } = useContext(userContext);
    const [pedidos, setPedidos] = useState([]);
    const [pedidos2,setPedidos2]=useState([]);
    const [pedidos3,setPedidos3]=useState([]);
    const[color,setColor]=useState("");
    const [estado,setEstado]=useState("");
    const color1="opcion1"; const circulo1="circuloOpcion1";
    const color2="opcion2"; const circulo2="criculoOpcion2";
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(ApiVentas);
            const data = await resp.json();
            const pedidosPreparando = data.filter((pedido) => pedido.estado === 'Preparando'&&pedido.nombreUsuario===user.usuarioContexto);
            const pedidosEnEspera=data.filter((pedido)=>pedido.estado==='En espera'&&pedido.nombreUsuario===user.usuarioContexto);
            const pedidoEntrega=data.filter((pedido)=>pedido.estado!=='En espera'&&pedido.estado!=='Rechazado'&&pedido.estado!=='Preparando'&&pedido.nombreUsuario===user.usuarioContexto);
            // alert("entro: "+data.nombreUsuario);
            setPedidos2(pedidosEnEspera.slice());
            setPedidos(pedidosPreparando.slice());
            setPedidos3(pedidoEntrega.slice());

        }
        fetchData();
    }, []);
    useEffect(()=>{
if(user.usuarioContexto===""){
navigate("/login");
}
    });
    const handleClick=(estado)=>{
       
    }
    return(<>
    <HeaderPink/>
    <br /><br /><br />
    <div className="centrarSeguimiento">
        {pedidos2.map((ped1,index)=>(  
            <Rastrear textoP={ped1.nombreProducto} src={ped1.urlImagen} opcion1="opcion1" opcion2="opcion2" opcion3="opcion2" circuloOpcion1="circuloOpcion1" circuloOpcion2="circuloOpcion2" circuloOpcion3="circuloOpcion2" textoEntrega={textos.proceso3+" "+ped1.estado} />     
        ))}
    {pedidos.map((pedidos, index) => (
      <Rastrear key={index} textoP={pedidos.nombreProducto} src={pedidos.urlImagen} opcion1="opcion1" opcion2="opcion1" opcion3="opcion2" circuloOpcion1="circuloOpcion1" circuloOpcion2="circuloOpcion1" circuloOpcion3="circuloOpcion2" textoEntrega={textos.proceso3+" "+pedidos.estado}/>
        ))}
         {pedidos3.map((ped3, index) => (
      <Rastrear key={index}textoP={ped3.nombreProducto} src={ped3.urlImagen} opcion1="opcion1" opcion2="opcion1" opcion3="opcion1" circuloOpcion1="circuloOpcion1" circuloOpcion2="circuloOpcion1" circuloOpcion3="circuloOpcion1" textoEntrega={textos.proceso3+" "+ped3.estado}/>
      ))}
        {/* <p>{"estado: "+pedidos[0].estado}</p> */}
    </div>
    </>);
}
export default Seguimiento;
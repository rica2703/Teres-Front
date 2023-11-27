import Header from "../moleculas/header";
import Etiqueta from "../atomos/etiqueta";
import textos from "../../js/main";
import css from '../../style/main.css';
import Input from "../atomos/input";
import Boton from "../atomos/boton";
import userContext from "../../context/userContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ApiProductos = `http://localhost:8080/api/productos/`;
function Pedido() {
    const navigate=useNavigate();
    const { user,setUser } = useContext(userContext);
    const idProducto = user.pedido;
    const [numeroValidado, setNumeroValidado] = useState(false);
    const [color, setColor] = useState("Por defecto");
    // alert(idProducto);
    const [productos, setProductos] = useState({});
    const [cantidadRosas, setCantidadRosas] = useState("Por defecto");
    const [claseInput, setClaseInput] = useState("inputCantidadFloresPedido");
    const regex = /^[0-9]+$/;
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(ApiProductos + idProducto);
            const data = await resp.json();
            setProductos(data);
        }
        fetchData();
    }, {});
    const handleColor1 = () => {
        setColor("Rojo");
    }
    const handleColor2 = () => {
        setColor("Amarillo");
    }
    const handleColor3 = () => {
        setColor("Azul");
    }
    const handleColor4 = () => {
        setColor("Rosa");
    }
    const handleColor5 = () => { }

    useEffect(() => {


        if (regex.test(cantidadRosas)) {
            setClaseInput("inputCantidadFloresPedido");
            setNumeroValidado(false);
            if (parseInt(cantidadRosas) < 1) {
                setNumeroValidado(true);
                setClaseInput("inputError");
            }
            else {
                setNumeroValidado(false);
            }
        }

        else if (cantidadRosas === "Por defecto") {
            setNumeroValidado(false);
        } else {
            setNumeroValidado(true);
            setClaseInput("inputError");
        }



    }, [cantidadRosas]);
    const onChangeCantidad = (e) => {
        setCantidadRosas(e.target.value);
    }

    const handleClickPagar = () => {
        if (numeroValidado === true) {
            alert("No puedes pagar por que no has seleccionado el color o la cantidad de rosas que quieres")
        }
        else {
            setUser({
                usuarioContexto:user.usuarioContexto,
                pedido: user.pedido,
                color: color,
                piezas: cantidadRosas,
                nombrePedido:productos.nombreP,
                urlContexto:productos.urlImagen,
                precio:productos.precioUnitario,
            });
            // alert("usuario pagina pedido: "+user.usuarioContexto);
            // alert("compra exitosa"+user.pedido+" "+user.color+" "+user.piezas);
            navigate("/detallePedido");
        }
    }
    useEffect(()=>{
        if(user.usuarioContexto===""){
        navigate("/login");
        }
            });
    return (<>
        <Header />
        <div className="contenedorPedido">
            <div className="pedido">

                <div className="pedidoDivStart">
                    {/* personaliza producto */}
                    <Etiqueta className="nombrePedido" textoP={textos.noFlores} />
                    <Input onChange={onChangeCantidad} type="number" className={claseInput} placeholder={cantidadRosas} />
                    {numeroValidado ?
                        <p className="textoError">{textos.errorInput}</p> : <p></p>
                    }
                    <Etiqueta classname="" textoP={textos.color} />
                    <div className="divBotonesColores">
                        <Boton onClick={() => handleColor1()} className="botonRojo" />
                        <Boton onClick={() => handleColor2()} className="botonAmarillo" />
                        <Boton onClick={() => handleColor3()} className="botonAzul" />
                        <Boton onClick={() => handleColor4()} className="botonRosa" />
                    </div>
                    <br />
                </div>
                <div className="pedidoDivCenter">
                    {/* aqui va la imagen */}
                    <img className="imagenPedido" src={productos.urlImagen} alt="not found" />
                    <Boton className="botonContinuarPedido" onClick={() => handleClickPagar()} textoBoton={textos.textoBotones.continuar} />
                </div>
                <div className="pedidoDivEnd">
                    {/* nombre del producto */}
                    <Etiqueta className="nombrePedido" textoP={productos.nombreP} />
                </div>
            </div>
            <footer></footer>
        </div>
    </>);
}
export default Pedido;
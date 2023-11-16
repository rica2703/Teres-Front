import HeaderPink from "../atomos/headerPink";
import Boton from "../atomos/boton";
import Etiqueta from "../atomos/etiqueta";
import Input from '../atomos/input';
import textos from "../../js/main";
import DetalleProducto from "../moleculas/DetalleProducto";
import { Label } from "reactstrap";
import { useState } from "react";
import OpcionLista from "../moleculas/opcionLista";
function DetallePedido() {
    const [nombreUbi,setNombreUbi]=useState("");
    const [precio,setPrecio]=useState("0");
    const [opciones,setOpciones]=useState(false);
    const opcion1=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar1);
    }
    const opcion2=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar2);
    }
    const opcion3=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar3);
    }
    const opcion4=()=>{
        setOpciones(false);
        setNombreUbi(textos.textoBotones.lugar4);
    }
    return (<>
        <HeaderPink />
        <div className="contenedorDetallePedido">
            {/* <div className="contenedorDetallePedido1">
                <img className="imagenDetallePedido" src="" alt="Not-Found" />
                <Etiqueta textoP={textos.ramoDe} />
                <Etiqueta textoP={textos.pzs} />
                <Etiqueta textoP="{textoContenedorProducto[0].precio1}" />
            </div> */}
            <DetalleProducto/>
            <div className="contenedorDetallePedido2">
                <div className="tituloDetallesPedido">
                    <Etiqueta textoP={textos.detalles} />
                </div>
                <div className="detallePedido2">

                    <div className="detallePedido2Left">
                        <Etiqueta textoP={textos.orden} />
                        <Etiqueta textoP={textos.envio} />
                        <Etiqueta textoP={textos.total} />

                    </div>
                    <div className="detallePedido2right">
                        <Etiqueta textoP={"$"+"100"} />
                        <Etiqueta textoP={"$"+precio} />
                        <Etiqueta textoP="$150" />

                    </div>
                </div>
            </div>
            <div className="ubicacion">
                <Etiqueta textoP={textos.ubicacion}/>
                <Etiqueta textoP={nombreUbi}/>
                <Boton onClick={()=>setOpciones(true)} className="botonUbicacion" />
            </div>
            <Boton className="botonRealizarPedido" textoBoton={textos.textoBotones.realizarPedido} />
        </div>
            {opciones&&
            <OpcionLista onClick1={opcion1} onClick2={opcion2} onClick3={opcion3} onClick4={opcion4}/>
            }
    </>);
}
export default DetallePedido;
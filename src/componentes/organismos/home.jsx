import Header from "../moleculas/header";
import Carrucel from "../moleculas/carrucel";
import Boton from "../atomos/boton";
import css from '../../style/main.css'
import textos from "../../js/main";
import { useState } from "react";
import Alerta from "../moleculas/alerta";
function Home(){
    const [conCuenta,setConCuenta] = useState(false);

    return(
        <>
        <Header/>
        <div className="portada">

            </div>
            <div className='contenedorBotonC'>
                {/* <Boton className="botonComprar" onClick={() => setConCuenta(true)} textoBoton={textos.textoHeader.comprar} /> */}
            </div>
                {conCuenta && (
                    <div>
                        <Alerta textoLink={textos.botonIniciarHeader} to={"/login"} onClick={() => setConCuenta(false)} textoP={textos.mensajeIniciarHeader}/>
                    </div>
                )}
                <br />
        <Carrucel onClick={()=>setConCuenta(true)}/>
        </>
    );
}
export default Home;
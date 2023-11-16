import HeaderPink from "../atomos/headerPink";
import Etiqueta from "../atomos/etiqueta";
import Boton from "../atomos/boton";
import css from '../../style/main.css'
import textos from "../../js/main";
import { useState,useEffect } from "react";
function Pago(){
    const [randomNumber, setRandomNumber] = useState(null);
    useEffect(() => {
        // Generar un número aleatorio de 6 dígitos al cargar la página
        setRandomNumber(generateRandomNumber());
      }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, equivalente a componentDidMount en clases.
    
      function generateRandomNumber() {
        // Generar un número aleatorio de 6 dígitos
        return Math.floor(100000 + Math.random() * 900000);
      }
    return(<>
    <HeaderPink/>
    <div className="contenedorMetodoPago">
        <Etiqueta textoP={textos.metodosPago}/>
        <div className="contenedorMetodoPago2">
            <Etiqueta textoP={textos.transferencia}/>
            <div className="conceptoPago">
            <Etiqueta textoP={textos.conceptoPago}/>
            <Etiqueta textoP={randomNumber}/>
            </div>
            <Boton className="botonAceptar" textoBoton={textos.textoBotones.aceptar}/>
        </div>
    </div>
    </>);
}
export default Pago;
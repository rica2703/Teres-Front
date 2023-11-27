import Boton from "../atomos/boton";
import Input from "../atomos/input";
import textos from "../../js/main";
import Etiqueta from "../atomos/etiqueta";
function FormEditCreate(props) {
    return (<>
        <div className="alertaForm">
            <div className="alertaCuadroForm">
                {/* <div className="marginAlerta"> */}
                    <Etiqueta textoP="id" />
                    <Input className="inputCantidadFloresPedido" onChange={props.onChangeId} placeholder={props.idInput} readOnly={props.readOnly} />
                    <Etiqueta textoP="nombre del producto" />
                    <Input className="inputCantidadFloresPedido" onChange={props.onChangeNombre} placeholder={props.nombreInput} />
                    <Etiqueta textoP="url de imagen" />
                    <Input className="inputCantidadFloresPedido" onChange={props.onChangeUrl} type="text" placeholder={props.urlInput} />
                    <Etiqueta textoP="descripcion" />
                    <Input className="inputCantidadFloresPedido" onChange={props.onChangeDescripcion} placeholder={props.descripcionInput} />
                    <Etiqueta textoP="precio" />
                    <Input className="inputCantidadFloresPedido" onChange={props.onChangePrecio} placeholder={props.precioInput} />
                    <Boton className="botonContinuarPedido" onClick={props.onClick} textoBoton={textos.textoBotones.guardar} />
                {/* </div> */}
            </div>
        </div>
    </>)
}
export default FormEditCreate;
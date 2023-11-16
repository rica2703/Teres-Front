function Boton(props){
    return(
        <button type={props.type} className={props.className} onClick={props.onClick}onBlur={props.onBlur} onChange={props.onChange}>{props.textoBoton}</button>
    );
}
export default Boton;
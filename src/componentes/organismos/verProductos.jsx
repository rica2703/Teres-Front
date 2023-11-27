import HeaderPink from "../atomos/headerPink";
// import Producto from "../moleculas/producto";
import EditProduct from "../moleculas/editProduct";
import textos from "../../js/main";
import FormEditCreate from "../moleculas/formEditarCrear";
import Boton from "../atomos/boton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../../context/userContext";
const ApiProductos = `http://localhost:8080/api/productos/`;
function VerProductos(props) {
  const navigate=useNavigate();
  const {user,setUser}=useContext(userContext);
  const [productos, setProductos] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [mostrarAgregar,setMostrarAgregar]=useState(false);
  const [idProducto, setIdProducto] = useState();
  const [url, setUrl] = useState();
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [descripcion, setDescripcion] = useState();
  const [leer, setLeer] = useState();
  const {validar}=props;
  const [insertProducto, setInsertProducto] = useState({
    codigoProducto: "",
    nombreP: "",
    urlImagen: "",
    descripcion: "",
    precioUnitario: "",

  });
  useEffect(()=>{
    if(user.usuarioContexto===""){
    navigate("/login");
    }
        });
  const regex = /^[0-9]+$/;
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(ApiProductos);
      const data = await resp.json();
      setProductos(data.slice());
      // alert("funciona");
      // if (user.usuarioContexto === "" && user.contraseñaContexto === "") {
      //   navigate("/login");
      // }
      // else {
      //   setUser({
      //     usuarioContexto: user.usuarioContexto,
      //     contraseñaContexto: user.contraseñaContexto
      //   });
      //   // alert(user.usuarioContexto);
      //   navigate("/comprar");
      // }
    }
    fetchData();
  }, []);
  useEffect(() => {
    
    // alert("nombre"+insertProducto.id);
    if (regex.test(idProducto)) {
      setLeer("readOnly");
    }
    else {
      setLeer("");
    }
    setInsertProducto({
      codigoProducto: idProducto,
      nombreP: nombre,
      urlImagen: url,
      descripcion: descripcion,
      precioUnitario: precio,
    });
  });
  const handleClick = (codigoProducto, urlImagen, nombreP, descripcion, precioUnitario) => {
    setIdProducto(codigoProducto);
    setUrl(urlImagen);
    setNombre(nombreP);
    setDescripcion(descripcion);
    setPrecio(precioUnitario);
    setMostrarForm(true);
  }
  const handleClickGuardar = async() => {
    try{
      const res=await fetch(`${ApiProductos}/${idProducto}`,{
        method:'put',
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify(insertProducto),
      });
      if (res.ok) {
        // La solicitud se completó con éxito
        // alert('Usuario creado con éxito');
        setMostrarForm(false);
      } else {
        // alert("entro")
    // La solicitud no se completó con éxito
    // alert('Error al crear la compra');
    alert("se genero error al guardar el producto");
  }
}
catch(err){
  // alert("no se cargo");
}
   
  }
  const onChangeId = (e) => {
    setIdProducto(e.target.value);
  }
  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  }
  const onChangeUrl = (e) => {
    setUrl(e.target.value);
  }
  const onChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  }
  const onChangePrecio = (e) => {
    setPrecio(e.target.value);
  }


  const handleClickRemove=async(codigoProducto)=>{
    try{
      const res=await fetch(`${ApiProductos}/${codigoProducto}`,{
        method:'delete',
      });
      if(res.ok){
        alert("eliminado exitosamente id:"+idProducto)
      }
      else{
        alert("error al eliminar producto")
      }
  }
  catch(err){

  }}

  const handleClickAgregarProducto=()=>{
    setMostrarAgregar(true);
  }
  const handleClickCrear=async()=>{
    try{
      const res=await fetch(ApiProductos,{
        method:'post',
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify(insertProducto),
      });
      if (res.ok) {
        // La solicitud se completó con éxito
        // alert('Usuario creado con éxito');
        setMostrarAgregar(false);
        alert("Producto agregado correctamente");
      } else {
        // alert("entro")
    // La solicitud no se completó con éxito
    // alert('Error al crear la compra');
    alert("se genero error al guardar el producto");
  }
}
catch(err){
  // alert("no se cargo");
}
   
  }
  
  return (<>
    <HeaderPink />
    <div className="divBotonAgregarProducto">
      <Boton textoBoton={textos.textoBotones.AgregarProducto} onClick={()=>handleClickAgregarProducto()} className="botonContinuarPedido"/>
    </div>
    <div className='contenedorComponenteProducto'>
      {/* <Navigate to="/login"/> */}
      {productos.map((producto, index) => (
        <EditProduct onClickRemove={()=>handleClickRemove(producto.codigoProducto)} textoBotonEliminar={textos.textoBotones.eliminar} textoBoton={textos.textoBotones.editar} src={producto.urlImagen} textoP={producto.nombreP} onClick={() => handleClick(producto.codigoProducto, producto.urlImagen, producto.nombreP, producto.descripcion, producto.precioUnitario)} textoPrecio={"$" + producto.precioUnitario} />
      ))}
    </div>
    {mostrarForm && (
      <div>
        <FormEditCreate  onChangeId={onChangeId} onChangeNombre={onChangeNombre} onChangeUrl={onChangeUrl} onChangeDescripcion={onChangeDescripcion} onChangePrecio={onChangePrecio} readOnly={leer} idInput={idProducto} nombreInput={nombre} urlInput={url} descripcionInput={descripcion} precioInput={"$" + precio} onClick={() => handleClickGuardar()} />
      </div>
    )}
    {mostrarAgregar && (
      <div>
        <FormEditCreate  onChangeId={onChangeId} onChangeNombre={onChangeNombre} onChangeUrl={onChangeUrl} onChangeDescripcion={onChangeDescripcion} onChangePrecio={onChangePrecio} idInput={idProducto} nombreInput={nombre} urlInput={url} descripcionInput={descripcion} precioInput={"$" + precio} onClick={() => handleClickCrear()} />
      </div>
    )}
  </>);
}
export default VerProductos;
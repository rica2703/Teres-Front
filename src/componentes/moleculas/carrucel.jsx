import React, { useState } from 'react';
import ContenedorProducto from './ContenedorProducto';
import { useEffect } from 'react';

const ApiProductos=`http://localhost:8080/api/productos/`;
function Carrusel() {

const[productoApi,setPorductoApi]=useState();
const [arreglo,setArreglo]=useState([]);
useEffect(()=>{
  async function fetchData(){
    const resp= await fetch(ApiProductos);
    const data=await resp.json();
    setArreglo(data.slice());
    // alert(arreglo.length);
  }
  fetchData();
},[]);
// alert("tamaño del arreglo: "+arreglo.slice())
  // ---------------API-------------------
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 4;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow < 0 ? 0 : prevIndex - itemsToShow));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow >= arreglo.length ? 0 : prevIndex + itemsToShow));
  };

  return (
    
    <div className="carousel">
      {/* {arreglo[0]?<p>{arreglo[0].nombreP}</p>:<p>no cargo</p>
      } */}
      {arreglo[0]?
      <div className="carousel-container">
        {arreglo.slice(currentIndex, currentIndex + itemsToShow).map((producto, index) => (
          <ContenedorProducto key={index} src={producto.urlImagen} textoNombre={producto.nombreP} textoPrecio={producto.precioUnitario} />
        ))}
      </div>:<p>not found</p>
}
      <div className="carousel-navigation">
        <button onClick={goToPrevious}>Anterior</button>
        <span>{`Productos ${currentIndex + 1} - ${currentIndex + itemsToShow} de ${arreglo.length}`}</span>
        <button onClick={goToNext}>Siguiente</button>
      </div>
    </div>
  );
}

export default Carrusel;


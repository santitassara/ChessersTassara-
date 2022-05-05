import React from "react"
import { toast } from "react-toastify"


/* --------------- Declaro functional component -------------- */

export default function AddButton() {

  /* ----------------------- Declaro state hook ----------------------- */
  const [count,setCount] = React.useState(1)
  const stock = 5
 /* -------------- Declaro un Efecto sobre la cuenta ------------- */
  // React.useEffect(()=>{
  //   if (count!==1){
  //     toast.info('Cambiaste el stock del producto', {
  //       position: "bottom-left",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //   }
  // },[count])
 /* -------------------- Funcion para aumentar la cantidad ------------------- */
  const onAdd= ()=>{
    if(count < stock){
    setCount(count + 1)
   }
  }

  /* ------------------- Funcion para disminuir la cantidad ------------------- */
  const onDecrease = ()=>{
    if(count > 1){
      setCount(count - 1)
    }
  }

  /* ---------------------- Funcion de Agregar al carrito --------------------- */
  const onSubmit = ()=>{
    toast.success(`Agregaste ${count} unidades al carrito`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }
  
/* ------------------------- Componente presentacion ------------------------ */
  const StockButton = ({handleOnClick, text}) =>{
    return <button className="stockButton" onClick={handleOnClick}> {text} </button>
    
  }

  /* ------------------------- Componente presentacion ------------------------ */
  const AddButton = ({handleOnSubmit}) => {
    return<button className="addButton" onClick={handleOnSubmit}>Añadir al carrito</button>
    
  }


  return(
    <div className="addButtonContainer">
      <StockButton text="-" handleOnClick={onDecrease}/>
      <span className="addButtonCount">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
       <AddButton handleOnSubmit={onSubmit} /> 
    </div>
  )
}
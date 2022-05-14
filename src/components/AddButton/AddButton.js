import React from "react"
import  Buttons  from "../Button/Button"
import { toast } from "react-toastify"


/* --------------- Declaro functional component -------------- */

export default function AddButton({stock}) {

  /* ----------------------- Declaro state hook ----------------------- */
  const [count,setCount] = React.useState(1)
 
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
  console.log(stock)
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
    //alert(cuenta)
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
  
return(
  
    <Buttons  suma={onAdd} resta={onDecrease} cuenta={count} onSubmit={onSubmit}/> 
    
  
)

}
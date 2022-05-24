import React from "react"
import  Buttons  from "../Button/Button"
import { CartContext } from "../../context/CartContext"


/* --------------- Declaro functional component -------------- */

export default function AddButton({stock,onSubmit,cuenta,setCount}) {

  /* ----------------------- Declaro state hook ----------------------- */

 
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
    if(cuenta < stock){
    setCount(cuenta + 1)
   }
  }

  /* ------------------- Funcion para disminuir la cantidad ------------------- */
  const onDecrease = ()=>{
    if(cuenta > 1){
      setCount(cuenta - 1)
    }
  }
  
  

  
/* ------------------------- Componente presentacion ------------------------ */
  
return(
  
    <Buttons  suma={onAdd} resta={onDecrease} cuenta={cuenta} onSubmit={onSubmit}/> 
    
  
)

}
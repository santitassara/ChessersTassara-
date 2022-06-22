import React from "react"
import  Buttons  from "../Button/Button"




export default function AddButton({stock,onSubmit,cuenta,setCount}) {


  const onAdd= ()=>{
    if(cuenta < stock){
    setCount(cuenta + 1)
   }
  }

  const onDecrease = ()=>{
    if(cuenta > 1){
      setCount(cuenta - 1)
    }
  }
  
return(
  
    <Buttons  suma={onAdd} resta={onDecrease} cuenta={cuenta} onSubmit={onSubmit}/> 
    
  
)

}
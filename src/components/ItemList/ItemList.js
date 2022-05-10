
import React from "react"
import Item from "../item/item"


export default function ItemList({producto}){

  
console.log(producto)
  

  return(
    
    <div className="items">
      {producto.map((producto)=><Item producto={producto} key={producto.id}/>)}
    </div>

  )
}
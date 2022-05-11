
import React from "react"
import Item from "../item/item"


export default function ItemList({producto,onSubmit,count}){

  
console.log(producto)
  

  return(
    
    <div className="items">
      {producto.map((producto)=><Item producto={producto} key={producto.id} onSubmit={onSubmit}count={count}/> )}
    </div>

  )
}
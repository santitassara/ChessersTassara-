
import React from "react"
import Item from "../item/item"


export default function ItemList({producto,onSubmit}){

  
console.log(producto)


  return(
    
    <div className="items" style={{height:"90vh"}}>
      {producto.map((producto)=><Item producto={producto} key={producto.id} onSubmit={onSubmit}/> )}
    </div>

  )
}
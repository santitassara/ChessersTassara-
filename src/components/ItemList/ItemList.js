
import React from "react"
import Item from "../item/item"


export default function ItemList({producto,onSubmit}){


  return(
    
    <div style={{display:"flex",
      justifyContent: "space-between",
      flexWrap:"wrap",
      padding:"20px",height: producto.length < 5 ? "80vh":"100%"}}>
      
      {producto.map((producto)=><Item producto={producto} key={producto.id} onSubmit={onSubmit}/> )}
    </div>

  )
}
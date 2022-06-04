

import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import ItemListContainer from "../../components/ItemsListContainer/ItemListContainer";
import { useParams } from "react-router-dom"
import Item from "../../components/item/item";
import { CartContext } from "../../context/CartContext";
import { Alert } from "react-bootstrap";

export default function Cart(producto,onSubmit){
  
  const carrito = React.useContext(CartContext)
  console.log(carrito)
  console.log(carrito.cart.map((cuant)=>cuant.quantity))

  const cantidad = carrito.cart.map((cuant)=>cuant.quantity)
  console.log(cantidad)

  

  return(
    <div>
    <h1 style={{textAlign:"center"}}>Carrito</h1>
    <div style={{height:"80vh",display:"flex",justifyContent:"center", flexDirection:"row"}}>
      
      
      { carrito.cart.length > 0 ? carrito.cart.map((producto)=><Item producto={producto} id={producto.id} onSubmit={()=>carrito.removeFromCart(producto.id)} quantity={producto.quantity}/> ):<h1>No agregaste artículos</h1>}
      {/* { carrito.cart.length > 0 ? carrito.cart.map((producto)=><span>{producto.quantity}</span> ):<h1></h1>} */}
    </div>
    </div>
  )
}
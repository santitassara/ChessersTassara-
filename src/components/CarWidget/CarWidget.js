import React from "react";
import Cart from "../../views/Cart/Cart";
import { CartContext } from "../../context/CartContext";

export default function CartWidget(){
  const { cart } = React.useContext(CartContext)
  
  console.log(cart.map((cuant)=>cuant.quantity))

  const r = cart.map((cuant)=>cuant.quantity)
  console.log(r.map((bent)=>bent))
  //const o = 

  return(
    <div style={{display:"flex",flexDirection:"row-reverse", alignItems:"center"}}>
      <img src="../img/CartWidget.png" alt="Carrito" style={{height:"60px",marginRight:"20px"}} />
      
      {(cart.length === 0)? <span className="badge" >0</span>:<span className="badge">{r.reduce((total, currentValue) => total = total + currentValue)}</span>}
      
    </div>
  )
}
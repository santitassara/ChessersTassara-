import React from "react";
import Cart from "../../views/Cart/Cart";
import { CartContext } from "../../context/CartContext";

export default function CartWidget(){
  const { cart } = React.useContext(CartContext)
  
  

  const r = cart.map((cuant)=>cuant.quantity)
 


  return(
    <div style={{display:"flex",flexDirection:"row-reverse", alignItems:"center"}}>
      <img src="../img/CartWidget.png" alt="Carrito" style={{height:"50px",marginRight:"20px",marginTop:"15px"}} />
      
      {(cart.length === 0)? <span className="badge" ></span>:<span className="badge">{r.reduce((total, currentValue) => total = total + currentValue)}</span>}
      
    </div>
  )
}
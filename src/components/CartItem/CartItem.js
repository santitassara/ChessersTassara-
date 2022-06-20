import{Table,Button,Container,Alert} from "react-bootstrap"
import Item from "../../components/item/item";
import { CartContext } from "../../context/CartContext";
import React from "react";


export default function CartItem(producto,onSubmit,handleOnQuantity,handleAlert){
  const carrito = React.useContext(CartContext)
  
  const CartButton = ({handleOnQuantity, text}) =>{
  return <Button className="stockButton" onClick={handleOnQuantity}> {text} </Button> 
  }

  const b =carrito.cart.map((cuant)=>cuant.quantity)
  
  const e = b.map((cuant)=>cuant)
 
  const c = carrito.cart.map((cuant)=>cuant.igual)
  const d = c.map((cuant)=>cuant)
  
  return(
    
    <Table className="borde">
  <tbody style={{borderStyle:"none"}}>
    <tr style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <td><Button onClick={()=>carrito.removeFromCart(producto.id)}>X</Button></td>
      <td><img src={producto.producto.image} alt="productImg"style={{height:"100px"}}></img></td>
      <td style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"150px"}}><CartButton  text="-" handleOnQuantity={()=>{carrito.handleQuantity(producto.id);carrito.handleAlert(producto.id)}}/>
      {producto.quantity}
      <CartButton text="+" handleOnQuantity={()=>{carrito.handleQuantitySum(producto.id);carrito.handleAlert(producto.id)}}/></td>
      { producto.producto.igual === true &&  <span style={{color:"red",textAlign:"center"}} > Stock máximo alcanzado</span>}
      <td style={{fontSize:"23px",width:"100px"}}>${producto.producto.precio * producto.quantity}</td>
    </tr>
  </tbody>
</Table>

  )
}
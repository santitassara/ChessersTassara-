import{Table,Button,Container} from "react-bootstrap"
import Item from "../../components/item/item";
import { CartContext } from "../../context/CartContext";
import React from "react";




export default function CartItem(producto,onSubmit,handleOnQuantity){
  const carrito = React.useContext(CartContext)
  const CartButton = ({handleOnQuantity, text}) =>{
  return <Button className="stockButton" onClick={handleOnQuantity}> {text} </Button>
  
  }

  

  const b =carrito.cart.map((cuant)=>cuant.quantity)
  console.log(b)
  return(
    
    <Table className="borde">
  <tbody style={{borderStyle:"none"}}>
    <tr style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <td><Button onClick={()=>carrito.removeFromCart(producto.id)}>X</Button></td>
      <td><img src={producto.producto.image} style={{height:"100px"}}></img></td>
      <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between",width:"130px" , alignItems:"center"}}>
        <CartButton text="-" handleOnQuantity={()=>carrito.handleQuantity(producto.id)}/>
        <td >{producto.quantity}</td>
        <CartButton text="+" handleOnQuantity={()=>carrito.handleQuantitySum(producto.id)}/>
      </div>
      <td style={{fontSize:"23px",width:"100px"}}>${producto.producto.precio * producto.quantity}</td>
    </tr>
  </tbody>
</Table>

  )
}
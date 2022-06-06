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
  console.log(e)
  const c = carrito.cart.map((cuant)=>cuant.igual)
  const d = c.map((cuant)=>cuant)
  

  console.log(d)
  console.log(c)
  
  
  
  

  return(
    
    <Table className="borde">
  <tbody style={{borderStyle:"none"}}>
    <tr style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <td><Button onClick={()=>carrito.removeFromCart(producto.id)}>X</Button></td>
      <td><img src={producto.producto.image} style={{height:"100px"}}></img></td>
      <div style={{display:"flex", width:"350px",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between",width:"130px" , alignItems:"center"}}>
          <CartButton text="-" handleOnQuantity={()=>{carrito.handleQuantity(producto.id);carrito.handleAlert(producto.id)}}/>
          <td >{producto.quantity}</td>
          <CartButton text="+" handleOnQuantity={()=>{carrito.handleQuantitySum(producto.id);carrito.handleAlert(producto.id)}}/>
          
          
        </div>
        { producto.producto.igual === true &&  <span style={{color:"red",textAlign:"center"}} > Stock máximo alcanzado</span>}
        
      </div>  
      <td style={{fontSize:"23px",width:"100px"}}>${producto.producto.precio * producto.quantity}</td>
    </tr>
  </tbody>
</Table>

  )
}
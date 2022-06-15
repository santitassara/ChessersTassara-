

import React from "react";
import{Table,Button,Container, Nav} from "react-bootstrap"
import ItemList from "../../components/ItemList/ItemList";
import ItemListContainer from "../../components/ItemsListContainer/ItemListContainer";
import { useParams,Link } from "react-router-dom"
import Item from "../../components/item/item";
import { CartContext } from "../../context/CartContext";
import { Alert } from "react-bootstrap";
import CartItem from "../../components/CartItem/CartItem";

export default function Cart(producto,onSubmit){

  const carrito = React.useContext(CartContext)
  console.log(carrito.cart )
  console.log(carrito.cart.map((cuant)=>cuant.quantity))

  const cantidad = carrito.cart.map((cuant)=>cuant.quantity)
  console.log(cantidad)
  console.log(carrito.cart.length)
  const r = carrito.cart.map((producto)=>producto.quantity)
 const b= carrito.cart.map((producto)=>producto.precio * producto.quantity)
 

  return(
    <Container  >
    <div style={{height: carrito.cart.length < 5 && "80vh",margin:"50px" }}>
    <h1 style={{textAlign:"center"}}>Carrito</h1>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>


      {/* { carrito.cart.length > 0 ? carrito.cart.map((producto)=><Item producto={producto} id={producto.id} onSubmit={()=>carrito.removeFromCart(producto.id)} quantity={producto.quantity}/> ):<h1>No agregaste artículos</h1>} */}
      {/* { carrito.cart.length > 0 ? carrito.cart.map((producto)=><span>{producto.quantity}</span> ):<h1></h1>} */}
      {  carrito.cart.length > 0 ? carrito.cart.map((producto)=><CartItem producto={producto} id={producto.id} onSubmit={()=>carrito.removeFromCart(producto.id)} quantity={producto.quantity} /> ):
       <div style={{display:"flex" ,flexDirection:"column", alignItems:"center"}}><h1 style={{marginTop:"20vh"}}>No agregaste artículos</h1><Link to="/products" >Agrega uno ahora! </Link>
      </div>} 
      {  carrito.cart.length > 0 &&<Table style={{display:"flex",justifyContent:"flex-end"}}>
        <tbody>
          <tr>  <td  style={{fontSize:"30px"}}>{`Total: $ ${b.reduce((total, currentValue) => total = total + currentValue  )}`}</td>
          </tr>
        </tbody>
      </Table>}
        <div style={{display:"flex",flexDirection:"column-reverse",alignItems:"center",height:"100px", justifyContent:"space-evenly"}}>
          {carrito.cart.length > 0 && <Button variant="danger" onClick={()=>carrito.deleteAll()} >Borrar todo</Button>}
          {carrito.cart.length > 0 && <Link to="/checkout" ><Button variant="success" className="ButtonEndBuy" >Terminar mi compra</Button></Link>}
        </div>
      {/* (<Button style={{width:"200px",margin:"10px"}}>Agregar mas productos</Button> ) */}
    </div>
    </div>
    </Container>
  )
}
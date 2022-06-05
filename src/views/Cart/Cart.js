

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
  console.log(carrito)
  console.log(carrito.cart.map((cuant)=>cuant.quantity))

  const cantidad = carrito.cart.map((cuant)=>cuant.quantity)
  console.log(cantidad)
  console.log(carrito.cart.length)



  return(
    <Container style={{ }} >
    <div>
    <h1 style={{textAlign:"center"}}>Carrito</h1>
    <div style={{height:"80vh",display:"flex", flexDirection:"column", alignItems:"center"}}>


      {/* { carrito.cart.length > 0 ? carrito.cart.map((producto)=><Item producto={producto} id={producto.id} onSubmit={()=>carrito.removeFromCart(producto.id)} quantity={producto.quantity}/> ):<h1>No agregaste artículos</h1>} */}
      {/* { carrito.cart.length > 0 ? carrito.cart.map((producto)=><span>{producto.quantity}</span> ):<h1></h1>} */}
      {  carrito.cart.length > 0 ? carrito.cart.map((producto)=><CartItem producto={producto} id={producto.id} onSubmit={()=>carrito.removeFromCart(producto.id)} quantity={producto.quantity} /> ):
       <div style={{display:"flex" ,flexDirection:"column", alignItems:"center"}}><h1 style={{marginTop:"20vh"}}>No agregaste artículos</h1><Link to="/products" >Agrega uno ahora! </Link>
      </div>} 
      {  carrito.cart.length > 0 &&<Table style={{display:"flex",justifyContent:"flex-end"}}>
        <tbody>
          <tr>  <td>Total:{ }</td>
          </tr>
        </tbody>
      </Table>}
      {carrito.cart.length > 0 && <Button onClick={()=>carrito.deleteAll()} >Borrar todo</Button>}
    </div>
    </div>
    </Container>
  )
}
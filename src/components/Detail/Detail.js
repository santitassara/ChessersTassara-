import React from "react"
import { Figure,Card,Button } from "react-bootstrap"
import AddButton from "../AddButton/AddButton"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


export default function ItemDetail ({propi}) {
  const {addToCart,isInCart} = React.useContext(CartContext);
  const [count,setCount] = React.useState(1)

console.log(propi.nombre)




return (

  
<div style={{display:"flex",height:"80vh",alignItems:"center"}}>
   
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"500px"}}>
   
    <Figure style={{marginRight:"20%"}}>
  <Figure.Image
    width={491}
    height={500}
    alt="171x180"
    src={propi.image}
  />
  <Figure.Caption style={{width:"400px",fontSize:"20px",marginTop:"80px"}}>
      {propi.description}
    </Figure.Caption>
  
  </Figure>

  </div>  
  <div style={{display:"flex",flexDirection:"column", justifyContent:"flex-start",marginLeft:"20%",alignItems:"center"}} >
    <Card.Title style={{marginBottom:"50px",fontSize:"30px",textAlign:"center"}} >{propi.nombre}</Card.Title>
    <p style={{textAlign:"center"}} >Stock : {propi.stock}</p>
    <p style={{textAlign:"center",fontWeight:"bolder",fontSize:"30px"}}>$ {propi.precio}</p>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {isInCart(propi.id) ? (<Link to="/Cart" ><Button>Ir al carrito</Button></Link> ):(
      <AddButton stock={propi.stock} onSubmit={() => addToCart(propi,count)} cuenta={count} setCount={setCount} />)}
      {isInCart(propi.id) && (<Link to="/Products" ><Button id={"endBuy"}style={{width:"200px",margin:"10px"}}>Agregar mas productos</Button></Link> )}
    </div>
  </div>
</div>
  
)


}
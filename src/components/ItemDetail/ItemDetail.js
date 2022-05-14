import React from "react"
import { Figure,Card } from "react-bootstrap"

export default function ItemDetail ({prop}) {
console.log(prop.nombre)



return (

  <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"500px"}}>
    <Card.Title >{prop.nombre}</Card.Title>
    <Figure>
  <Figure.Image
    width={391}
    height={400}
    alt="171x180"
    src={prop.image}
  />
  <p style={{textAlign:"center"}} >Stock : {prop.stock}</p>
  <p style={{textAlign:"center",fontWeight:"bolder"}}>Precio: $ {prop.precio}</p>
  
  <Figure.Caption style={{width:"400px",fontSize:"20px",textAlign:"center"}}>
    {prop.description}
  </Figure.Caption>
  
</Figure>
  </div>
   
)


}
import React from "react"
import { Figure,Card } from "react-bootstrap"
import AddButton from "../AddButton/AddButton"
export default function ItemDetail ({propi}) {


console.log(propi.nombre)




return (

  
<div style={{display:"flex"}}>
   
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
  <div style={{display:"flex",flexDirection:"column", justifyContent:"flex-start",marginLeft:"20%"}} >
    <Card.Title style={{marginBottom:"50px",fontSize:"30px",textAlign:"center"}} >{propi.nombre}</Card.Title>
    <p style={{textAlign:"center"}} >Stock : {propi.stock}</p>
    <p style={{textAlign:"center",fontWeight:"bolder",fontSize:"30px"}}>$ {propi.precio}</p>
    
    
    <AddButton stock={propi.stock} />
  </div>
</div>
  
)


}
import{Card,Button} from "react-bootstrap"

import React from "react"
import {Link, Navigate, useNavigate} from "react-router-dom"


export default function Item ({producto,onSubmit,count,tableros}){
  const navigate = useNavigate()
  
  return(
    
    <Card style={producto.quantity > 0 ?{height:"500px",fontFamily: "Zen Kaku Gothic New, sans-serif" }:{ fontFamily: "Zen Kaku Gothic New, sans-serif",width: '18rem', textAlign:"center",height:"300px",padding:"15px", display:"flex",flexDirection:"column", justifyContent:"space-between" }}>
    <Card.Img variant="top" src={producto.image} style={{height:"180px"}} onClick={()=> navigate(`/product/${producto.id}`)} />
    <Card.Body>
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text >
        {/* <p>Stock: {producto.stock}</p> */}
        {/* <p style={{fontWeight:"bolder"}}>Precio: ${producto.precio}</p> */}
        {/* <p style={{fontWeight:"bolder"}}>{producto.description}  </p> */}
        {producto.quantity > 0 && <span>Cantidad:{producto.quantity}</span>}
     
      </Card.Text>
      
      {producto.quantity > 0 && <Button stock={producto.stock} onClick={onSubmit}>Eliminar</Button> }
    </Card.Body>
  </Card>
  
  );

  

}

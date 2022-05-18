import{Card} from "react-bootstrap"
import AddButton from "../AddButton/AddButton"
import React from "react"
import {Link, Navigate, useNavigate} from "react-router-dom"


export default function Item ({producto,onSubmit,count,tableros}){
  const navigate = useNavigate()
  return(
    
    <Card style={{ width: '18rem', textAlign:"center",height:"300px",padding:"15px", display:"flex",flexDirection:"column", justifyContent:"space-between" }}>
    <Card.Img variant="top" src={producto.image} style={{height:"180px"}} onClick={()=> navigate(`/product/${producto.id}`)} />
    <Card.Body>
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text >
        {/* <p>Stock: {producto.stock}</p> */}
        {/* <p style={{fontWeight:"bolder"}}>Precio: ${producto.precio}</p> */}
        {/* <p style={{fontWeight:"bolder"}}>{producto.description}  </p> */}
      </Card.Text>
      
      {/* <AddButton stock={producto.stock} onSubmit={onSubmit}/> */}
    </Card.Body>
  </Card>
  
  );

  

}

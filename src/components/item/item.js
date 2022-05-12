import{Card} from "react-bootstrap"
import AddButton from "../AddButton/AddButton"
import React from "react"
import ItemDetail from "../ItemDetailContainer/ItemDetail";

export default function Item ({producto,onSubmit,count}){
  return(

    <Card style={{ width: '18rem', textAlign:"center",height:"500px",padding:"15px", display:"flex",flexDirection:"column", justifyContent:"space-between" }}>
    <Card.Img variant="top" src={producto.image} style={{height:"180px"}} />
    <Card.Body>
      <Card.Title>{producto.nombre}</Card.Title>
      <Card.Text >
        <p>Stock: {producto.stock}</p>
        <p>Precio: {producto.precio}</p>
        <p style={{fontWeight:"bolder"}}>{producto.description}  </p>
      </Card.Text>
      <ItemDetail/>
      <AddButton stock={producto.stock} onSubmit={onSubmit}/>
    </Card.Body>
  </Card>
  );

  

}

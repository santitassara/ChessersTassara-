// import AddButton from "../AddButton/AddButton" 
import { useState,useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import {items} from "../Items/Items.js"
import LoadingCard from "../LoadingCard/LoadingCard"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Item from "../item/item"
import React from "react"


export default function ItemListContainer({categoryId}){
  const [listaItems,setListaItems]=useState([]) 
  const [cargando, setCargando] = useState(false)
  


 



useEffect(()=>{  
  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      
      resolve(items);
    }, 2000)
    
  })

  
  
    setCargando(true)
  task.then((result) => {
    if(categoryId){
    setListaItems(result.filter(item => item.categoryId === +categoryId))
    console.log(result)
  }else
  {
    setListaItems(result)
  }
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  }).finally(()=>setCargando(false))
  },[categoryId])
  
 
  
 
  return(
    
    // <div>
    //   {/* <p  style={{fontSize:"40px", display:"flex",justifyContent:"center",fontWeight:"bolder"}}>{greeting}</p> */}
    //   {/* <div className="item"> </div> */}
    // </div>
    <Container className="itemListContainer">
      <Row>
        <Col>
          <h1 style={{textAlign:"center"}}>Tableros</h1>
        </Col>
      </Row>
      <Row className="items" >
      
      {cargando? <LoadingCard  /> : <ItemList  producto={listaItems} key={listaItems.id}  />
       }
      {/* <ItemDetailContainer />  */}
        
      </Row>  
      
      
      
      
    </Container>
  )

}
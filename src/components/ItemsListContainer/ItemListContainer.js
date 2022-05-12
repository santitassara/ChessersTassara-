// import AddButton from "../AddButton/AddButton" 
import { useState,useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import {items} from "../Items/Items.js"
import { toast } from "react-toastify"


export default function ItemListContainer({greeting,cuenta}){
  const [listaItems,setListaItems]=useState([]) 
  const [cargando, setCargando] = useState(false)
  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      
      resolve(items);
    }, 2000)
    
  })
  useEffect(()=>{
    setCargando(true)
  task.then((result) => {
    setListaItems(result)
    console.log(result)
  
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  }).finally(()=>setCargando(false))
  },[])
  

  const onSubmit = ()=>{
    //alert(cuenta)
    toast.success(`Agregaste ${cuenta} unidades al carrito`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }
  
 
  return(
    
    // <div>
    //   {/* <p  style={{fontSize:"40px", display:"flex",justifyContent:"center",fontWeight:"bolder"}}>{greeting}</p> */}
    //   {/* <div className="item"> </div> */}
    // </div>
    <Container fluid className="itemListContainer">
      <Row>
        <Col>
          <h1 style={{textAlign:"center"}}>Tableros</h1>
        </Col>
      </Row>
      <Row className="items">
      
      {cargando? <p style={{textAlign:"center",fontSize:"50px"}}>Cargando...</p> : <ItemList producto={listaItems} key={listaItems.id} onSubmit={onSubmit} />
       }
        
        
      </Row>  
      
      
      
      
    </Container>
  )

}
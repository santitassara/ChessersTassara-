// import AddButton from "../AddButton/AddButton" 
import { Col, Container, Row } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
export default function ItemListContainer({greeting}){
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
        <ItemList/>
        <ItemList/>
        <ItemList/>
        <ItemList/>
        <ItemList/>
        
      </Row>  
      
      
      
      
    </Container>
  )

}
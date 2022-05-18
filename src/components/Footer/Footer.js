import {Container, Row, Col, Nav} from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Footer () {
  return (
    <footer>
      <Container fluid>
        <Row style={{backgroundColor:"black",height:"200px"}}>
          <Col xs={12} md={8} lg={4}>
            <div style={{height:"200px"}}>
              <Nav defaultActiveKey="/home" className="flex-column" >
              <Nav.Link href="#action1"><Link to="/" style={{color:"blanchedalmond",textDecoration:"none"}} >Home</Link></Nav.Link>
              <Nav.Link href="#action5"style={{color:"blanchedalmond",backgroundColor:"black"}}><Link to="/products" style={{color:"blanchedalmond",textDecoration:"none"}} >Artículos</Link>
          </Nav.Link> 
                
                <Nav.Link eventKey="link-2">Contacto</Nav.Link>
                
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={8} lg={4}> 
            <div style={{height:"200px"}} >

            </div>
          </Col>
          <Col xs={12} md={8} lg={4}> 
            <div style={{height:"200px"}} >
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
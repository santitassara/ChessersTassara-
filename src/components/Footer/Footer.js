import {Container, Row, Col, Nav} from "react-bootstrap";
export default function Footer () {
  return (
    <footer>
      <Container fluid>
        <Row style={{backgroundColor:"black",height:"200px"}}>
          <Col xs={12} md={8} lg={4}>
            <div style={{height:"200px"}}>
              <Nav defaultActiveKey="/home" className="flex-column" >
                <Nav.Link href="/home"style={{color:"blachedalmond"}} >Home</Nav.Link>
                <Nav.Link eventKey="link-1" style={{color:"blachedalmond"}} >Artículos</Nav.Link>
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
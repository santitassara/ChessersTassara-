import {Navbar, Container, Nav, NavDropdown,Form,FormControl,Button} from "react-bootstrap"
import CartWidget from "../CarWidget/CarWidget"
export default function Header({category1,category2,category3}){

  const linkStyles = {
    backgroundColor:"black"
  } 
  
  return(
    <div style={linkStyles}>
    <div className="app" >
      <div>
      </div>
      <h1 className="titulo">CHESSERS</h1>
      <div>
      <CartWidget/>
      </div>
    </div>
      <Navbar bg="black" expand="lg">
  <Container fluid>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"style={{color:"blanchedalmond"}}>Home</Nav.Link>
        <Nav.Link href="#action2"style={{color:"blanchedalmond"}}>Contacto</Nav.Link>
        <NavDropdown title="Articulos" id="navbarScrollingDropdown">
          <NavDropdown.Item  href="#action3"style={{color:"blanchedalmond",backgroundColor:"black"}}>{category1}</NavDropdown.Item>
          <NavDropdown.Item href="#action4"style={{color:"blanchedalmond",backgroundColor:"black"}}>{category2}</NavDropdown.Item>
          
          <NavDropdown.Item href="#action5"style={{color:"blanchedalmond",backgroundColor:"black"}}>
          {category3}
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  )
}


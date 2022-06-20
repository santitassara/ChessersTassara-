import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "../CarWidget/CarWidget"
import React from "react"


export default function Header({category1,category2,category3}){

  const linkStyles = {
    backgroundColor:"black",
  } 

  return(
    <div style={linkStyles} className="header">
      <div className="app" >
        <div>
        </div>
        <h1 className="titulo"><Link to="/" style={{color:"blanchedalmond",textDecoration:"none"}} >CHESSERS</Link></h1>
        <div>
        <Link to="/Cart" style={{color:"blanchedalmond",textDecoration:"none"}} ><CartWidget/></Link>
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
              <Nav.Link  as={Link} to="/" style={{color:"blanchedalmond",textDecoration:"none"}} >Home</Nav.Link>
              <NavDropdown title="Artículos" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/category/Tableros" style={{color:"blanchedalmond",backgroundColor:"black"}}>{category1}</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/category/Relojes" style={{color:"blanchedalmond",backgroundColor:"black"}}>{category2}</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/products" style={{color:"blanchedalmond",backgroundColor:"black"}}>Todos los artículos
                
                </NavDropdown.Item>

              </NavDropdown>
              <Nav.Link as={Link} to="/Cart" style={{color:"blanchedalmond"}} >Carrito</Nav.Link>
              
            </Nav>
        
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


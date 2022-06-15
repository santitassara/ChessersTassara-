import {Container, Row, Col, Nav} from "react-bootstrap";
import { Link ,NavLink} from "react-router-dom"

export default function Footer () {
  return (
    <footer>
      <div >
        
        
            <div style={{height:"200px"}} className="FooPos">
              <Nav defaultActiveKey="/home"  >
              <Link to="/" className="footerB"  style={{color:"blanchedalmond",textDecoration:"none"}} >Home</Link>
             <Link to="/products" className="footerB" style={{color:"blanchedalmond",textDecoration:"none"}} >Artículos</Link>
              <Link to="/Cart" className="footerB" style={{color:"blanchedalmond",textDecoration:"none"}} >Carrito</Link>              
              </Nav>
            </div>
          
          
        
      </div>
    </footer>
  )
}
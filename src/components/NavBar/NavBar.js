export default function Navbar(){

  const linkStyles = {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    listStyle:"none",
    marginTop:"20px",
    fontSize:"20px",
    color:"blanchedalmond"
  } 
  
  return(
    <header className="header">
      <div className="app" >
        <h1 className="titulo">CHESSERS</h1>
      </div>
      <ul style={linkStyles}>
        <li>INICIO</li>
        <li>PRODUCTOS</li>
        <li>QUIENES SOMOS</li>
      </ul>
    </header>
  )
}
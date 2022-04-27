export default function Navbar(){

  const linkStyles = {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    listStyle:"none",
    marginTop:"20px",
    fontSize:"20px"
  }
  
  return(
    <header className="header">
      <div className="app" >
        <h1 className="titulo">CHESSERS</h1>
      </div>
      <ul style={linkStyles}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Mi perfil</li>
      </ul>
    </header>
  )
}
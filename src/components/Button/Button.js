import { Button } from "react-bootstrap"


export default function Buttons({onSubmit,resta,cuenta,suma}) {
  //alert(onSubmit)

  const StockButton = ({handleOnClick, text}) =>{
    return <Button className="stockButton" onClick={handleOnClick}> {text} </Button>
    
  }
  
  /* ------------------------- Componente presentacion ------------------------ */
  const AddButton = ({handleOnSubmit}) => {
    return<Button className="addButton" onClick={handleOnSubmit}>Añadir al carrito</Button>
    
  }
  
  return(
    <div className="addButtonContainer">
      <div className="buttonsChangContainer">
        <StockButton text="-" handleOnClick={resta}/>
        <span className="addButtonCount" >{cuenta}</span>
        <StockButton text="+" handleOnClick={suma}/> <br></br>
        
       
      </div>  
      <AddButton handleOnSubmit={onSubmit} /> 
      
    </div>
  )
 
}
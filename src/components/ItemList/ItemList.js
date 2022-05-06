import{Card,Button} from "react-bootstrap"
import AddButton from "../AddButton/AddButton"

export default function ItemList(){
  return(
    <Card style={{ width: '18rem', textAlign:"center" }}>
    <Card.Img variant="top" src="img/TableroMadeira.jpg" />
    <Card.Body>
      <Card.Title>Tablero de Madera</Card.Title>
      <Card.Text >
        Tablero de madera, <br></br>acabado mate, <br></br>64 escaques.
      </Card.Text>
      <AddButton/>
    </Card.Body>
  </Card>
  );


}
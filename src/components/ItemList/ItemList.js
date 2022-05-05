import{Card,Button} from "react-bootstrap"
import AddButton from "../AddButton/AddButton"

export default function ItemList(){
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Tablero de Madera</Card.Title>
      <Card.Text>
        Tablero de madera acabado brillante 64 escaques.
      </Card.Text>
      <AddButton/>
    </Card.Body>
  </Card>
  );


}
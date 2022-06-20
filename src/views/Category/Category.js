import ItemListContainer from "../../components/ItemsListContainer/ItemListContainer"
import { useParams } from "react-router-dom"

export default function Category(){

  const{categoryId}=useParams();
  
  return(
    <div  >
      
      <ItemListContainer categoryId={categoryId}/>
    </div>
  )
}
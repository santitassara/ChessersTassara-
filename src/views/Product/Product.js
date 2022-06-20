import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"

import { useParams } from "react-router-dom"



export default function Product(){
  const{productId}=useParams();
  
  return(
    <div  >
      
      <ItemDetailContainer productId={productId}/>
    </div>
  )
}
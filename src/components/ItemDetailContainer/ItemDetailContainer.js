import axios from "axios"
import React from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getDoc,doc, getFirestore} from "firebase/firestore"


export default function ItemDetailContainer(productId){
  const [tableros,setTableros] = React.useState([])

  const [listaDesc,setListaDesc]=React.useState([])


/***************************** Importando Items con AXIOS desde la API de Mercado Libre y consologueando lo que traigo *********************************/

  React.useEffect(()=>{
   axios.get("https://api.mercadolibre.com/sites/MLA/search?q=tablerosajedrez")
  .then(res => { setTableros(res.data.results[1])

  })
  },[])

  console.log(tableros)
/***************************** FIN*********************************/


  React.useEffect(()=>{


      const db =getFirestore()
       const itemRef = doc(db, "Items", productId.productId)
       getDoc(itemRef).then(snapshot=>{
         if(snapshot.exists()){
          
           setListaDesc({id: snapshot.id, ...snapshot.data()})
         }
         })

    },[productId])




  return (

    <div>
    { <ItemDetail  propi={listaDesc} key={listaDesc.id}/>}

    </div>
  )

}
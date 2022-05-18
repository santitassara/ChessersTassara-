import axios from "axios"
import React from "react"
import {items} from "../Items/Items"
import ItemDetail from "../ItemDetail/ItemDetail"


export default function ItemDetailContainer(productId){
  const [tableros,setTableros] = React.useState([])
  const [cargando, setCargando] = React.useState(false)
  const [listaDesc,setListaDesc]=React.useState([]) 
  React.useEffect(()=>{
  axios.get("https://api.mercadolibre.com/sites/MLA/search?q=tablerosajedrez")
  .then(res => { setTableros(res.data.results[1])

  })
  },[])
  
  console.log(tableros)
  //tableros.map((b)=>(console.log(b.price)))

  
  React.useEffect(()=>{
    
    const getDescription = new Promise ((resolve, reject) => {
      setTimeout(() => {
        
        resolve(items);
      }, 2000)
      
    })
    setCargando(true)

    getDescription.then((res)=>{


      
      if(productId){
        console.log(productId.productId)
        console.log(res.find(item => item.id === +productId.productId))
      setListaDesc(res.find(item => item.id === +productId.productId))
      }else{
        setListaDesc(res)
      }
    }, err => {
      console.log(err)
    }).catch((err) => {
      console.log(err)
    }).finally(()=>setCargando(false))
     console.log(productId)
    },[productId])
  
   
//const detalle =(listaDesc.map((prop)=>console.log(prop)))

  return (
    // <p>{tableros }</p>
    <div>
    {cargando ? <h1 style={{height:"80vh"}} >Obteniendo producto...</h1> : <ItemDetail propi={listaDesc} key={listaDesc.id}/>}
    
    </div>
  )

}
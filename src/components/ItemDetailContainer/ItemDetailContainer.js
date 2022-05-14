import axios from "axios"
import React from "react"
import {items} from "../Items/Items"
import ItemDetail from "../ItemDetail/ItemDetail"


export default function ItemDetailContainer(){
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
    setCargando(true)
    const getDescription = new Promise ((resolve, reject) => {
      setTimeout(() => {
        
        resolve(items);
      }, 5000)
    
    })
  
    getDescription.then((res)=>{
      setListaDesc(res[1])
    }, err => {
      console.log(err)
    }).catch((err) => {
      console.log(err)
    }).finally(()=>setCargando(false))
    
    },[])
  

//const detalle =(listaDesc.map((prop)=>console.log(prop)))

  return (
    // <p>{tableros }</p>
    <div>
    {cargando ? <h1>Obteniendo producto...</h1> : <ItemDetail prop={listaDesc}/>}
    
    </div>
  )

}
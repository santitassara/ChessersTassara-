// import AddButton from "../AddButton/AddButton" 
import { useState,useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
// import {items} from "../Items/Items.js"

import {getDoc,doc, getFirestore, getDocs,collection,query,where} from "firebase/firestore"
import LoadingCard from "../LoadingCard/LoadingCard"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Item from "../item/item"
import React from "react"


export default function ItemListContainer({categoryId}){
  const [listaItems,setListaItems]=useState([]) 
  const [cargando, setCargando] = useState(false)
  

  useEffect(()=>{
    const db =getFirestore()
    // const itemRef = doc(db, "Items", "Lnr5AnubmLPY4cM05RDK")
    // getDoc(itemRef).then(snapshot=>{
    //   if(snapshot.exists()){
    //     console.log(snapshot.data())
    //     console.log(snapshot.id)
    //     console.log({id: snapshot.id, ...snapshot.data()})
    //   }
    //   })
    if(categoryId){
    const q = query(collection(db, "Items"),where("categoryId","==",categoryId))
    getDocs(q).then((snapshots)=>{
      if(snapshots === 0){
        console.log("no hay items");
      } 
      setListaItems(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))

      console.log(categoryId)
    })

  }else{
    const itemsRef = collection(db, "Items")
   getDocs(itemsRef).then((snapshots)=>{
    if(snapshots === 0){
      console.log("no hay items");
    } 
     setListaItems(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))
   })
   
  }
  },[categoryId])


// useEffect(()=>{  
//   const task = new Promise ((resolve, reject) => {
//     setTimeout(() => {
      
//       resolve(items);
//     }, 2000)
    
//   })

  
  
//     setCargando(true)
//   task.then((result) => {
//     if(categoryId){
//       console.log(categoryId)
//     setListaItems(result.filter(item => item.categoryId === +categoryId))
//     console.log(result)
//   }else
//   {
//     setListaItems(result)
//   }
//   }, err => {
//     console.log(err)
//   }).catch((err) => {
//     console.log(err)
//   }).finally(()=>setCargando(false))
//   },[categoryId])

  const y = listaItems.map((r)=>r.categoryId) 
  const h = y.filter((item, index) => y.indexOf(item) === index)
  
 
  console.log(h)
  
 
  return(
    
    // <div>
    //   {/* <p  style={{fontSize:"40px", display:"flex",justifyContent:"center",fontWeight:"bolder"}}>{greeting}</p> */}
    //   {/* <div className="item"> </div> */}
    // </div>
    <div >
    {cargando? <LoadingCard/>:<Container className="itemListContainer"><Row>
        <Col>
          <h1 style={{textAlign:"center",fontFamily: "Zen Kaku Gothic New, sans-serif"}}>{ h.length < 2 ? h >1 ? "Relojes":"Tableros":"Todos los productos"}</h1>
        </Col>
      </Row>
      <Row className="items" >
      
     <ItemList  producto={listaItems} key={listaItems.id}  />
       
      {/* <ItemDetailContainer />  */}
      </Row>    </Container>}
    
    </div>
  )

}
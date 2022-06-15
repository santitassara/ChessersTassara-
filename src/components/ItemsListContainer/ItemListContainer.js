// import AddButton from "../AddButton/AddButton" 
import { useState,useEffect } from "react"
import { Col, Container, Row ,Form} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
// import {items} from "../Items/Items.js"

import {getDoc,doc, getFirestore, getDocs,collection,query,where} from "firebase/firestore"
import LoadingCard from "../LoadingCard/LoadingCard"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Item from "../item/item"
import React from "react"
import Search from "../SearchItem/SearchItem"


export default function ItemListContainer({categoryId}){
  const [listaItems,setListaItems]=useState([]) 
  const [cargando, setCargando] = useState(false)
  const [search,setSearch] = React.useState("")


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
    setCargando(true)
    if(categoryId){
    const q = query(collection(db, "Items"),where("categoryId","==",categoryId))
    getDocs(q).then((snapshots)=>{
      if(snapshots === 0){
        console.log("no hay items");
      } 
      setListaItems(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))

      console.log(categoryId)
    }).finally(()=>setCargando(false))

  }else{
    const itemsRef = collection(db, "Items")
   getDocs(itemsRef).then((snapshots)=>{
    if(snapshots === 0){
      console.log("no hay items");
    } 
     setListaItems(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))
   }).finally(()=>setCargando(false))
   
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
  
  // const handleSearch = (e) => {
    
  //   //e.preventDefault()
  //   const search = e.target.value;
  //   if (search !== "" ) {
  //     setListaItems(listaItems.filter(item => item.nombre.toLowerCase().includes(search.toLowerCase())))
  //     console.log(search)
  //     console.log(listaItems.filter(item => item.nombre.toLowerCase().includes(search.toLowerCase())))
  //   }else {
  //     const db =getFirestore()
  //     const itemsRef = collection(db, "Items")
  //     getDocs(itemsRef).then((snapshots)=>{
  //       if(snapshots === 0){
  //         console.log("no hay items");
  //       } 
  //        setListaItems(snapshots.docs.map(doc=>({id:doc.id, ...doc.data()})))
  //      }
  //       )
  //     }
  //   }
  
  function fireData(){
    
    const db = getFirestore();
      const itemsRef = collection(db, "Items");
      getDocs(itemsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay items");
        }
        setListaItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value);
    if (search !== "" ) {
      setListaItems(
        listaItems.filter((item) =>
          item.nombre.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      fireData();
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value === "" || !handleSearch){
      fireData();
    }
  }
 
  return(
    
    // <div>
    //   {/* <p  style={{fontSize:"40px", display:"flex",justifyContent:"center",fontWeight:"bolder"}}>{greeting}</p> */}
    //   {/* <div className="item"> </div> */}
    // </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Search handleSearch={handleSearch} handleChange={handleChange}/>
      
    {/* <Form onSubmit={handleSearch}>
            <Form.Control type="text" placeholder="Buscar" onChange={(e) => handleChange(e)} />
            <Form.Control type="submit" />
          </Form> */}
    {cargando? <LoadingCard/>:<Container className="itemListContainer"><Row>
        <Col>
        
          <h1 style={{textAlign:"center",fontFamily: "Zen Kaku Gothic New, sans-serif"}}>{ categoryId === "Tableros" ? "Tableros": categoryId === "Relojes" ? "Relojes":"Todos los productos"}</h1>
          
        </Col>
      </Row>
      <Row className="items" >
      
     <ItemList  producto={listaItems} key={listaItems.id}  />
       
      {/* <ItemDetailContainer />  */}
      </Row>    </Container>}
    
    </div>
  )

}
import React from "react"
import { useParams,Link,useNavigate } from "react-router-dom"
import { Col, Container, Row ,Form,Button} from "react-bootstrap"
import { CartContext } from "../../context/CartContext";
import BuyData from "../../components/BuyData/BuyData";
// Importamos las dependencias que necesitamos desde firebase
import {doc,getDocs,updateDoc,addDoc,runTransaction,collection,getFirestore,}from "firebase/firestore";
import ItemDetail from "../Detail/Detail";

export default function Checkout() {
  const navigate = useNavigate()
  const carrito = React.useContext(CartContext)
  const cartNow = (carrito.cart.map((item)=>item))
  console.log(cartNow)
  const [cambio,setCambio] = React.useState(false)
  const [data, setData] = React.useState()
  console.log(data)
  const [orderId, setOrderId] = React.useState()
  console.log(orderId)
  // Codigo hardcodeado que simula el cart de su context
  const [listaItems,setListaItems]=React.useState([])
  //const [orderCompare,setOrderCompare]=React.useState([])
  
  function fireData(){
    
    const db = getFirestore();
      const itemsRef = collection(db, "orders");
      getDocs(itemsRef).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay items");
        }
        setListaItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log(listaItems)
      })
    
      // setOrderCompare  (listaItems.filter((item) =>
      // item.id.includes(orderId)))
  }
 
   

  // Guardamos los datos del formulario en un estado cada vez que se modifica un campo
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  // Accion que se ejecuta al hacer click en el boton para enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    const y = (cartNow.map((producto)=>producto.precio * producto.quantity)) 
    const r=y.reduce((a,b)=>a+b)
    const order = {
      buyer: data,
      items: cartNow,
      total: r ,
    };
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const productsCollection = collection(db, "items")
    await addDoc(ordersCollection, order).then(({id}) => {
      setOrderId(id)
      // updateProducts()
    })
    // submit()
    setCambio (true)
    carrito.deleteAll()
    fireData()

  }
  
  //const  total = (cartNow.map((producto)=>producto.precio * producto.quantity)).reduce((a,b)=>a+b)

  // Batch update de productos una vez generada la orden
  // const updateProducts = async () => {
  //   const db = getFirestore ()
  //   cartNow.forEach( async (item) => {
  //     const productRef = doc(db, `items`, item.id)
  //     await runTransaction(db, async (transaction) => {
  //     const transfDoc = await transaction.get(productRef);
  //     if (!transfDoc.exists()) {
  //       console.error("El documento no existe")
  //     }
  //     const newStock = transfDoc.data().stock - item.quantity;
  //     transaction.update(productRef, { stock: newStock });
  //   });
  //   })
  // }
  // // Updateo 1 producto solo 
  // const handleUpdateOneProduct = () => {
  //   const db = getFirestore();
  //   const productDoc = doc(db, "productos", "sXARY8G62PxwaRxzNeFX");
  //   updateDoc(productDoc, { stock: 2 });
  // }
  
    // const submit = (event) => {
        
    //     navigate("/Products");
    // }


   console.log(cartNow.map((producto)=>producto.precio * producto.quantity))


   
  // console.log(total)



  const orderCompare =  listaItems.filter((item) =>
  item.id.includes(orderId))
 console.log(listaItems)
  console.log(orderCompare)
  //console.log(orderCompare.map((o)=>o.buyer.Nombre))
  
  //const buyer = (orderCompare.map((o)=>o.buyer))
  //console.log(buyer)
  
  const buyerItems = (orderCompare.map((o)=>o.items))
  console.log(buyerItems.map((i)=>i.name))
  //const mapBuyerItems = (buyerItems.map((o)=>o))
  //console.log(mapBuyerItems.map((o)=>o.nombre))
  

  return (
    <div >
      
        {!cambio ? <div>
      <h1 style={{textAlign:"center",margin:"50px"}}>Finaliza tu compra</h1>
      <div className="checkout" style={{display:"flex",flexDirection:"row"}}>
        

        <div>
          
          <Form onSubmit={handleSubmit} onChange={handleChange}className="checkoutForm" >
            <h2 style={{textAlign:"center",margin:"50px"}}>Inglesá tus datos personales</h2>
            
              <Form.Group className="mb-3" controlId="nameGroup" style={{display:"flex",justifyContent:"space-around",margin:"10px", width:"100%"}}>
                <Form.Control onChange={handleChange} required type="text" name="Nombre" placeholder="Nombre" style={{width:"300px"}} />
                <Form.Control onChange={handleChange} required type="text" name="Apellido" placeholder="Apellido" style={{width:"300px"}} /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId=""style={{display:"flex",justifyContent:"space-around",margin:"10px", width:"100%"}}>
                <Form.Control onChange={handleChange} required type="text" name="Dirección" placeholder="Dirección"style={{width:"300px"}}  />
                <Form.Control onChange={handleChange} required type="text" name="Piso" placeholder="Piso/Dpto"style={{width:"300px"}}  /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId=""style={{display:"flex",justifyContent:"space-between",margin:"10px", width:"100%"}}>
                <Form.Control onChange={handleChange} required type="text" name="Provincia" placeholder="Provincia" style={{width:"300px"}} />
                <Form.Control onChange={handleChange} required type="text" name="Ciudad" placeholder="Ciudad"style={{width:"250px"}}  /> 
                <Form.Control onChange={handleChange} required type="text" name="Código" placeholder="Código Postal"style={{width:"150px"}}  /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId=""style={{display:"flex",justifyContent:"space-around",margin:"10px", width:"100%"}}>
                <Form.Control onChange={handleChange} required type="tel" name="Tel" placeholder="Tel."style={{width:"200px"}}  />
                <Form.Control onChange={handleChange} required type="number" name="DNI" placeholder="DNI"style={{width:"200px"}}  /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control onChange={handleChange} required type="email" name="email" placeholder="E-mail"style={{width:"500px"}} /> 
              </Form.Group>
              <Button variant="primary"  type="submit"  style={{width:"10vw" ,marginTop:"50px",marginBottom:"10px"}}>Comprar</Button>
          </Form>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <div className="grilla">
          {carrito.cart.map((item)=> 
            <div className="checkoutItem" style={{margin:"10px"}}>
              <div >
              
              <img src={item.image} alt={"imagen carrito"} style={ {height:"8vh"}} ></img>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"10vw" }}>
                <span style={{textAlign:"center",textDecoration:"underline"}}>{item.nombre}</span>
                <span>Cantidad: {item.quantity}</span>
                <span ><strong>$ {item.precio}</strong></span>
                
            </div>
          </div> 
            )} 
            
            </div>
            <div className="total" style={{margin:"10px",paddingTop:"10%",paddingBottom:"10%",fontSize:"25px"}}>
              <span><strong>Total : $ {(cartNow.map((producto)=>producto.precio * producto.quantity)).reduce((a,b)=>a+b)}</strong></span>
            </div>
          </div>
          
      </div>
      </div>: 
      <BuyData orderId={orderId} orderCompare={orderCompare} />}
      
    </div>
    
  );
};




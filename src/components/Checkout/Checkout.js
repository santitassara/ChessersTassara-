import React from "react"
import { Col, Container, Row ,Form,Button} from "react-bootstrap"
import { CartContext } from "../../context/CartContext";

// Importamos las dependencias que necesitamos desde firebase
import {doc,getDoc,updateDoc,addDoc,runTransaction,collection,getFirestore,}from "firebase/firestore";

export default function Checkout() {

  const carrito = React.useContext(CartContext)
  const cartNow = (carrito.cart.map((item)=>item.image))
  console.log(cartNow)

  const [data, setData] = React.useState()
  console.log(data)
  const [orderId, setOrderId] = React.useState()
  console.log(orderId)
  // Codigo hardcodeado que simula el cart de su context
  const cart = [
    {
      id: "sXARY8G62PxwaRxzNeFX",
      title: "Producto demo 1",
      price: 100,
      quantity: 2,
    },
    {
      id: "xuFwVwqchICXyvLJz7A6",
      title: "Producto demo 2",
      price: 200,
      quantity: 2,
    }
  ]


  // Guardamos los datos del formulario en un estado cada vez que se modifica un campo
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  // Accion que se ejecuta al hacer click en el boton para enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: 500,
    };
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const productsCollection = collection(db, "productos")
    await addDoc(ordersCollection, order).then(({id}) => {
      setOrderId(id)
      updateProducts()
    })
  }

  // Batch update de productos una vez generada la orden
  const updateProducts = async () => {
    const db = getFirestore ()
    cart.forEach( async (item) => {
      const productRef = doc(db, `productos`, item.id)
      await runTransaction(db, async (transaction) => {
      const transfDoc = await transaction.get(productRef);
      if (!transfDoc.exists()) {
        console.error("El documento no existe")
      }
      const newStock = transfDoc.data().stock - item.quantity;
      transaction.update(productRef, { stock: newStock });
    });
    })
  }
  // Updateo 1 producto solo 
  const handleUpdateOneProduct = () => {
    const db = getFirestore();
    const productDoc = doc(db, "productos", "sXARY8G62PxwaRxzNeFX");
    updateDoc(productDoc, { stock: 2 });
  }

  return (
    <div >
    <h1 style={{textAlign:"center"}}>Finaliza tu compra</h1>
    <div className="checkout" style={{display:"flex",flexDirection:"row"}}>
      

      <div>
        
        <Form onSubmit={handleSubmit} className="checkoutForm" >
          <h2>Inglesá tus datos personales</h2>
          
            <Form.Group className="mb-3" controlId="nameGroup" style={{display:"flex",justifyContent:"space-between",margin:"10px", width:"80vh"}}>
              <Form.Control type="text" placeholder="Nombre" style={{width:"300px"}} />
              <Form.Control type="email" placeholder="Apellido" style={{width:"300px"}} /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId=""style={{display:"flex",justifyContent:"space-between",margin:"10px", width:"80vh"}}>
              <Form.Control type="text" placeholder="Dirección"style={{width:"300px"}}  />
              <Form.Control type="text" placeholder="Piso/Dpto"style={{width:"300px"}}  /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId=""style={{display:"flex",justifyContent:"space-between",margin:"10px", width:"80vh"}}>
              <Form.Control type="text" placeholder="Provincia" style={{width:"300px"}} />
              <Form.Control type="text" placeholder="Ciudad"style={{width:"250px"}}  /> 
              <Form.Control type="text" placeholder="Código Postal"style={{width:"150px"}}  /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId=""style={{display:"flex",justifyContent:"space-around",margin:"10px", width:"80vh"}}>
              <Form.Control type="tel" placeholder="Tel."style={{width:"200px"}}  />
              <Form.Control type="number" placeholder="DNI"style={{width:"200px"}}  /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control type="email" placeholder="E-mail"style={{width:"500px"}} /> 
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:"10vw" ,marginTop:"50px"}}>Comprar</Button>
        </Form>
      </div>
      <div>
      {carrito.cart.map((item)=> carrito.cart.length < 4 ?
        <div className="checkoutItem" >
          <div>
          
          <img src={item.image} alt={"imagen carrito"} style={ {height:"100px"}} ></img>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"10vw" }}>
            <span style={{textAlign:"center",textDecoration:"underline"}}>{item.nombre}</span>
            <span>Cantidad: {item.quantity}</span>
            <span ><strong>$ {item.precio}</strong></span>
            
        </div>
       </div> : 
        <div class="grilla">
        <div class={carrito.cart.length > 4 ? "c":"s"}>
          <div className="checkoutItem" >
          <div>
          
          <img src={item.image} alt={"imagen carrito"} style={ {height:"100px"}} ></img>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"10vw" }}>
            <span style={{textAlign:"center",textDecoration:"underline"}}>{item.nombre}</span>
            <span>Cantidad: {item.quantity}</span>
            <span ><strong>$ {item.precio}</strong></span>
            
        </div>
       </div>
          
        </div>
      </div>
       )} 
       
      </div>
    </div>
    </div>
  );
};




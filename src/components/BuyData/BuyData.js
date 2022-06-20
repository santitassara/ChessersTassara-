import React from "react"




export default function BuyData(orderCompare) {



const buyer = (orderCompare.orderCompare)

const buyerItem = (buyer.map((i)=>i.items))

const buyerItem2 = (buyerItem.map((i)=>i.map((b)=>b.nombre)))
const total = (buyer.map((b)=>b.total))




return (  
<div className="endTotal" >
  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",height:"60vh"}} >
      <div style={{margin:"50px" }} >
          <h2 style={{textAlign:"center"}}>Felicitaciones {buyer.map((b)=>b.buyer.Nombre)} !! Tu compra fue realizada con Éxito </h2>
        </div>
        
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div>
              <h3 style={{textDecoration:"underline"}}>Detalles de tu compra</h3>
              <div>
                <h5>Nombre: {buyer.map((b)=>b.buyer.Nombre)}</h5>
                <h5>Apellido: {buyer.map((b)=>b.buyer.Apellido)}</h5>
                <h5>Email: {buyer.map((b)=>b.buyer.email)}</h5>
                <h5>Telefono: {buyer.map((b)=>b.buyer.Tel)}</h5>
                <h5>{`Dirección: ${buyer.map((b)=>b.buyer.Provincia)} - ${buyer.map((b)=>b.buyer.Ciudad)} - ${buyer.map((b)=>b.buyer.Dirección)}`}</h5>
                <h5>Total de compra: $ {total}</h5>
                
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
              <h3 style={{textDecoration:"underline"}} >Productos</h3>
              <div className="grilla">
              {(buyerItem.map((i)=>i.map((b)=>
                <div className="checkoutItem" style={{margin:"10px"}}>
                  <div >
                  
                  <img src={b.image} alt={"imagen carrito"} style={ {height:"8vh"}} ></img>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"10vw" }}>
                    <span style={{textAlign:"center",textDecoration:"underline"}}>{b.nombre}</span>
                    <span>Cantidad: {b.quantity}</span>
                    <span ><strong>$ {b.precio}</strong></span>
                    
                  </div>
                </div> )))}
                </div>
            </div>
            
          </div>
        
    </div>
  </div>
  
    
  )
}

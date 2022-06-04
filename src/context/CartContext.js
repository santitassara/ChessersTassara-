import React from "react"
import { toast } from "react-toastify"
const CartContext = React.createContext();
const {Provider} = CartContext


const CartProvider = ({children})=>{
  const[cart,setCart] = React.useState([])
  console.log(cart)

  
  //addToCart
  const addToCart = (propi,cuenta,count) => {

      /* ---------------------- Funcion de Agregar al carrito --------------------- */
      // const onSubmit = ()=>{
       
         toast.success(`Agregaste ${cuenta} unidades al carrito`, {
           position: "top-right",
           autoClose: 1000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           });
    
      // }
      
     
        if(isInCart(propi.id)) {
          const newCart = cart.map(cartItem => {
            if(cartItem.id === propi.id) {
              cartItem.quantity++
            }
            return cartItem
          } )
          setCart(newCart)
        }else{
          setCart([...cart,{...propi, quantity:+cuenta}])
        }
      

  }
   //addToCart
   const removeFromCart = (propi,cuenta,producto) => {
    // if()
    if(!isInCart(propi.id)) {
      const newCart = cart.filter((cartItem) => cartItem.id !== producto.id)
      setCart(newCart)
    }else{
      const newCart = cart.map(cartItem => {
        if(cartItem.id === propi.id) {
          cartItem.quantity--
        }
        return cartItem
      } )
      setCart(newCart)
      
    }

  }
   //addToCart
   const deleteAll = () => {

    setCart([])

  }
   //addToCart
   const isInCart = (id) => {
    

    return cart.find(propi => propi.id === id)

  }
  
  
  
  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
    }}>{children}</Provider>
  )
}

export {CartContext,CartProvider}
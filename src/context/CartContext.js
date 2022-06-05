import React from "react"
import { toast } from "react-toastify"
const CartContext = React.createContext();
const {Provider} = CartContext


const CartProvider = ({children})=>{
  const[cart,setCart] = React.useState([])
  console.log(cart)

  
 
  const addToCart = (propi,cuenta,count) => {

    
       
         toast.success(`Agregaste ${cuenta} unidades al carrito`, {
           position: "top-right",
           autoClose: 1000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           });
    
 
      
     
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
   const removeFromCart = (id,propi) => {
    // if()
    if(isInCart(id)) {
      
      const newCart = cart.filter((cartItem) => cartItem.id !== id)
      setCart(newCart)
    }else{
      const newCart = cart.map(cartItem => {
        if(cartItem.id === id) {
          cartItem.quantity--
        }
        return cartItem
      } )
      setCart(newCart)
      
    }

  }
   
   const deleteAll = () => {

    setCart([])

  }
   const isInCart = (id) => {
    

    return cart.find(propi => propi.id === id)

  }


  const handleQuantity = (propi,id,cuenta) => {
    const newCart = cart.map(cartItem => {
      console.log(cuenta)
      if(cartItem.id === (propi) ) {
       if (cartItem.quantity > 1){
        cartItem.quantity-- 
       }
      }  
      return cartItem
    } )
    setCart(newCart)
  }
  const handleQuantitySum = (propi,id,cuenta) => {
    const newCart = cart.map(cartItem => {
      console.log(cuenta)
      if(cartItem.id === (propi) ) {
       if (cartItem.quantity < cartItem.stock){
        cartItem.quantity++ 
       }
      }  
      return cartItem
    } )
    setCart(newCart)
  }
  
  
  
  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      handleQuantity,
      handleQuantitySum,
      cart,
    }}>{children}</Provider>
  )
}

export {CartContext,CartProvider}
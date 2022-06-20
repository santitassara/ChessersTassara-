import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./views/Home/Home"
import Products from "./views/Products/Products";
import Product from "./views/Product/Product"
import Cart from "./views/Cart/Cart"
import Category from "./views/Category/Category"
import Checkout from "./components/Checkout/Checkout";

function App(){
  return (
    <BrowserRouter>
    
      <CartProvider>
        <Header category1={"Tableros"} category2={"Relojes"} category3={"Otros juegos"}/>
        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/product/:productId" element={<Product/>}/>
            <Route exact path="/category/:categoryId" element={<Category/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="*" element={<div>404</div>}/>
          </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
    
  );
}
export default App;

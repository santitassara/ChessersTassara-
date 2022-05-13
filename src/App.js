import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./views/Home/Home"

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;

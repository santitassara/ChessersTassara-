import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App(){
  return (
    <div  >
      {/* <h1 className="titulo">CHESSERS</h1> */}
      <Header category1={"Tableros"} category2={"Relojes"} category3={"Otros juegos"}/>
      <ItemListContainer greeting={"Sin Articulos"} />
      <Footer/>
    </div>
  );
}
export default App;

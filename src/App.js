import ItemListContainer from "./components/Items/ItemListContainer";
import Header from "./components/NavBar/NavBar";

function App(){
  return (
    <div  >
      {/* <h1 className="titulo">CHESSERS</h1> */}
      <Header category1={"Tableros"} category2={"Relojes"} category3={"Otros juegos"}/>
      <ItemListContainer greeting={"Sin Articulos"} />
    </div>
  );
}
export default App;

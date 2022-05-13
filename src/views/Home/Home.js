
import Header from "../../components/Header/Header"
import ItemListContainer from "../../components/ItemsListContainer/ItemListContainer"
import Footer from "../../components/Footer/Footer"

export default function Home(){
  return(
    <div>
      <Header category1={"Tableros"} category2={"Relojes"} category3={"Otros juegos"}/>
      <ItemListContainer greeting={"Sin Articulos"} />
      <Footer/>
    </div>
  )
}
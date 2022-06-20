import InfoItem from "../InfoItem/InfoItem"

import {Figure,Carousel} from "react-bootstrap"
export default function News(){

  const imgs= ["img/WhatsAppIcon.png","img/CreditCardIcon.png","img/TruckIcon.png"]
  const texts=["Consultas por Whatsapp!","Múltiples medios de pago","Envios a todo el país"]

  
  


  return(
    <>
    <div style={{marginTop:"50px" ,marginBottom:"50px"}}>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../img/chessSlide.jpeg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../img/chessCarousel.webp"
        alt="Second slide"
      />
    </Carousel.Item>
    
  </Carousel>
  </div>
  <div style={{marginTop:"50px" ,marginBottom:"50px"}} >
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"10px"}}>
      
      {imgs.map((img)=> <InfoItem key={img} img={img} />)}
      </div>  
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"10px"}}>
      {texts.map((text)=><Figure.Caption key={text}>{text}</Figure.Caption>)}
      </div>
    </div>
  </>
  )

}
import InfoItem from "../InfoItem/InfoItem"

import {Figure} from "react-bootstrap"
export default function News(){

  const imgs= ["img/WhatsAppIcon.png","img/CreditCardIcon.png","img/TruckIcon.png"]
  const texts=["Consultas por Whatsapp!","Múltiples medios de pago","Envios a todo el país"]

  
  


  return(
    <div style={{height:"80vh"}}>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"10px"}}>
      
      {imgs.map((img)=> <InfoItem img={img} />)}
    </div>  
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"10px"}}>
      {texts.map((text)=><Figure.Caption>{text}</Figure.Caption>)}
    </div>
    </div>
  )

}
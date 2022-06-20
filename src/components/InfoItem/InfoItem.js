
import {Figure} from "react-bootstrap"


export default function InfoItem(img){  

  return(
    
    <Figure style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Figure.Image
      width={50}
      height={180}
      alt="171x180"
      src={img.img}
    />
    
  </Figure>

  )
}
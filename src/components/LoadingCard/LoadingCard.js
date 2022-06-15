import  {Card,Spinner,Placeholder} from "react-bootstrap"

export default function LoadingCard(){

  return(

    <div  style={{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <Spinner animation="grow" />
</div>
  )

}
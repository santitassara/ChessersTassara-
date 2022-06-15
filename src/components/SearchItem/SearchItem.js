import React from "react";
import { Col, Container, Row ,Form} from "react-bootstrap"

export default function Search({handleSearch,handleChange}){

  return(
    <Form style={{width:"300px",margin:"20px"}} onSubmit={handleSearch}>
        <Form.Control type="text" placeholder="Buscar" onChange={(e) => handleChange(e)}/>
    </Form>
  )
}
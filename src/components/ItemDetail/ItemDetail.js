import React from "react"

import Detail from "../Detail/Detail"

export default function ItemDetail ({propi}) {

return (

  <div className="detailStyle" style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
    <Detail propi={propi} />
  </div>
   
)


}
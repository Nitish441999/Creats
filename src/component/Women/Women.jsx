import React from 'react'
import"./Women.css"
import Scard from '../Men/Scard/Scard'
import card1 from "../Image/cardF1.jpg"

function Women() {
  return (
    <div>
    <img src={card1} style={{width:"100%"}}/>
      {/* <div style={{marginTop:"6rem"}}> */}
      <Scard/>
     
      {/* </div> */}

    </div>
  )
}

export default Women

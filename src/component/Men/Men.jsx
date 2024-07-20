import React from 'react'
import "./Men.css"
import Scard from './Scard/Scard'
import card1 from "../Image/cardF1.jpg"


function Men() {
  return (
    <div >
    <img src={card1} style={{width:"100%"}}/>
      {/* <div style={{marginTop:"6rem"}}> */}
      <Scard/>
     
      {/* </div> */}

   
    </div>
  )
}

export default Men

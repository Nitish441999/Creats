import React, { useEffect } from 'react'
import"./Video.css"
import AOS from "aos"
import "aos/dist/aos.css"
import cardV1 from "../../Image/cardV1.jpg"
import freepic from "../../Image/freepic.jpg"
import video from "../../Image/1104922_1080p_Purchase_Run_1920x1080.mov"

function Video() {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div>

    <div className='vedio-sec mt-5 ' data-aos="fade-up" data-aos-duration="1200">
    <div className='Vimage'  >
        <img src={ cardV1}/>
        <div className='Vinfo' data-aos="zoom-in-down" data-aos-duration="1200">
          <p>Curated for You</p>
          <h3>Made in India</h3>
          <button type='submit'>SHOP NOW</button>
        </div>
    </div>

    <div className='Vimage'>
        <img src={ freepic}/>
        <div className='Vinfo' data-aos="zoom-in-down" data-aos-duration="1200">
          <p>Curated for You</p>
          <h3>Made in India</h3>
          <button type='submit'>SHOP NOW</button>
        </div>
    </div>
    {/* <div className='Vvideo'>
        <video>
            <source src="../../Image/1104922_1080p_Purchase_Run_1920x1080.mov" type='vedeo/mov'></source>
        </video>

       
    </div> */}

    </div>  
   



   
      
    </div>
  )
}

export default Video;

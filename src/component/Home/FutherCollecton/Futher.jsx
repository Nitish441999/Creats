import React from 'react'
import Slider from "react-slick";
import "./Futher.css";
import fcard1 from "../../Image/Fcard1.webp"
import fcard2 from "../../Image/Fcard2.webp"
import fcard3 from "../../Image/Fcard3.webp"
import fcard4 from "../../Image/Fcard4.webp"
import fcard5 from "../../Image/Fcard5.jpg"
import fcard6 from "../../Image/Fcard6.jpg"
function Futher() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ],


        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
    <div className='heading mt-5'>
        <h1>Featured Collections</h1>
    </div>
    <div className="slider-container  mb-5">
      <Slider {...settings}>
        <div >
            <div className='Futher-sec'>
                <img src={fcard1}></img>
                <h5></h5>
            </div>
         
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={fcard2}></img>
                
            </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={fcard3}></img>
                
            </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={fcard4}></img>
                
                </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={fcard5}/>
                
                </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={fcard6}></img>
                
            </div>
        </div>
      </Slider>
    </div>
   
      
    </div>
  )
}

export default Futher

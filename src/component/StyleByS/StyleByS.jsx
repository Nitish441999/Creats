import React from 'react'
import Slider from "react-slick";




function StyleByS() {

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
        <h1>Shop By Style</h1>
    </div>
    <div className="slider-container  mb-5">
      <Slider {...settings}>
        <div >
            <div className='Futher-sec'>
                <img src={shop1}></img>
                <h5></h5>
            </div>
         
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={shop2}></img>
                
            </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={shop3}></img>
                
            </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={shop4}></img>
                
                </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={shop1}/>
                
                </div>
        </div>
        <div>
            <div className='Futher-sec'>
                <img src={shop2}></img>
                
            </div>
        </div>
      </Slider>
    </div>
      
    </div>
  )
}

export default StyleByS;

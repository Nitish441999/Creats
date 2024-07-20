import React from 'react'
import { useEffect, useRef } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Slider from "react-slick";
import "../../Men/Scard/Scard.css"
import cardS1 from '../../Image/cardH1.jpg'
import { Link } from "react-router-dom";

import menS1 from "../../Image/menS1-1.jpg"
import menB1 from "../../Image/menB-1.jpg"
import menL1 from "../../Image/menL-1.jpg"
import mensc1 from "../../Image/menSC1-1.jpg"
import menC1 from "../../Image/menC1-1.jpg"

import womenr1 from "../../Image/womenR1-1.webp"
import womenr2 from "../../Image/womenR2-1.webp"
import womenr3 from "../../Image/womenR3-1.webp"
import womenr4 from "../../Image/womenR4-1.webp"
import womenr5 from "../../Image/womenR5-1.webp"
import womenr6 from "../../Image/womenR6-1.webp"
import womenr7 from "../../Image/womenR7-1.webp"
import womenr8 from "../../Image/womenR8-1.webp"
import womenr9 from "../../Image/womenR9-1.webp"
function Wrunners() {

    useEffect(()=>{
        AOS.init();
      })

      var settings = {
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
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
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
    
    
    
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
    <div>

<div className="slider-container">
      <Slider {...settings} className="mt-3">
      
        <div >
        <div className="Mcato">
        <Link><img src={menB1}></img></Link>
          <h3>1</h3>
        </div>
        </div>

        <div>
        <div className="Mcato">
        <Link><img src={menS1}></img></Link>
          <h3>1</h3>
        </div>
        </div>

        <div>
        <div className="Mcato">
        <Link><img src={menL1}></img></Link>
          <h3>1</h3>
        </div>
        </div>

       <div>
        <div className="Mcato">
        <Link><img src={mensc1}></img></Link>
          <h3>1</h3>
        </div>
        </div>

        <div>
        <div className="Mcato">
        <Link><img src={menC1}></img></Link>
          <h3>1</h3>
        </div>
        </div>

        {/* <div>
        <div className="Mcato">
        <img src={cardS1}></img>
          <h3>1</h3>
        </div>
        </div> */}
      </Slider>
    </div>

















    <div className=" ScardSec mt-5 " data-aos="zoom-in-up" data-aos-duration="1700">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={ womenr1}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={ womenr2}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>

      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr3}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={womenr4}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>



         
    <div className=" ScardSec mt-5 " data-aos="zoom-in-up" data-aos-duration="1200">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={womenr5}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={womenr6}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>

      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr7}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr8}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>





    <div className=" ScardSec mt-5 " data-aos="zoom-in-up" data-aos-duration="1200">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={ womenr9}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={ womenr1}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>

      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr2}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr3}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>





    <div className=" ScardSec mt-5 " data-aos="zoom-in-up" data-aos-duration="1200">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={ womenr4}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={ womenr5}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>

      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr6}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr7}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>



    <div className=" ScardSec mt-5 " data-aos="zoom-in-up" data-aos-duration="1200">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={ womenr8}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={womenr9}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>

      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr1}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr2}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>




    <div className=" ScardSec mt-5 mb-5 " data-aos="zoom-in-up" data-aos-duration="1200">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={womenr3}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={ womenr4}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>

      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr5}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">

      <div className="Simage">
        <Link to="/"><img src={ womenr6}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>

      
    </div>
  )
}

export default Wrunners

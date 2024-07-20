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

import menr1 from "../../Image/menR1-1.webp"
import menr2 from "../../Image/menR2-1.webp"
import menr3 from "../../Image/menR3-1.webp"
import menr4 from "../../Image/menR4-1.webp"
import menr5 from "../../Image/menR5-1.webp"
import menr6 from "../../Image/menR6-1.webp"
import menr7 from "../../Image/menR7-1.webp"
import menr8 from "../../Image/menR8-1.webp"



function Runners() {
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
        <h3>BOOTS</h3>
        </div>
        </div>

        <div>
        <div className="Mcato">
        <Link><img src={menS1}></img></Link>
        <h3>RUNNERS</h3>
        </div>
        </div>

        <div>
        <div className="Mcato">
        <Link><img src={menL1}></img></Link>
        <h3>LOFERS</h3>
        </div>
        </div>

       <div>
        <div className="Mcato">
        <Link><img src={mensc1}></img></Link>
        <h3>SNEAKERS</h3>
        </div>
        </div>

        <div>
        <div className="Mcato">
        <Link><img src={menC1}></img></Link>
        <h3>FORMAL</h3>
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
          <Link to="/"><img src={ menr1}/></Link>
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
        <Link to="/"><img src={ menr2}/></Link>
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
        <Link to="/"><img src={ menr3}/></Link>
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
        <Link to="/"><img src={ menr4}/></Link>
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
          <Link to="/"><img src={ menr5}/></Link>
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
        <Link to="/"><img src={ menr6}/></Link>
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
        <Link to="/"><img src={menr7}/></Link>
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
        <Link to="/"><img src={ menr8}/></Link>
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
          <Link to="/"><img src={ menr1}/></Link>
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
        <Link to="/"><img src={ menr2}/></Link>
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
        <Link to="/"><img src={ menr3}/></Link>
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
        <Link to="/"><img src={ menr4}/></Link>
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
          <Link to="/"><img src={ menr5}/></Link>
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
        <Link to="/"><img src={ menr6}/></Link>
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
        <Link to="/"><img src={ menr7}/></Link>
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
        <Link to="/"><img src={ menr8}/></Link>
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
          <Link to="/"><img src={ menr1}/></Link>
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
        <Link to="/"><img src={menr2}/></Link>
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
        <Link to="/"><img src={ menr3}/></Link>
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
        <Link to="/"><img src={ menr4}/></Link>
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
          <Link to="/"><img src={ menr5}/></Link>
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
        <Link to="/"><img src={ menr6}/></Link>
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
        <Link to="/"><img src={menr7}/></Link>
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
        <Link to="/"><img src={ menr8}/></Link>
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

export default Runners;

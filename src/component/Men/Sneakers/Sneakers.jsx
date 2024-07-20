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

import mens1 from "../../Image/menS1-1.jpg"
import mens2 from "../../Image/menS2-1.jpg"
import mens3 from "../../Image/menS3-1.jpg"
import mens4 from "../../Image/menS4-1.jpg"
import mens5 from "../../Image/menS5-1.jpg"
import mens6 from "../../Image/menS6-1.jpg"
import mens7 from "../../Image/menS7-1.jpg"
import mens8 from "../../Image/menS8-1.jpg"
import mens9 from "../../Image/menS9-1.jpg"
import mens10 from "../../Image/menS10-1.jpg"

function Sneakers() {
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
          <Link to="/"><img src={ mens1}/></Link>
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
        <Link to="/"><img src={ mens2}/></Link>
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
        <Link to="/"><img src={ mens3}/></Link>
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
        <Link to="/"><img src={ mens4}/></Link>
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
          <Link to="/"><img src={ mens5}/></Link>
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
        <Link to="/"><img src={ mens6}/></Link>
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
        <Link to="/"><img src={ mens7}/></Link>
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
        <Link to="/"><img src={ mens8}/></Link>
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
          <Link to="/"><img src={ mens9}/></Link>
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
        <Link to="/"><img src={ mens10}/></Link>
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
        <Link to="/"><img src={ mens1}/></Link>
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
        <Link to="/"><img src={ mens2}/></Link>
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
          <Link to="/"><img src={ mens3}/></Link>
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
        <Link to="/"><img src={ mens4}/></Link>
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
        <Link to="/"><img src={ mens5}/></Link>
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
        <Link to="/"><img src={ mens6}/></Link>
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
          <Link to="/"><img src={ mens7}/></Link>
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
        <Link to="/"><img src={ mens8}/></Link>
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
        <Link to="/"><img src={ mens9}/></Link>
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
        <Link to="/"><img src={ mens10}/></Link>
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
          <Link to="/"><img src={ mens1}/></Link>
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
        <Link to="/"><img src={ mens2}/></Link>
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
        <Link to="/"><img src={ mens3}/></Link>
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
        <Link to="/"><img src={ mens4}/></Link>
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

export default Sneakers;

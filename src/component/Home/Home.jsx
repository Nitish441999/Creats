import React, { useEffect } from 'react'
import "./Home.css";
import Card from "./Card/Card"
import cardf1 from "../Image/cardF1.jpg"
import Video from './Video/Video';
import Futher from './FutherCollecton/Futher';
import Carousel from 'react-bootstrap/Carousel';
import AOS from "aos"
import "aos/dist/aos.css"

import menS1 from "../Image/menS1-1.jpg"
import menB1 from "../Image/menB-1.jpg"
import menL1 from "../Image/menL-1.jpg"
import mensc1 from "../Image/menSC1-1.jpg"
import menC1 from "../Image/menC1-1.jpg"

import slider1 from "../Image/slider1.webp"
import slider2 from "../Image/slider2.1.webp"
import slider3 from "../Image/slider2.webp"
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

function Home() {
  useEffect(()=>{
    AOS.init()
  })

  
 
  return (
    <div>
    <div className='' >
    <div className=' top-image'>
    <div id='topimageinfo' data-aos="zoom-in-down" data-aos-duration="1200">
      <h1>Officially Here</h1>
      <p>Handcrafted in Portugal with premium goat leather that hugs and <br/> contours to your foot, these sneakers are the perfect blend of quality <br/> and comfort.</p>
      <button type='submit' className='shop-men'>SHOP MEN'S</button>
      <button type='submit' className='shop-women'>SHOP WOMEN'S</button>
    </div>
    
    </div>

    {/* <div id='topimageinfo'>
      <h1>Officially Here</h1>
      <p>Handcrafted in Portugal with premium goat leather that hugs and <br/> contours to your foot, these sneakers are the perfect blend of quality <br/> and comfort.</p>
      <button type='submit' className='shop-men'>SHOP MEN'S</button>
      <button type='submit' className='shop-women'>SHOP WOMEN'S</button>
    </div> */}
    </div>

   {/* <Details/> */}


   <Card/>
   <Video/>


   

   












   
   

    <div className='sale_item mt-5'>
      <div className='sale_item_info' data-aos="zoom-in-down" data-aos-duration="1200">
      <h1>DHAMAKA DAILS</h1>
      <h2>50% OFF</h2>
      <Link to="">SHOP NOW</Link>

      </div>
    </div>










    <Futher/>
   















      










    <div className='fullPhoto' data-aos="fade-up" data-aos-duration="1200">
     
     <div className='fullinfo'data-aos="zoom-in-down" data-aos-duration="1200">
      <h1>Better Than Before</h1>
      <h5>The Royale has never looked or felt better - we gave our <br/> iconic style a game-changing upgrade.</h5>
      <button type='submit'> Lern More</button>
     </div>
     
  
    </div>


    <Carousel data-bs-theme="dark" className='mt-5'>
      <Carousel.Item className='slider1'>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='slider1'>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        
      </Carousel.Item>
      <Carousel.Item className='slider1'>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel> 
    
   

    </div>
  )
}
      
  

export default Home;

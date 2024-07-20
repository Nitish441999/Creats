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


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Details from '../../Details/Details';
import"./Boots.css"



import boot1 from "../../Image/menB1-1.jpg"
import boot2 from "../../Image/menB2-1.jpg"
import boot3 from "../../Image/menB3-1.jpg"
import boot4 from "../../Image/menB4-1.jpg"
import boot5 from "../../Image/menB5-1.jpg"
import boot8 from "../../Image/menB6-1.jpg"
import boot7 from "../../Image/menB7-1.jpg"
import boot9 from "../../Image/menB8-1.jpg"
import boot10 from "../../Image/menB1-1.jpg"
import boot11 from "../../Image/menB2-1.jpg"
import boot12 from "../../Image/menB3-1.jpg"
import boot13 from "../../Image/menB4-1.jpg"
import boot15 from "../../Image/menB5-1.jpg"
import boot16 from "../../Image/menB6-1.jpg"
import boot17 from "../../Image/menB7-1.jpg"
import boot18 from "../../Image/menB8-1.jpg"
import boot19 from "../../Image/menB1-1.jpg"
import boot20 from "../../Image/menB2-1.jpg"
import boot21 from "../../Image/menB3-1.jpg"
import boot22 from "../../Image/menB4-1.jpg"
import boot23 from "../../Image/menB5-1.jpg"
import boot24 from "../../Image/menB6-1.jpg"
import boot25 from "../../Image/menB7-1.jpg"
import boot6 from "../../Image/menB8-1.jpg"






function Boots() {
    useEffect(()=>{
        AOS.init();
      })

     


      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);










  return (
    <div>



















    <div className=" ScardSec mt-5 " data-aos="zoom-in-up" data-aos-duration="1700">
      <div className="Scard">
        <div className="Simage">
          <Link to="/"><img src={ boot1}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton' onClick={handleShow}>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>
      <div className="Scard">
      <div className="Simage">
        <Link to="/"><img src={ boot2}/></Link>
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
        <Link to="/"><img src={ boot3}/></Link>
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
        <Link to="/"><img src={ boot4}/></Link>
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
          <Link to="/"><img src={boot5}/></Link>
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
        <Link to="/"><img src={ boot6}/></Link>
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
        <Link to="/"><img src={boot7}/></Link>
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
        <Link to="/"><img src={ boot8}/></Link>
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
          <Link to="/"><img src={ boot9}/></Link>
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
        <Link to="/"><img src={ boot10}/></Link>
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
        <Link to="/"><img src={boot11}/></Link>
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
        <Link to="/"><img src={ boot12}/></Link>
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
          <Link to="/"><img src={ boot13}/></Link>
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
        <Link to="/"><img src={ boot15}/></Link>
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
        <Link to="/"><img src={ boot16}/></Link>
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
        <Link to="/"><img src={ boot17}/></Link>
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
          <Link to="/"><img src={ boot18}/></Link>
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
        <Link to="/"><img src={ boot19}/></Link>
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
        <Link to="/"><img src={ boot20}/></Link>
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
        <Link to="/"><img src={ boot21}/></Link>
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
          <Link to="/"><img src={ boot22}/></Link>
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
        <Link to="/"><img src={ boot23}/></Link>
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
        <Link to="/"><img src={ boot24}/></Link>
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
        <Link to="/"><img src={ boot25}/></Link>
        </div>
        <div className="Sinfo ">
          <Link ><h5>Nike Epic React Flyknit</h5></Link>
          <h5><span>&#8377;</span> 2000</h5>
          <button type='submit' className='SBuybutton'>BUy Now</button>
          <button type='submit' className='SAddbutton'>Add To Cart</button>
          

        </div>
      </div>

    </div>
    <Modal show={show} onHide={handleClose} id="">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Details/> </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>


    

      
    </div>
  )
}

export default Boots;

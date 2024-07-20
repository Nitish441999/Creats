import React from 'react'
import "./Details.css"
import Slider from "react-slick";
import cardS1 from '../Image/cardH1.jpg'
import { Link } from 'react-router-dom'

function Details() {
    const settings = {
        dots: true,
        infinite: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2 ,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ],


        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <div>
    <div className='container-fluid' id='Dproduct'>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-6 detailsec '>
               
                <div className="DimageSmall" >
                    <div className='Dimage1'>
                        <Link to=''><img src={cardS1}></img></Link>
                    </div>
                    <div className='Dimage1'>
                        <Link to=''><img src={cardS1}></img></Link>
                    </div>
                    <div className='Dimage1'>
                        <Link to=''><img src={cardS1}></img></Link>
                    </div>
                    <div className='Dimage1'>
                        <Link to=''><img src={cardS1}></img></Link>
                    </div>
                </div>
                <div className="Dimage" >
                    <img src={cardS1}></img>
                </div>
            
            </div>
            <div className='col-md-4 Dimageinfo'>
                <h1>The Charlie Distressed</h1>
                <div className='Dstar'>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
                <h5><span>&#8377;</span> 2000</h5>
                 <p>Choose Size</p>
                <div className='Dsizes'>
                    <Link><div className='size1'>5</div></Link>
                    <Link><div className='size1'>6</div></Link>
                    <Link><div className='size1'>7</div></Link>
                    <Link><div className='size1'>8</div></Link>
                    <Link><div className='size1'>9</div></Link>
                    <Link><div className='size1'>10</div></Link>
                    <Link><div className='size1'>11</div></Link>
                    <Link><div className='size1'>12</div></Link>
                    
                </div>
                <p>Choose Color</p>
                <div className='Dcolor'>
                    <Link><div className='color1' id='Dgrey'></div></Link>
                    <Link><div className='color1' id='Dwhite'></div></Link>
                    <Link><div className='color1' id='Dblack'></div></Link>
                    <Link><div className='color1' id='Dpink'></div></Link>
                    <Link><div className='color1' id='Dred'></div></Link>
                    <Link><div className='color1' id='Dyewllo'></div></Link>
                    
                </div>
                <div className='DimageDec'><p>The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p></div>
                <div className='Dbutton'>
                   
                    <button type='submit' className='Daddbutton'>ADD CART</button>
                    <button type='submit' className='Dbuybutton'>BUY NOW</button>
                </div>

            </div>
        </div>
        <div className='row mt-5 justify-content-center'>
            <div className='col-md-5 Ddescription col-11'>
            <h3>WHAT MAKES THEM GREAT</h3>
                <ul>
                    <li>Handcrafted in Portugal</li>
                    <li>Premium Leather Upper and Lining</li>
                    <li>Subtle GREATS Branding on Tongue and Heel</li>
                    <li>100% Waxed-Cotton Laces</li>
                    <li>Leather Lined Premium Footbed with Antimicrobial Properties and Extra Cushioning</li>
                    <li>Low Profile Margom Outsole made with Natural Rubber</li>
                    <li>Responsibly Sourced Materials from Local Suppliers Reduce our Carbon Footprintr</li>
                </ul>
            </div>
        
            <div className='col-md-5 Ddescription col-11'>
               <h3>DESCRIPTION</h3> 
               <p>Introducing Charlie: inspired by the sporty styles worn by footballers the world over, but polished up and elevated with buttery soft—yet strong—premium Italian leather and natural rubber. Our version is handmade in Italy by expert craftsmen, using the finest locally sourced materials for a lighter environmental footprint that scores big on every level. In a word? GOAL.</p>

            </div>
            
        </div>


        



    </div>
    {/* <!-----------------------------------sagetion card-------------------------------------------------------!> */}


    <div className="slider-container">
      <h2> Resizable Collapsible </h2>
      {/* <button className="button" onClick={() => setWidth(width + 100)}>
        {" "}
        increase{" "}
      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
        {" "}
        decrease{" "}
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        {" "}
        toggle{" "}
      </button> */}
      <div
        style={{
          width:"100%",
          display:" block",
        }}
      >
        <Slider {...settings}>
          <div>
            <div className='Sacard'>
             <h3>1</h3>
            </div>
          </div>

          <div>
               <div className='Sacard'>
                 <h3>1</h3>
               </div>
            </div>

          <div>
            <div className='Sacard'>
            <h3>1</h3>
            </div>
          </div>

          <div>
            <div className='Sacard'>
             <h3>1</h3>
            </div>
          </div>

          <div>
            <div className='Sacard'>
              <h3>1</h3>
            </div>
          </div>

          <div>
            <div className='Sacard'>
             <h3>1</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
      
    </div>
  )
}

export default Details;

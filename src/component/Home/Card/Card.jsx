import React, { useEffect } from 'react'
import"./Card.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import cardH1 from '../../Image/cardH1.jpg'
import cardH2 from '../../Image/cardH2.jpg'
import cardH3 from '../../Image/cardH3.jpg'
import cardH4 from '../../Image/cardH4.jpg'
import cardH5 from '../../Image/cardH5.jpg'
import cardH6 from '../../Image/cardH6.jpg'
import cardH7 from '../../Image/cardH7.jpg'
import AOS from "aos"
import "aos/dist/aos.css"


function Card() {
    useEffect(()=>{
        AOS.init()
      })


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
              breakpoint: 480,
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
        <div className='container-fluid mt-5 mb-5'>
            {/* <div className='row '> */}
                {/* <div className='col-md-12'> */}
                    <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div  className='Shopcard '>
                                <div className='cardImage' data-aos="zoom-in-down" data-aos-duration="1200">
                                <img src={cardH1}></img>
                                <p class="pick">choose size</p>
                                    <div class="sizes">
                                        <div class="size"><Link>5</Link></div>
                                        <div class="size"><Link>6</Link></div>
                                        <div class="size"><Link>7</Link></div>
                                        <div class="size"><Link>8</Link></div>
                                        <div class="size"><Link>9</Link></div>
                                        <div class="size"><Link>10</Link></div>
                                        <div class="size"><Link>11</Link></div>
                                        <div class="size"><Link>12</Link></div>
                                    </div>
                                </div>
                                <div className='cardInfo' data-aos="zoom-in-down" data-aos-duration="1200">
                                    <p className='Wruning'>Women's Running Shoe</p>
                                    <h6>Nike Epic React Flyknit</h6>
                                    <h4><span>&#8377;</span> 2000</h4>
                                    <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                                        
                                    <button type='submit' className='Bybutton'>By Now </button>
                                    <button type='submit' className='Addbutton'>Cart</button>
                                </div>
                            </div>
                            
                        </div>
                        <div >
                            <div className='Shopcard '>
                                    <div className='cardImage' data-aos="zoom-in-down" data-aos-duration="1200">
                                        <img src={cardH5}></img>
                                        <p class="pick">choose size</p>
                                            <div class="sizes">
                                                <div class="size"><Link>5</Link></div>
                                                <div class="size"><Link>6</Link></div>
                                                <div class="size"><Link>7</Link></div>
                                                <div class="size"><Link>8</Link></div>
                                                <div class="size"><Link>9</Link></div>
                                                <div class="size"><Link>10</Link></div>
                                                <div class="size"><Link>11</Link></div>
                                                <div class="size"><Link>12</Link></div>
                                            </div>
                                    </div>
                                    <div className='cardInfo' data-aos="zoom-in-down" data-aos-duration="1200">
                                        <p className='Wruning'>Women's Running Shoe</p>
                                        <h6>Nike Epic React Flyknit</h6>
                                        <h4><span>&#8377;</span> 2000</h4>
                                        <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                                            
                                        <button type='submit' className='Bybutton'>By Now </button>
                                        <button type='submit' className='Addbutton'>Cart</button>
                                    </div>
                            </div>
                        
                        </div>
                        <div >
                            <div className='Shopcard '>
                                <div className='cardImage' data-aos="zoom-in-down" data-aos-duration="1200">
                                <img src={cardH2}></img>
                                <p class="pick">choose size</p>
                                    <div class="sizes">
                                        <div class="size"><Link>5</Link></div>
                                        <div class="size"><Link>6</Link></div>
                                        <div class="size"><Link>7</Link></div>
                                        <div class="size"><Link>8</Link></div>
                                        <div class="size"><Link>9</Link></div>
                                        <div class="size"><Link>10</Link></div>
                                        <div class="size"><Link>11</Link></div>
                                        <div class="size"><Link>12</Link></div>
                                    </div>
                                </div>
                                <div className='cardInfo' data-aos="zoom-in-down" data-aos-duration="1200">
                                    <p className='Wruning'>Women's Running Shoe</p>
                                    <h6>Nike Epic React Flyknit</h6>
                                    <h4><span>&#8377;</span> 2000</h4>
                                    <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                                        
                                    <button type='submit' className='Bybutton'>By Now </button>
                                    <button type='submit' className='Addbutton'>Cart</button>
                            </div>
                            </div>
                        </div>
                        <div >
                            <div className='Shopcard '>

                                <div className='cardImage' data-aos="zoom-in-down" data-aos-duration="1200">
                                <img src={cardH6}></img>
                                <p class="pick">choose size</p>
                                    <div class="sizes">
                                        <div class="size"><Link>5</Link></div>
                                        <div class="size"><Link>6</Link></div>
                                        <div class="size"><Link>7</Link></div>
                                        <div class="size"><Link>8</Link></div>
                                        <div class="size"><Link>9</Link></div>
                                        <div class="size"><Link>10</Link></div>
                                        <div class="size"><Link>11</Link></div>
                                        <div class="size"><Link>12</Link></div>
                                    </div>
                                </div>
                                <div className='cardInfo' data-aos="zoom-in-down" data-aos-duration="1200">
                                    <p className='Wruning'>Women's Running Shoe</p>
                                    <h6>Nike Epic React Flyknit</h6>
                                    <h4><span>&#8377;</span> 2000</h4>
                                    <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                                        
                                    <button type='submit' className='Bybutton'>By Now </button>
                                    <button type='submit' className='Addbutton'>Cart</button>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className='Shopcard '>
                                <div className='cardImage' data-aos="zoom-in-down" data-aos-duration="1200">
                                <img src={cardH3}></img>
                                <p class="pick">choose size</p>
                                    <div class="sizes">
                                        <div class="size"><Link>5</Link></div>
                                        <div class="size"><Link>6</Link></div>
                                        <div class="size"><Link>7</Link></div>
                                        <div class="size"><Link>8</Link></div>
                                        <div class="size"><Link>9</Link></div>
                                        <div class="size"><Link>10</Link></div>
                                        <div class="size"><Link>11</Link></div>
                                        <div class="size"><Link>12</Link></div>
                                    </div>
                                </div>
                                <div className='cardInfo' data-aos="zoom-in-down" data-aos-duration="1200">
                                    <p className='Wruning'>Women's Running Shoe</p>
                                    <h6>Nike Epic React Flyknit</h6>
                                    <h4><span>&#8377;</span> 2000</h4>
                                    <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                                        
                                    <button type='submit' className='Bybutton'>By Now </button>
                                    <button type='submit' className='Addbutton'>Cart</button>
                                </div>
                            </div>
                        </div>
                        <div >
                        <div className='Shopcard '>
                        <div className='cardImage' data-aos="zoom-in-down" data-aos-duration="1200">
                             <img src={cardH7}></img>
                             <p class="pick">choose size</p>
                                <div class="sizes">
                                    <div class="size"><Link>5</Link></div>
                                    <div class="size"><Link>6</Link></div>
                                    <div class="size"><Link>7</Link></div>
                                    <div class="size"><Link>8</Link></div>
                                    <div class="size"><Link>9</Link></div>
                                    <div class="size"><Link>10</Link></div>
                                    <div class="size"><Link>11</Link></div>
                                    <div class="size"><Link>12</Link></div>
                                </div>
                            </div>
                            <div className='cardInfo' data-aos="zoom-in-down" data-aos-duration="1200">
                                <p className='Wruning'>Women's Running Shoe</p>
                                <h6>Nike Epic React Flyknit</h6>
                                <h4><span>&#8377;</span> 2000</h4>
                                <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
                                    
                                <button type='submit' className='Bybutton'>By Now </button>
                                <button type='submit' className='Addbutton'>Cart</button>
                            </div>
                        </div>
                        </div>
                    </Slider>
                    </div>

                {/* </div> */}
            {/* </div> */}
        </div>
      
    </div>
  )
}

export default Card

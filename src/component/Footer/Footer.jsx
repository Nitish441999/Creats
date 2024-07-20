import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import"./Footer.css";
import "aos/dist/aos.css"
import AOS from "aos"

function Footer() {
    useEffect(()=>{
        AOS.init()
      })
    
    
  return (
    <div>
   <div className='container-fluid mt-4'style={{background:"#B3A398"}}>
    <div className='row pt-5 ' data-aos="zoom-in-down" data-aos-duration="1200">
        <div  className='col-md-12 ' id='Footer-top'>
            <h2>NEED A HAND?</h2>
            <p>We're available to call free on 0800 817 4281 between 9am - 5pm</p>
            <p>GMT Mon - Fri, or contact us via Live Chat or email</p>
           <Link> <i class="bi bi-chat-dots"></i></Link>
           <Link> <i class="bi bi-phone"></i></Link>
           <Link>  <i class="bi bi-envelope"></i></Link>
        </div>
    </div>
    <hr />
    <div className='row pt-lg-5 pb-5' data-aos="fade-up" data-aos-duration="1200">
        <div className='col-md-3 footer-p' >
            <ul>
                <h4>GREATS</h4>
                <li><i class="bi bi-arrow-right-short"></i><Link>New Releases</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Best Sellers</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Men's Shoes</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Ladies' Shoes</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Build Your Own MBII</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Accessories</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Shop All Shoes</Link></li>
            </ul>
        </div>
        <div className='col-md-3 footer-p'>
        <ul>
                <h4>THE STORY</h4>
                <li><i class="bi bi-arrow-right-short"></i><Link>Beginnings</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Shoemaking</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Our Mission</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Ambassadors & Partners</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>The Journal</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Careers</Link></li>
            </ul>
            
        </div>
        <div className='col-md-3 footer-p'>
        <ul>
                <h4>YOUR GREATS</h4>
                <li><i class="bi bi-arrow-right-short"></i><Link>About</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Servicing & Repairs</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Warranty</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Finance</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Delivery & Returns</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Privacy Policy</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Cookie Policy</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Terms and Conditions</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Customer Service</Link></li>
                <li><i class="bi bi-arrow-right-short"></i><Link>Contact Us</Link></li>
            </ul>
        </div>
        <div className='col-md-3 footer-p' id='Follow'>
        <ul>
                <h4>FOLLOW GREATS</h4>
                <li><i class="bi bi-facebook"></i><Link>Facebook</Link></li>
                <li><i class="bi bi-twitter"></i><Link>Twitter</Link></li>
                <li><i class="bi bi-instagram"></i><Link>Instagram</Link></li>
                <li><i class="bi bi-youtube"></i><Link>Youtube</Link></li>
                <li><i class="bi bi-linkedin"></i><Link>Linkedin</Link></li>
                <li><i class="bi bi-whatsapp"></i><Link>Whatsapp</Link></li>
            </ul>
        </div>

           
    </div>
   </div>

      
    </div>
  )
}

export default Footer;

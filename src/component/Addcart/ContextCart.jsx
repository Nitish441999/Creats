import React, { useContext, useState } from 'react'
import './Addcart.css';


// import Data from "../Product.json";
import Items from './Items';
import { CartContext } from './Addcart';


function ContextCart() {
    
    const {item, totalAmount, totalItem} = useContext(CartContext);
  return (
    <div>
    <div className='conatiner-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-10' id='Addnav'>
                <div className='Addnavsec1'>
                    <i className="bi bi-arrow-left"></i>
                    <h3>Continue Shopping</h3>
                </div>

                <div className='Addnavsec2'>
                    <i className="bi bi-cart-check"></i>
                    <p>{totalItem}</p>

                </div>
             
          

            </div>
            
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-10 main-cart-sec '>
                <h3>Shooping Cart</h3>
                <p className='total-Items'>you have <span className='total-Item-Count'>{totalItem}</span> Items in your cart</p>
            </div>
        </div>

        <div className='row justify-content-center mt-2'>
            <div className='col-md-10 cart-items'>
            <div className='cart-item-cont'>
            {
                item.map((curItem)=>{
                    return  <Items  key={ curItem.id} {...curItem } />
                })
            }
            <div className='cartTotal'>
                <h3>Cart Total :- <span>{totalAmount}</span></h3>
                <button type='submit'> Buy Now</button>
            </div>
          
            </div>

            </div>
        </div>


        

           
        












        
    </div>
    

    </div>
  )
}

export default ContextCart
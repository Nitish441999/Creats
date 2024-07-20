import React, { createContext, useEffect, useReducer, useState } from 'react'
import './Addcart.css'
import {products} from "../../component/Product";
import ContextCart from './ContextCart';
import { reducer } from './Reducer';

export  const CartContext =  createContext();
const initialState = {
        item: products,
        totalAmount:0,
        totalItem:0,
};
const Addcart = () => {
    
    const  [state, dispatch] = useReducer(reducer, initialState);

    //----------------------------------remove item from cart-------------------------------------
    const removeItem = (id) =>{
        return dispatch ({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    // ---------------------Increment item in cart------------------------------------------------------
    const increment = (id) =>{
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }

     // ---------------------Increment item in cart------------------------------------------------------
     const dicrement = (id) =>{
        return dispatch({
            type: "DICREMENT",
            payload: id,
        })
    }

    //---------------------we will use the effect to update the data-----------------------------------
    useEffect(() =>{
        dispatch({ type: "GET_TOTAL"})
        
    },[state.item]);
  return (
    <div>
    <CartContext.Provider value={{...state, removeItem, increment, dicrement, }}>
    <ContextCart/>
    </CartContext.Provider>








    {/* <div className='conatiner-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-10' id='Addnav'>
                <div className='Addnavsec1'>
                    <i class="bi bi-arrow-left"></i>
                    <h3>Continue Shopping</h3>
                </div>

                <div className='Addnavsec2'>
                    <i class="bi bi-cart-check"></i>
                    <p>7</p>

                </div>
             
          

            </div>
            
        </div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-10 main-cart-sec '>
                <h3>Shooping Cart</h3>
                <p className='total-Items'>you have <span className='total-Item-Count'>7</span> Items in your cart</p>
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
          
            </div>

            </div>
        </div>


        

           
        












        
    </div> */}
      
    </div>
  )
}

export default Addcart

import React, { useContext } from 'react'
import './Addcart.css'
import { CartContext } from './Addcart'

function Items({id, title, price, image, quantity }) {
  const {removeItem, increment, dicrement} = useContext(CartContext)
  return (
    <div>
       <div className='cart-item-info justify-content-evenly mt-4'>
                <div className='product-img item-2'>
                    <img src={image}></img>
                </div>
                <div className='cart-titel item-2'>
                    <h3>{title}</h3>
                    <p> color black</p>
                </div>

                <div className='item-counts item-2'>
                <i class= "bi bi-dash" onClick={() => dicrement(id)}></i>
                <input type='text' placeholder={quantity} />
                <i class="bi bi-plus" onClick={() => increment(id)}></i>
                </div>

                <div className='items-price item-2'>
                <p><span>&#8377;</span>{price}</p>
                </div>

                <div className='remove-item item-2'>
                <i class="bi bi-backspace" onClick={() => removeItem(id)}></i>
                </div>

        </div>
        <hr />
    </div>
  )
}

export default Items;
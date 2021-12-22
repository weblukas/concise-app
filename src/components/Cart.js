import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const cartItems = [
    {
        id: 1,
        title: 'phone',
        price: 599.99,
    },  
      {
        id: 2,
        title: 'tv',
        price: 499.99,
      },
      {
        id: 3,
        title: 'pc',
        price: 699.99,
        
      },
]



const Cart = () => {
    return (
        <div className="cart-container">
           <div>Cart</div> 
           <AiOutlineShoppingCart className='cart-icon'/>
           <span>{cartItems.length}</span>
        </div>
    )
}



export default Cart

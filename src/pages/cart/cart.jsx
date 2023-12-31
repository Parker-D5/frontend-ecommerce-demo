import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const {cartItems, getTotalAmount} = useContext(ShopContext);
    const totalAmount = getTotalAmount();

    const navigate = useNavigate();

  return (
    <div className='cart'>
        <div className="">
            <h1>Your Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map(product => {
                if(cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>
                }
            })}
        </div>
        {totalAmount > 0 ? 
        <div className="checkout">
            
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate('/frontend-ecommerce-demo//')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        : <div className="checkout"><h1>Your cart is empty</h1>
        <button onClick={() => navigate('/frontend-ecommerce-demo//')}>Continue Shopping</button></div>}
    </div>
  )
}

import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1 }));
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1 }));
    }

    const updateCartItemCount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount }));
    };

    const getTotalAmount = () => {
        let total = 0;
        for(const item in cartItems){
            let itemInfo = PRODUCTS.find((product) => product.id == item);
            total += cartItems[item] * itemInfo.price;
        }
        
        return total;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount};



  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

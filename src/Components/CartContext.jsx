import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const AddToCart = (product)=>{
        setCart((prev)=>[...prev,product]);
        alert(product.title);
        
    }  
     

  return (
    <CartContext.Provider value={{cart,AddToCart}}>
        {children}
    </CartContext.Provider>
  )
}

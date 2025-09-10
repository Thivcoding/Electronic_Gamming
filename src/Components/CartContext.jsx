import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);

    const AddToCart = (product)=>{
      Swal.fire({
        title: "Add to Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add To Cart it!"
      }).then((result) => {
        if (result.isConfirmed) {
          setCart((prev)=>[...prev,product]);
          Swal.fire({
            title: "Add To Cart Successfully",
            icon: "success"
          });
        }
      });
        
 
    }  

    const RemoveOnCart = (id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want delete cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          setCart((prev)=>prev.filter((p)=>p.id !==id))
          Swal.fire({
            title: "Delete Successfully!",
            icon: "success"
          });
        }
      });
    }

  return (
    <CartContext.Provider value={{cart,AddToCart,RemoveOnCart}}>
        {children}
    </CartContext.Provider>
  )
}

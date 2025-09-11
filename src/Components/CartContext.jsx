import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [openSidCart,setOpenSidCart] =useState();

const AddToCart = (product) => {
    Swal.fire({
      title: "🎮 Add this item to your cart?",
      text: `${product.title} will be added to your shopping cart.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10B981", // Emerald green
      cancelButtonColor: "#EF4444",  // Red
      confirmButtonText: "✅ Yes, add it!",
      cancelButtonText: "❌ Cancel",
      background: "#1E293B", // Dark blue/gray
      color: "#F1F5F9", // Light text
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prev) => [...prev, product , ]);
        setOpenSidCart(true);
        Swal.fire({
          title: "🛒 Added to Cart!",
          text: `${product.title} has been successfully added.`,
          icon: "success",
          confirmButtonColor: "#3B82F6", // Blue
          background: "#0F172A", // Dark background
          color: "#E2E8F0",
          timer: 2000,
          showConfirmButton: false,
          toast: true,
          position: "top-start",
        });
      }
    });
  };


 const RemoveOnCart = (id) => {
  Swal.fire({
    title: "⚠️ Remove Item?",
    text: "This item will be deleted from your cart.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#EF4444", // Red
    cancelButtonColor: "#64748B",  // Gray
    confirmButtonText: "🗑️ Yes, remove it!",
    cancelButtonText: "❌ Cancel",
    background: "#1E293B", // Dark background
    color: "#F1F5F9",
  }).then((result) => {
    if (result.isConfirmed) {
      setCart((prev) => prev.filter((p) => p.id !== id));

      Swal.fire({
        title: "🗑️ Item Removed!",
        text: "The product has been deleted from your cart.",
        icon: "success",
        background: "#0F172A",
        color: "#E2E8F0",
        confirmButtonColor: "#3B82F6",
        timer: 2000,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
      });
    }
  });
};

const OpenSidbarCart = ()=>{
    setOpenSidCart(false)
}

  return (
    <CartContext.Provider value={{cart,AddToCart,RemoveOnCart,OpenSidbarCart,openSidCart}}>
        {children}
    </CartContext.Provider>
  )
}

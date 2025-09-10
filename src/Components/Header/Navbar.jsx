import React, { useContext, useState } from 'react'
import logo from '../../assets/icon/logo.svg'
import { menu_bottom, menu_top } from '../../Data'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { CartContext } from '../CartContext';

const Navbar = () => {
    const [OpenSearch,setOperSearch] = useState(false);
    const [OpenCart,setOpenCart] = useState(false);
    const [OpenSidbar,setOpenSidbar] = useState(false);

    const {cart,RemoveOnCart} = useContext(CartContext)

  return (
    <header className='w-full shadow-md h-[130px] lg:h-[200px] bg-gray-500'>
      
        {/* top  */}
        <h1 className='w-full flex justify-center  items-center text-white
         font-bold text-xs h-10 lg:h-[20%] bg-red-500'>
            ENJOY FAST & FREE SHIPPING STOREWIDE!
        </h1>

        {/* nav-top */}
        <nav className='w-full h-[80%] lg:h-[50%] flex justify-between items-center px-5 lg:px-14 bg-black'>
           
            <div className='flex lg:hidden '> 
              {/* icon bar  */}
              <FaBars className=' text-white text-3xl mr-3' onClick={()=>setOpenSidbar(!OpenSidbar)} />

              {/* icon search */}
              <IoMdSearch className=' text-white text-4xl ' onClick={()=>setOperSearch(!OpenSearch)} />
            </div>
          
            {/* logo */}
            <a className='lg:w-[15%] h-full flex items-center' href="">
              <img src={logo} alt="logo" />
            </a>

            {/* nav-right */}
            <div className='lg:w-[85%] flex h-full'>

                {/* menu */}
                <ul className='lg:w-[40%] h-full hidden lg:flex items-center justify-evenly'>
                  {menu_top.map((e)=>(
                    <li key={e.name}>
                        <a href={e.link} className='text-white hover:text-red-500 font-bold text-xl'>
                           {e.name}
                        </a>
                    </li>
                  ))}
                </ul>

                {/* Input Search */}
                <div className='lg:w-[40%] hidden lg:flex h-full py-6 relative'>
                  <input type="text" className='w-full h-full border-0 outline-0
                   text-gray-500 bg-white rounded-sm px-6 text-sm' 
                    placeholder='Search Product Or Brand'
                    onClick={()=>setOperSearch(!OpenSearch)}
                  />
                  {/* icon search */}
                  <IoMdSearch className='absolute text-black top-9 text-3xl right-5' />
                </div>
                
                {/* Icon  */}
                <div className='lg:w-[20%] flex items-center lg:gap-0 gap-3 justify-around h-full'>
                    <h1 className='text-white hidden lg:flex'>English</h1>
                    <FaRegUser className='text-2xl cursor-pointer text-white' />
                    <FaRegHeart className='text-2xl hidden lg:flex  cursor-pointer text-white' />

                    <div className='relative '>
                        <FiShoppingCart 
                        onClick={()=>setOpenCart(!OpenCart)}
                        className='text-2xl cursor-pointer text-white ' />
                        <div 
                          onClick={()=>setOpenCart(!OpenCart)}
                        className='w-5 h-5 flex items-center justify-center
                        text-white bg-red-500 cursor-pointer rounded-full absolute -right-3 -top-3'>
                          {cart.length}
                        </div>
                    </div>

                </div>

            </div>

        </nav>

        {/* Category */}
        <nav className='w-full h-[30%] bg-white'>
              <ul className='w-[80%] hidden lg:flex justify-around items-center m-auto h-full '>
                  {menu_bottom.map((e)=>(
                    <li key={e.name}>
                      <a href={e.link} className='text-sm font-bold' >{e.name}</a>
                    </li>
                  ))}
              </ul>
        </nav>

        {/* OpenSearch */}
        <div className={`w-full h-screen fixed  top-0 left-0  z-50 transition-all duration-500 ease-in-out
                ${OpenSearch ? " bg-black/40  pointer-events-auto" : " pointer-events-none"}`} onClick={()=>setOperSearch(false)}>
        </div>
        <div className={`w-[400px] h-screen bg-white shadow-2xl fixed  z-50 top-0 lg:left-0 right-0 
                ${OpenSearch ? "translate-x-0" : "lg:-translate-x-full translate-x-full" }
                  transition-all duration-500 ease-in-out `}>

              {/* inputSearch */}
              <div className='w-full h-24  border-b relative'>
                  {/* icon search */}
                      <IoMdSearch className='absolute text-black top-9 text-3xl left-5' />
                      <input type="text" className='w-full px-16 h-full border-0 outline-0' 
                      placeholder='What Are You Looking For?' />
                      <IoCloseSharp className='absolute text-black cursor-pointer top-9 text-3xl right-5'
                        onClick={()=>setOperSearch(false)}
                      />
              </div>
        </div>

        {/* OpenCart */}
        <div className={`w-full h-screen fixed  top-0 left-0 z-50 transition-all duration-500 ease-in-out
                ${OpenCart ? " bg-black/40  pointer-events-auto" : " pointer-events-none"}`} onClick={()=>setOpenCart(false)}>
                    
        </div>
        <div className={`lg:w-[500px] w-full h-screen bg-white shadow-2xl  z-50 fixed top-0 right-0 
                          ${OpenCart ? "translate-x-0" : "translate-x-full" }
                            transition-all duration-500 ease-in-out `}>

              <div className='w-full h-16  border-b relative'>
                      <IoCloseSharp className='absolute text-black cursor-pointer top-4 text-3xl right-5'
                        onClick={()=>setOpenCart(false)}
                      />
                      <div className='w-full h-full px-5 flex items-center '>
                          <RiShoppingBag4Line className='text-3xl me-2'  />
                        <h1 className='font-bold text-xl'>{cart.length} ITEM</h1>
                      </div>
              </div>

              {/* content Cart */}
              <div className='w-full'>
                {cart.length == 0 
                ?(
                  <p className='text-center py-10 text-xl'>Products is Not Found Item .!</p>
                ):(
                  <ul className='w-full p-4 space-y-3 '>
                      {cart.map((item)=>(
                        <li className='flex items-center justify-between bg-gray-300 p-2 
                                        shadow-sm shadow-black rounded-md'>
                            <img className='w-20 h-20 rounded-md' src={item.image} alt="" />
                            <div>
                              <h1 className='text-xl text-blue-500 font-bold'>{item.title}</h1>
                              <del className='text-red-600 mr-4 font-bold'>{item.priceOld}</del>
                              <span className='text-slate-700 font-bold'>{item.priceDiscount}</span>
                            </div>
                            <button
                            onClick={()=>RemoveOnCart(item.id)}
                            className='py-2 text-white cursor-pointer hover:shadow-amber-300 shadow-md
                            px-4 bg-red-500 rounded-md hover:scale-105 transition-all duration-300 ease-in-out'>Remove Cart</button>
                        </li>
                       
                      ))}
                  </ul>
                )}
              </div>

        </div>
           
        {/* OpenSidbar */}
            <div className={`lg:w-[500px] w-full z-50 h-screen bg-white shadow-2xl fixed top-0 left-0 
                ${OpenSidbar ? "translate-x-0" : "-translate-x-full" }
                  transition-all duration-500 ease-in-out `}>

                  <div className='w-full h-16  border-b relative'>
                          <IoCloseSharp className='absolute text-black cursor-pointer top-4 text-3xl right-5'
                            onClick={()=>setOpenSidbar(false)}
                          />
                          <div className='w-full h-full px-5 flex items-center '>
                              <RiShoppingBag4Line className='text-3xl me-2'  />
                            <h1 className='font-bold text-xl'>ETEC CENTER</h1>
                          </div>
                  </div>
            </div>

    </header>
  )
}

export default Navbar
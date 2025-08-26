import React, { useState } from 'react'
import logo from '../../assets/icon/logo.svg'
import { menu_bottom, menu_top } from '../../Data'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [OpenSearch,setOperSearch] = useState(false);
  return (
    <header className='w-full shadow-md h-[200px] bg-gray-500'>
      
        {/* top  */}
        <h1 className='w-full flex justify-center items-center text-white
         font-bold text-xs h-[20%] bg-red-500'>
            ENJOY FAST & FREE SHIPPING STOREWIDE!
        </h1>

        {/* nav-top */}
        <nav className='w-full h-[50%] flex px-14 bg-black'>
            {/* logo */}
            <a className='w-[15%] h-full flex items-center' href="">
              <img src={logo} alt="logo" />
            </a>

            {/* nav-right */}
            <div className='w-[85%] flex h-full'>

                {/* menu */}
                <ul className='w-[40%] h-full flex items-center justify-evenly'>
                  {menu_top.map((e)=>(
                    <li key={e.name}>
                        <a href={e.link} className='text-white hover:text-red-500 font-bold text-xl'>
                           {e.name}
                        </a>
                    </li>
                  ))}
                </ul>

                {/* Input Search */}
                <div className='w-[40%] h-full py-6 relative'>
                  <input type="text" className='w-full h-full border-0 outline-0
                   text-gray-500 bg-white rounded-sm px-6 text-sm' 
                    placeholder='Search Product Or Brand'
                    onClick={()=>setOperSearch(!OpenSearch)}
                  />
                  {/* icon search */}
                  <IoMdSearch className='absolute text-black top-9 text-3xl right-5' />
                </div>
                
                {/* Icon  */}
                <div className='w-[20%] flex items-center justify-around h-full'>
                    <h1 className='text-white'>English</h1>
                    <FaRegUser className='text-2xl cursor-pointer text-white' />
                    <FaRegHeart className='text-2xl cursor-pointer text-white' />

                    <div className='relative '>
                        <FiShoppingCart className='text-2xl cursor-pointer text-white ' />
                        <div className='w-5 h-5 flex items-center justify-center
                        text-white bg-red-500 cursor-pointer rounded-full absolute -right-3 -top-3'>
                          1
                        </div>
                    </div>

                </div>

            </div>

        </nav>

        {/* Category */}
        <nav className='w-full h-[30%] bg-white'>
              <ul className='w-[80%] flex justify-around items-center m-auto h-full '>
                  {menu_bottom.map((e)=>(
                    <li key={e.name}>
                      <a href={e.link} className='text-sm font-bold' >{e.name}</a>
                    </li>
                  ))}
              </ul>
        </nav>

        {/* OpenSearch */}
        <div className={`w-[400px] h-screen fixed top-0 left-0 
        ${OpenSearch ? "translate-x-0" : "-translate-x-full" }
          transition-all duration-500 ease-in-out bg-sky-600`}>

          {/* inputSearch */}
          <div className='w-full h-24 bg-white border-b relative'>
              {/* icon search */}
                  <IoMdSearch className='absolute text-black top-9 text-3xl left-5' />
                  <input type="text" className='w-full px-16 h-full border-0 outline-0' 
                  placeholder='What Are You Looking For?' />
                  <IoCloseSharp className='absolute text-black cursor-pointer top-9 text-3xl right-5'
                    onClick={()=>setOperSearch(false)}
                  />
          </div>
        </div>

    </header>
  )
}

export default Navbar
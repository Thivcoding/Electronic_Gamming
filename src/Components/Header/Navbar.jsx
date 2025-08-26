import React from 'react'
import logo from '../../assets/icon/logo.svg'
import { menu_top } from '../../Data'
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <header className='w-full h-[200px] bg-gray-500'>
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
                  placeholder='Search Product Or Brand'/>
                  {/* icon search */}
                  <IoMdSearch className='absolute text-black top-9 text-3xl right-5' />
                </div>

            </div>

        </nav>
    </header>
  )
}

export default Navbar
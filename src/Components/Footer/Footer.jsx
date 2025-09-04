import React from 'react'
import logo from '../../assets/icon/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full mt-32 px-14 relative bg-blue-900'>
        {/* search your email */}
        <div className='w-[90%] absolute left-[75px] rounded-2xl -top-20 h-[180px] bg-blue-500'>
            <div className='w-full h-full flex items-center justify-between px-10'>
                 <h1 className='text-4xl font-bold text-white '>Subcribe to our news</h1>

                <div className='w-[60%] flex justify-between items-center'>
                    <input type="text" className='w-[75%] py-3 border-0 bg-white/30 outline-0 shadow shadow-white
                    rounded-3xl px-6 text-xl text-white focus:bg-white focus:shadow-black
                    focus:text-blue-500 transition-all duration-300 ease-in-out' placeholder='Enter Your Email...!?'/>
                    <button className='bg-white py-3 text-xl px-12 text-gray-800
                     hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out 
                      cursor-pointer rounded-3xl'>Subcribe</button>
                </div>
                
            </div>
        </div>

        
        <div className='w-full h-[400px] pt-28'>
            {/* logo and media */}
            <div className='w-full flex justify-between items-center h-[150px] '>
                    <img src={logo} className='h-full w-[300px] ' alt="" />
                    <div className='flex items-center gap-5 h-full'>
                        <FaFacebook color='white' size={40} className='cursor-pointer' />
                        <FaFacebookMessenger color='white' size={40} className='cursor-pointer'  />
                        <FaInstagramSquare  color='white' size={40} className='cursor-pointer' />
                        <FaTiktok color='white' size={40} className='cursor-pointer' />
                        <FaTelegram color='white' size={40} className='cursor-pointer' />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
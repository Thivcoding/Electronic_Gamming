import React from 'react'
import logo from '../../assets/icon/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
   <div className='w-full h-auto'>
         <div className='w-full mt-32 px-6 md:px-14 relative bg-blue-900'>
            {/* search your email */}
            <div className='w-[90%] absolute md:left-[45px] lg:left-[75px] rounded-2xl -top-28 md:-top-22 lg:-top-20 h-[230px] md:h-[180px] bg-blue-500'>
                <div className='w-full h-full flex flex-wrap  items-center justify-between px-5 py-5 md:px-10'>
                    <h1 className='text-3xl pb-4 md:pb-0 md:text-4xl  font-bold text-white '>Subcribe to our news</h1>

                    <div className='w-full gap-5 lg:w-[60%] flex-wrap md:flex-nowrap flex  justify-between  items-center'>
                        <input type="text" className='w-full lg:w-[75%] py-3 border-0 bg-white/30 outline-0 shadow shadow-white
                        rounded-3xl px-6 text-xl text-white focus:bg-white focus:shadow-black
                        focus:text-blue-500 transition-all duration-300 ease-in-out' placeholder='Enter Your Email...!?'/>
                        <button className='bg-white py-3 ms-16 md:ms-0 text-xl px-12 text-gray-800
                        hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out 
                        cursor-pointer rounded-3xl'>Subcribe</button>
                    </div>
                    
                </div>
            </div>

            <div className='w-full h-auto pt-32 lg:pt-28'>
                {/* logo and media */}
                <div className='w-full flex justify-between items-center h-[80px] lg:h-[140px] '>
                        <img src={logo} className='h-full w-[120px] md:w-[300px] ' alt="" />
                        <div className='flex items-center gap-3 md:gap-5 h-full'>
                            <FaFacebook color='white'  className='cursor-pointer text-3xl md:text-4xl' />
                            <FaFacebookMessenger color='white' className='cursor-pointer text-3xl md:text-4xl'  />
                            <FaInstagramSquare  color='white' className='cursor-pointer text-3xl md:text-4xl' />
                            <FaTiktok color='white' className='cursor-pointer text-3xl md:text-4xl' />
                            <FaTelegram color='white' className='cursor-pointer text-3xl md:text-4xl' />
                        </div>
                </div>
                {/* information website */}
                <div className="w-full flex flex-wrap pb-10 md:pt-4 lg:pt-0 md:h-[250px] bg-blue-900 md:px-10">
                {/* SHOP */}
                <div className="w-full md:w-[25%] h-full">
                    <h1 className="text-2xl font-bold text-white uppercase">Shop</h1>
                    <ul className="w-full pt-5 text-gray-300">
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Gaming Laptops</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Consoles</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Accessories</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Gift Cards</a></li>
                    </ul>
                </div>

                {/* SUPPORT */}
                <div className="w-full md:w-[25%] h-full">
                    <h1 className="text-2xl font-bold text-white uppercase">Support</h1>
                    <ul className="w-full pt-5 text-gray-300">
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Order Tracking</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Returns & Refunds</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Technical Support</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Warranty</a></li>
                    </ul>
                </div>

                {/* COMMUNITY */}
                <div className="w-full md:w-[25%] h-full">
                    <h1 className="text-2xl font-bold text-white uppercase">Community</h1>
                    <ul className="w-full pt-5 text-gray-300">
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Forums</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Events</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Gaming Blog</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Newsletter</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="w-full md:w-[25%] h-full">
                    <h1 className="text-2xl font-bold text-white uppercase">Contact</h1>
                    <ul className="w-full pt-5 text-gray-300">
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">About Us</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Careers</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Privacy Policy</a></li>
                    <li className="py-1"><a href="#" className="text-lg hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
                </div>

            </div>
                
        </div>
        {/* buil by admin */}
        <h1 className='w-full bg-blue-700 text-center text-2xl text-white py-8'>
                © 2025 By <span className='text-yellow-400 font-bold'>HOK VANTHIV</span> . All rights reserved.
        </h1>
   </div>
  )
}

export default Footer
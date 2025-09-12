import React from 'react'
import { keyboardProducts } from '../../../Data'
import 'animate.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Cate_Keyboards = () => {
     const Navigate = useNavigate();
  return (
    <div className='w-full h-auto px-6 md:px-14'>
         <div className='w-full flex items-center justify-between pt-10 border-b py-3'>
            <h1 className='text-3xl  text-center font-bold  uppercase '>Product Of Category Keyboards</h1>
            <Link className=' bg-blue-500 px-5 py-2 rounded-sm 
                text-white font-bold cursor-pointer' to={'/home'}>Back To Home</Link>
        </div>

        <div className='w-full flex flex-wrap gap-8 md:gap-6 lg:gap-9 py-10 h-auto'>
                {/* card */}
                {keyboardProducts.map((p,i)=>(
                    <div key={p.id} 
                        onClick={()=>Navigate(`/keyboards/${p.id}`)}
                    className='w-full md:w-[31%] lg:w-[23%] h-[450px] md:h-[480px] lg:h-[450px] shadow group transition-all duration-500 hover:scale-105 ease-in-out
                    cursor-pointer  shadow-black/70 rounded-xl overflow-hidden animate__animated animate__zoomIn'
                     style={{ animationDelay: `${i * 0.1}s`,animationDuration: "0.8s"  }}
                    >
                        {/* image */}
                        <div className='w-full h-[65%] p-5'>
                            <img src={p.image} className='w-full h-full rounded-md' alt={p.title} />
                        </div>
                        {/* detail */}
                        <div className='w-full border-t h-[35%] p-5 py-0 '>
                            <h1 className='text-xl pt-3 font-bold m-0 '>{p.title}</h1>
                            <p className=' py-2 gap-1 flex'>
                                <FaStar color='red'/>
                                <FaStar color='red'/>
                                <FaStar color='red'/>
                                <FaStar color='red'/>
                                <FaRegStar />
                            </p>
                            <div className='w-full flex justify-between items-center pb-3'>
                                <span className='text-xl'>{p.priceOld} <br />
                                <del className='text-sm text-gray-500'>{p.priceDiscount}</del></span>
                                <button className='bg-blue-600 group-hover:bg-red-500 transition-all duration-300 ease-in-out py-2 px-8 rounded-xl text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Cate_Keyboards
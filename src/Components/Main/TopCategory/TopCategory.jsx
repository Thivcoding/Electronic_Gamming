import React from 'react'
import { Topcategories } from '../../../Data'
import benner_mask_1 from '../../../assets/Images/Benner-Mask-1.webp'
import benner_mask_2 from '../../../assets/Images/Benner-Mask-2.webp'
import { useNavigate } from 'react-router-dom'

const TopCategory = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-auto py-16 px-6 md:px-14'>
        <h1 className='text-3xl font-bold'>
            <span className='text-red-600 me-2'>TOP</span>
            CATEGORY
        </h1>

        {/* main-card */}
        <div className='w-full h-auto flex gap-5 md:gap-7 flex-wrap py-10'>
            {/* card */}
            {Topcategories.map((cate)=>(
                <div
                    onClick={()=>navigate(cate.link)}
                key={cate.id} className='w-full md:w-[48%] lg:w-[32%]  flex lg:h-[300px]  cursor-pointer rounded-xl group bg-gray-200 '>
                    {/* card-detail */}
                    <div className='w-1/2 h-full pt-10 ps-10 '>
                        <button className='bg-white px-5 py-1 text-sm rounded-md text-gray-500 group-hover:bg-red-500
                        group-hover:text-white  transition-all duration-300 ease-in-out'>{cate.products} Product</button>
                        <h1 className='text-4xl hover:text-red-500 mt-3 font-bold transition-all duration-300 ease-in-out'>{cate.title1}<br />
                        <span>{cate.title2}</span></h1>
                    </div>
                    {/* card-image */}
                    <div className='w-1/2 h-full  pe-5 pt-10 pb-3'>
                        <img className='w-full h-full ' src={cate.image} alt="controller" />
                    </div>
                    
                </div>
            ))}

        </div>


        <div className='w-full flex flex-wrap gap-7 h-auto mt-16'>
            {/* left  */}
            <div className='w-full lg:w-[49%] h-[260px] relative group bg-red-300 rounded-xl overflow-hidden'>
                 <div className='w-full h-full'>
                    <img className='w-full h-full transform group-hover:scale-110 transition-all 
                    duration-300 ease-in-out  object-cover' src={benner_mask_1 } alt="" />
                </div>
                <div className='w-full h-full absolute top-0 left-0 p-5 bg-black/20'>
                    <h3 className='text-2xl text-white font-bold'>THE ULTIMATE PLAY</h3>
                    <h1 className='text-5xl py-2 font-bold text-white'>GEFORCE RTX <br />
                        3060TI 
                    </h1>
                    <h2 className='text-green-400 text-2xl font-bold '>$599.99</h2>
                    <div className='w-full flex justify-end'>
                        <button className='bg-white py-2 px-7 font-bold hover:bg-red-500 
                        rounded-md hover:text-white cursor-pointer transition-all duration-300 
                        ease-in-out'>Shop Now</button>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className='w-full lg:w-[49%] h-[260px] relative group bg-red-300 rounded-xl overflow-hidden'>
                <div className='w-full h-full'>
                    <img className='w-full h-full transform group-hover:scale-110 transition-all 
                    duration-300 ease-in-out  object-cover' src={benner_mask_2 } alt="" />
                </div>
                <div className='w-full h-full absolute  top-0 left-0 p-5 '>
                    <h3 className='text-2xl text-white font-bold'>POWER TO THE CORE</h3>
                    <h1 className='text-5xl py-2 font-bold text-white'>AORUS ELITE<br />
                        AX AM5
                    </h1>
                    <h2 className='text-sky-400 text-2xl font-bold '>$199.99</h2>
                    <div className='w-full flex justify-end'>
                        <button className='bg-white py-2 px-7 font-bold hover:bg-red-500 
                        rounded-md hover:text-white cursor-pointer transition-all duration-300 
                        ease-in-out'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCategory
import React from 'react'
import controller from '../../../assets/Images/controller.webp'
import { Topcategories } from '../../../Data'

const TopCategory = () => {
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
                <div className='w-full md:w-[48%] lg:w-[32%]  flex lg:h-[300px] cursor-pointer rounded-xl group bg-gray-200 '>
                    {/* card-detail */}
                    <div className='w-1/2 h-full pt-10 ps-10 '>
                        <button className='bg-white px-5 py-1 text-sm rounded-md text-gray-500 group-hover:bg-red-500
                        group-hover:text-white  transition-all duration-300 ease-in-out'>{cate.products} Product</button>
                        <h1 className='text-4xl hover:text-red-500 mt-3 font-bold transition-all duration-300 ease-in-out'>{cate.title1}<br />
                        <span>{cate.title2}</span></h1>
                    </div>
                    {/* card-image */}
                    <div className='w-1/2 h-full  pe-5 pt-20 pb-3'>
                        <img className='w-full h-full ' src={controller} alt="controller" />
                    </div>
                    
                </div>
            ))}

        </div>
    </div>
  )
}

export default TopCategory
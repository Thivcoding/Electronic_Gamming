import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import {  keyboardProducts } from '../../../../Data';
import { CartContext } from '../../../CartContext';

const DetailKeyboards = () => {
     const {id} = useParams(); //{id : cpu3}

    const ResultProduct = keyboardProducts.find((p)=>p.id === id);

     const {AddToCart} = useContext(CartContext);
  return (
     <div className='w-full px-5 lg:px-48 py-8'>
        <div className='w-full md:h-[430px] flex flex-wrap bg-slate-500 shadow-sm shadow-sky-500 overflow-hidden rounded-xl '>
            {/* image */}
            <div className='w-full md:w-1/2 h-full p-3 border-r-2 border-white'>
                <img src={ResultProduct.image} className='w-full shadow-sm shadow-white h-full rounded-xl ' alt="" />
            </div>
            {/* detail */}
            <div className='w-full md:w-1/2 h-full text-white p-5 pb-7 md:p-10'>
                <h1 className='text-2xl font-bold'>{ResultProduct.cate}</h1>
                <h1 className='text-3xl font-bold py-3'>{ResultProduct.title}</h1>
                <p className='text-[20px] '>{ResultProduct.description}</p>
                {/* button */}
                <div className='w-full h-auto flex justify-around mt-4 md:mt-14'>
                    <button 
                    onClick={()=>AddToCart(ResultProduct)}
                    className='bg-blue-500 hover:translate-y-1  hover:shadow-md shadow-red-500/80 transition-all duration-300 ease-in-out cursor-pointer px-6 md:px-8 py-3 text-white rounded-xl'>Add To Cart</button>
                    <Link to={'/home'} className='bg-red-500 hover:translate-y-1  hover:shadow-md shadow-sky-500/80 transition-all duration-300 ease-in-out cursor-pointer px-6 md:px-8 py-3 text-white rounded-xl'>Back To Product</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailKeyboards
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoriesAllInButton } from '../../../Data';
import { CartContext } from '../../CartContext';

const DetailBestSeller = () => {
    const {id} = useParams(); //{id : cpu3}
    
    let product;
    for(const cate of categoriesAllInButton){
        product = cate.products.find((p)=>p.id == id);
        if(product)break;
    }

    const {AddToCart} = useContext(CartContext);
    
  return (
    <div className='w-full px-48 py-8'>
        <div className='w-full h-[430px] flex flex-wrap bg-slate-500 shadow-sm shadow-sky-500 overflow-hidden rounded-xl '>
            {/* image */}
            <div className='w-1/2 h-full p-3 border-r-2 border-white'>
                <img src={product.image} className='w-full shadow-sm shadow-white h-full rounded-xl ' alt="" />
            </div>
            {/* detail */}
            <div className='w-1/2 h-full text-white  p-10'>
                <h1 className='text-2xl font-bold'>Category</h1>
                <h1 className='text-3xl font-bold py-3'>{product.title}</h1>
                <p className='text-[20px] '>{product.description}</p>
                {/* button */}
                <div className='w-full h-auto flex justify-around mt-14'>
                    <button 
                    onClick={()=>AddToCart(product)}
                    className='bg-blue-700 hover:translate-y-1  hover:shadow-md shadow-red-500/80 transition-all duration-300 ease-in-out cursor-pointer px-8 py-3 text-white rounded-xl'>Add To Cart</button>
                    <Link to={'/'} className='bg-red-700 hover:translate-y-1  hover:shadow-md shadow-sky-500/80 transition-all duration-300 ease-in-out cursor-pointer px-8 py-3 text-white rounded-xl'>Back To Product</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailBestSeller
import React from 'react'
import { useParams } from 'react-router-dom'
import { categoriesAllInButton } from '../../../Data';

const DetailBestSeller = () => {
    const {id} = useParams(); //{id : cpu3}
    
    let product;
    for(const cate of categoriesAllInButton){
        product = cate.products.find((p)=>p.id == id);
        if(product)break;
    }
    
  return (
    <div>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
    </div>
  )
}

export default DetailBestSeller
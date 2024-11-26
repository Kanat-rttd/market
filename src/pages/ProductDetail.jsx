import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';

function ProductDetail() {
    const {id} = useParams();
    const { products } = useContext(ProductContext)
    const [product, setProduct] = useState()
  
  return (
    <div> 
        {products[id - 1].name}
    </div>
  )
}

export default ProductDetail
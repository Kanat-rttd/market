import React, {useContext} from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const ProductCard = ({product}) => {

  const { addToCart } = useContext(CartContext)

  return (
      <div className='bg-white p-2 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="#" className='w-full h-96 object-contain mb-4'/>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
          </Link>
          <p className='text-gray-500'>${product.price}</p>
          <div className='flex items-center mt-2'>
              <FaStar className='text-yellow-500'></FaStar>
              <FaStar className='text-yellow-500'></FaStar>
              <FaStar className='text-yellow-500'></FaStar>
              <FaStar className='text-yellow-500'></FaStar>
          </div>
          <div className='
              absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-base
              rounded-full hover:w-32 hover:bg-red-700 transition-all'
              onClick={() => addToCart(product)}
              >
              <span className='group-hover:hidden'>+</span>
              <span className='hidden group-hover:block'>Add to Cart</span>
          </div>
      </div>
  )
}

export default ProductCard
import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import NoProductImage from '../assets/images/NoProduct.png'
import ProductContext from '../context/ProductContext'

function FilterData() {
    const { filteredProducts } = useContext(ProductContext);

    console.log()

  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24 '>
        {filteredProducts.length > 0 ? 
        <>
            <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {filteredProducts.map(((product) =>(
                    <ProductCard product={product}/>
                )))}
            </div>
        </>
        : 
        <div className='flex items-center justify-center'>
            <img src={NoProductImage} alt="#" className=''/>
        </div>
        }
    </div>
  )
}

export default FilterData
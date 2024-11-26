import React from 'react';
import menCategory from '../assets/images/image1.png';
import womanCategory from '../assets/images/image2.png';
import kidsCategory from '../assets/images/image3.png';

const categories = [
    {
        title: "Men",
        imageUrl: menCategory,
    },
    {
        title: "Woman",
        imageUrl: womanCategory,
    },
    {
        title: "Kids",
        imageUrl: kidsCategory,
    },
];

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20'>
        {categories.map((category, index) => (
            <div className='relative  transform transition-transform duration-300 hover:scale-105 cursor-pointer' key={index}>
                <img className='w-full h-full object-cover rounded-lg shadow-md' src={category.imageUrl}/>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold text-black '>{category.title}</p>
                    <p className='text-black'>View all</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection
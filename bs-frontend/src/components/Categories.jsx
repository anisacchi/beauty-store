import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { categories } from '../assets';

const Categories = () => (
  <div className='flex flex-col justify-center items-center'>
    <div className='m-4 md:m-10 lg:max-w-[1024px]'>
      <div className='bg-gradient-to-b from-secondary-100 to-primary-100'>
        <div className='ml-1 pl-2 font-bold text-2xl bg-neutral-50'>
          Categories
        </div>
      </div>
      <div className='pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center'>
        {categories.map((category) => (
          <div key={category.name} className='flex justify-center items-center aspect-square w-full bg-neutral-50 border rounded-lg border-primary-100 hover:drop-shadow-primary'>
            <LazyLoadImage src={category.image} alt={category.desc} className='p-2' />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Categories;

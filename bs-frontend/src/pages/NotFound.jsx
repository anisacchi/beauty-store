import React from 'react';
import { ShoppingCart } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { bgNotFound } from '../assets';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen w-screen'>
      <img src={bgNotFound} alt='not found background' className='h-full min-w-full object-cover' />
      <div className='absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div className='text-5xl font-bold'>Whoops</div>
          <div className='text-xl font-bold text-primary-200'>404 PAGE NOT FOUND</div>
          <div className='text-center'>Sorry, we could&apos;nt find the page you were looking for.</div>
          <button
            type='button'
            onClick={() => navigate('/products')}
            className='flex gap-2 justify-center items-center px-4 py-2 rounded-lg border border-neutral-900 bg-primary-100 hover:bg-primary-50'
          >
            <ShoppingCart size={24} />
            <span>Back shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

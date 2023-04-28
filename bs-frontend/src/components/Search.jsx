import React, { useState } from 'react';
import { MagnifyingGlass, ArrowLeft } from '@phosphor-icons/react';

const Search = () => {
  const [mobileSearchfield, setMobileSearchfield] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setMobileSearchfield(true)}
        className='flex justify-center items-center px-2 py-2 ml-auto mr-2 rounded-full md:hidden text-neutral-900 bg-neutral-50'
      >
        <MagnifyingGlass size={24} />
      </button>
      <div className='hidden md:block'>
        <div className='flex border border-neutral-900 rounded-full'>
          <input
            type='search'
            placeholder='Search product...'
            className='h-10 px-3 md:w-48 lg:w-60 bg-neutral-50 border-r border-neutral-900 rounded-l-full focus:outline-none focus:border-2 focus:border-primary-100'
          />
          <button
            type='button'
            aria-label='search'
            className='px-4 py-2 rounded-r-full bg-primary-100 text-neutral-900'
          >
            <MagnifyingGlass size={24} />
          </button>
        </div>
      </div>
      {mobileSearchfield && (
      <div className='absolute top-0 bottom-0 left-0 right-0 flex p-2 bg-neutral-50 border border-primary-100 drop-shadow-primary'>
        <button
          type='button'
          onClick={() => setMobileSearchfield(false)}
          className='flex justify-center items-center gap-2 px-2 py-2 rounded-lg text-neutral-900'
        >
          <ArrowLeft size={24} />
        </button>
        <input type='search' placeholder='Search product...' className='block w-full px-4 bg-neutral-50 focus:outline-none' />
        <button
          type='button'
          className='flex justify-center items-center gap-2 px-2 py-2 rounded-full text-neutral-900 bg-neutral-50'
        >
          <MagnifyingGlass size={24} />
        </button>
      </div>
      )}
    </>
  );
};

export default Search;

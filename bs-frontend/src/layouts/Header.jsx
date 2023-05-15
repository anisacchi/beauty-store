/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User } from '@phosphor-icons/react';
import { Search, UserBar } from '../components';
import { logo, logoRounded } from '../assets';
import { UserState } from '../context/userContext';
import { CartState } from '../context/cartContext';

const Header = () => {
  const navigate = useNavigate();
  const { user } = UserState();
  const { totalQuantities } = CartState();

  return (
    <div className='fixed z-10 w-screen h-16 px-5 py-3 md:px-10 flex items-center justify-between bg-neutral-50 drop-shadow-neutral'>
      <div className='flex h-full'>
        <Link to='/'>
          <img
            src={logoRounded}
            alt='Logo Beauty Store'
            className='rounded-full object-cover md:hidden max-w-[42px]'
          />
          <img
            src={logo}
            alt='Logo Beauty Store'
            className='object-cover hidden md:block max-h-[42px]'
          />
        </Link>
      </div>
      <Search />
      <div className='h-full flex gap-4 justify-center items-center md:justify-between'>
        {/* user has logged in */}
        {user && (
          <>
            <button type='button' aria-label='Cart' className='relative h-full px-2' onClick={() => navigate('/cart')}>
              <ShoppingCart size={24} className='fill-neutral-900' />
              <span className='absolute top-0 -right-1 w-6 h-6 rounded-full bg-primary-200'>
                {totalQuantities}
              </span>
            </button>
            <UserBar />
          </>
        )}

        {/* user is not logged in */}
        {!user && (
          <button
            type='button'
            onClick={() => navigate('/login')}
            className='flex justify-center items-center gap-2 px-2 py-2 rounded-full md:px-4 md:rounded-lg bg-primary-100 border border-neutral-900 text-neutral-900 hover:bg-primary-50 hover:drop-shadow-primary'
          >
            <User size={24} />
            <span className='hidden md:block'>Sign Up</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

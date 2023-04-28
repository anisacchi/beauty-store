import { googleLogout } from '@react-oauth/google';
import React, { useState } from 'react';
import { UserState } from '../context/userContext';

const UserBar = () => {
  const { picture } = JSON.parse(localStorage.getItem('user'));
  const { setUser } = UserState();

  const [toggleUserBar, setToggleUserBar] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem('user');
    googleLogout();
    setUser(false);
  };

  return (
    <>
      <button type='button' className='h-10 w-10' onClick={() => (!toggleUserBar ? setToggleUserBar(true) : setToggleUserBar(false))}>
        <img src={picture} alt='User Profile' className='rounded-full object-cover' />
      </button>
      {toggleUserBar && (
      <div className='absolute top-16 right-0 p-4 rounded-b-2xl bg-neutral-50'>
        <button type='button' className='px-4 py-2' onClick={() => logoutHandler()}>Logout</button>
      </div>
      )}
    </>
  );
};

export default UserBar;

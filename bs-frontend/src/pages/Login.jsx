/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { House } from '@phosphor-icons/react';
import { bgVideo } from '../assets';
import logo from '../assets/bs-logo-2.png';

const Login = () => {
  const navigate = useNavigate();

  const loginHandler = (response) => {
    const { sub: id, name, picture } = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify({ id, name, picture }));
    navigate('/');
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='relative w-full h-full'>
        <video
          src={bgVideo}
          type='video/mp4'
          controls={false}
          className='h-full w-full object-cover'
          autoPlay
          muted
          loop
        />
      </div>
      <div className='absolute flex flex-col gap-5 justify-center items-center top-0 right-0 left-0 bottom-0 bg-neutral-900/80'>
        <div>
          <img src={logo} alt='Logo Beauty Store' width='64px' />
        </div>
        <div className='drop-shadow-neutral'>
          <GoogleLogin
            locale='en_US'
            onSuccess={(response) => loginHandler(response)}
          />
        </div>
        <button
          type='button'
          onClick={() => navigate('/')}
          className='flex gap-2 justify-center items-center px-4 py-2 rounded-lg border-2 border-secondary-100 text-neutral-50'
        >
          <House size={24} />
          <span>Home</span>
        </button>
      </div>
    </div>
  );
};

export default Login;

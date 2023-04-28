import React from 'react';
import {
  TwitterLogo,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import { logo } from '../assets';

const Footer = () => (
  <div className='px-5 md:px-10 py-10 flex flex-col sm:flex-row gap-5 justify-center sm:justify-between items-center bg-primary-50'>
    <div>
      <img src={logo} alt='Logo' className='w-48' />
      <div className='hidden sm:block pt-5'>Copyright © 2023 Beauty Store</div>
    </div>
    <div className='flex gap-5'>
      <button type='button' className='p-2 bg-primary-100 rounded-lg'>
        <TwitterLogo size={24} />
      </button>
      <button type='button' className='p-2 bg-primary-100 rounded-lg'>
        <InstagramLogo size={24} />
      </button>
      <button type='button' className='p-2 bg-primary-100 rounded-lg'>
        <GithubLogo size={24} />
      </button>
      <button type='button' className='p-2 bg-primary-100 rounded-lg'>
        <LinkedinLogo size={24} />
      </button>
    </div>
    <div className='sm:hidden'>Copyright © 2023 Beauty Store</div>
  </div>
);

export default Footer;

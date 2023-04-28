/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

const Products = ({ products, user }) => (
  <div className='flex items-center justify-center my-5'>
    <div className='m-4 md:m-10 lg:max-w-[1024px]'>
      <div className='bg-gradient-to-b from-secondary-100 to-primary-100'>
        <div className='ml-1 pl-2 font-bold text-2xl bg-neutral-50'>Products</div>
        <div className='ml-2 pl-2 font-medium text-lg bg-neutral-50'>New Products</div>
      </div>
      <div className='pt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {products?.map(
          (product) => <CardProduct key={product._id} product={product} user={user} />,
        )}
      </div>
    </div>
  </div>
);

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  user: PropTypes.bool,
};

Products.defaultProps = {
  products: undefined,
  user: false,
};

export default Products;

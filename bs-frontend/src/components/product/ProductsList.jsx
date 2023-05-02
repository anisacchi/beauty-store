/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

const ProductsList = ({ products }) => (
  <div className='my-2 py-4 flex justify-center items-center'>
    <div className='md:mx-10 lg:max-w-[1024px] grid grid-cols-2 md:grid-cols-4 gap-4'>
      {products?.map((product) => (
        <CardProduct key={product._id} product={product} />
      ))}
    </div>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductsList.defaultProps = {
  products: undefined,
};

export default ProductsList;

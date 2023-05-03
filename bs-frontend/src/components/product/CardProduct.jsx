/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../utils/client';
import Rating from '../Rating';

const Product = ({ product }) => (
  <Link to={`/product/${product.slug.current}`}>
    <div className='flex flex-col gap-2 w-full h-full rounded-lg bg-neutral-50 border border-primary-100 cursor-pointer hover:w-[101%] hover:h-[101%] hover:drop-shadow-primary'>
      <img
        src={urlFor(product.images[0])}
        alt={product.name}
        className='rounded-t-lg'
      />
      <div className='p-2'>
        <div className='font-bold'>{product.brand}</div>
        <div>{product.name}</div>
        <div className='font-bold'>
          $
          {product.price}
        </div>
        <div className='flex gap-1 items-center text-primary-200 text-xs'>
          <Rating value={product.rating} />
          <span className='text-neutral-900'>
            (
            {product.rating}
            )
          </span>
        </div>
      </div>
      <div className='p-2 mt-auto'>
        <button
          type='button'
          className='flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-primary-100 hover:bg-primary-50'
        >
          <ShoppingCart size={18} />
          <span className='hidden sm:block'>Add to Cart</span>
        </button>
      </div>
    </div>
  </Link>
);

Product.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({}),
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
      ),
    ]),
  ),
};

Product.defaultProps = {
  product: undefined,
};
export default Product;

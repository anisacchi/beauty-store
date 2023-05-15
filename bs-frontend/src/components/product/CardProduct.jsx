/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { urlFor } from '../../utils/client';
import Rating from '../Rating';

const Product = ({ product }) => (
  <Link to={`/product/${product.slug.current}`}>
    <div className='flex flex-col gap-2 w-full h-full rounded-lg bg-neutral-50 border border-primary-100 cursor-pointer hover:-translate-y-1 hover:scale-105 hover:drop-shadow-primary transition ease-in-out delay-150 duration-300'>
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
        <div className='flex gap-1 items-center text-xs'>
          <Rating value={product.rating} />
          <span>
            (
            {product.rating}
            )
          </span>
        </div>
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

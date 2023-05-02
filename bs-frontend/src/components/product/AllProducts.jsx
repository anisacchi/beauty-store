import React from 'react';
import PropTypes from 'prop-types';
import Path from '../Path';
import ProductsList from './ProductsList';

const AllProducts = ({ path, products }) => (
  <>
    <div className='pt-20 pb-4 md:mx-10 border-b border-neutral-700'>
      <Path path={path} />
    </div>
    <ProductsList products={products} />
  </>
);

AllProducts.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({})),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

AllProducts.defaultProps = {
  path: [],
  products: [],
};

export default AllProducts;

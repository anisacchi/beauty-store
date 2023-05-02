import React from 'react';
import PropTypes from 'prop-types';
import Path from '../../Path';
import ProductsList from '../ProductsList';

const Lips = ({ path, products }) => {
  const lipsProducts = products.filter((product) => product.category.includes('Lips'));
  return (
    <>
      <div className='pt-20 pb-4 md:mx-10 border-b border-neutral-700'>
        <Path path={path} />
      </div>
      <ProductsList products={lipsProducts} />
    </>
  );
};

Lips.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({})),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Lips.defaultProps = {
  path: [],
  products: [],
};

export default Lips;

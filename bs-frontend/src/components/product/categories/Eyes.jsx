import React from 'react';
import PropTypes from 'prop-types';
import Path from '../../Path';
import ProductsList from '../ProductsList';

const Eyes = ({ path, products }) => {
  const eyeProducts = products.filter((product) => product.category.includes('Eye'));
  return (
    <>
      <div className='pt-20 pb-4 md:mx-10 border-b border-neutral-700'>
        <Path path={path} />
      </div>
      <ProductsList products={eyeProducts} />
    </>
  );
};

Eyes.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({})),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Eyes.defaultProps = {
  path: [],
  products: [],
};

export default Eyes;

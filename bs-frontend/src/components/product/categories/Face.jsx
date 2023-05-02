import React from 'react';
import PropTypes from 'prop-types';
import Path from '../../Path';
import ProductsList from '../ProductsList';

const Face = ({ path, products }) => {
  const faceProducts = products.filter((product) => product.category.includes('Face'));
  return (
    <>
      <div className='pt-20 pb-4 md:mx-10 border-b border-neutral-700'>
        <Path path={path} />
      </div>
      <ProductsList products={faceProducts} />
    </>
  );
};

Face.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({})),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Face.defaultProps = {
  path: [],
  products: [],
};

export default Face;

import React from 'react';
import PropTypes from 'prop-types';
import Path from '../../Path';
import ProductsList from '../ProductsList';

const Tools = ({ path, products }) => {
  const toolsProducts = products.filter((product) => product.category.includes('Tool'));
  return (
    <>
      <div className='pt-20 pb-4 md:mx-10 border-b border-neutral-700'>
        <Path path={path} />
      </div>
      <ProductsList products={toolsProducts} />
    </>
  );
};

Tools.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({})),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Tools.defaultProps = {
  path: [],
  products: [],
};

export default Tools;

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../components/product/AllProducts';
import {
  Eyes, Face, Lips, Tools,
} from '../components/product/categories';

const Products = ({ products }) => {
  const path = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Products',
      link: '/products',
    },
  ];

  return (
    <div className='pt-4 px-4'>
      <Routes>
        <Route
          path='/'
          element={<AllProducts path={path} products={products} />}
        />
        <Route
          path='/eyes'
          element={(
            <Eyes
              path={[...path, { name: 'Eyes', link: '/products/eyes' }]}
              products={products}
            />
          )}
        />
        <Route
          path='/face'
          element={(
            <Face
              path={[...path, { name: 'Face', link: '/products/face' }]}
              products={products}
            />
          )}
        />
        <Route
          path='/lips'
          element={(
            <Lips
              path={[...path, { name: 'Lips', link: '/products/lips' }]}
              products={products}
            />
          )}
        />
        <Route
          path='/tools'
          element={(
            <Tools
              path={[...path, { name: 'Tools', link: '/products/tools' }]}
              products={products}
            />
          )}
        />
      </Routes>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Products.defaultProps = {
  products: [],
};

export default Products;

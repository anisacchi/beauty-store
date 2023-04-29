/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPagination from 'react-paginate';
import CardProduct from './CardProduct';

const Products = ({ products }) => {
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className='flex items-center justify-center my-5'>
      <div className='m-4 md:m-10 lg:max-w-[1024px]'>
        <div className='bg-gradient-to-b from-secondary-100 to-primary-100'>
          <div className='ml-1 pl-2 font-bold text-2xl bg-neutral-50'>Products</div>
          <div className='ml-2 pl-2 font-medium text-lg bg-neutral-50'>New Products</div>
        </div>
        <div>
          {products ? (
            <div>
              <div className='pt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
                {(currentProducts.map(
                  (product) => <CardProduct key={product._id} product={product} />,
                ))}
              </div>
              <div className='flex justify-end'>
                <ReactPagination
                  onPageChange={paginate}
                  pageCount={Math.ceil(products.length / productsPerPage)}
                  previousLabel='< prev'
                  nextLabel='next >'
                  containerClassName='flex py-5'
                  disabledLinkClassName='bg-neutral-50 border border-neutral-700 text-neutral-700'
                  pageLinkClassName='py-2 px-4 page-number border border-primary-100'
                  previousLinkClassName='py-2 px-4 mr-2 page-number rounded-l-lg border border-primary-100'
                  nextLinkClassName='py-2 px-4 ml-2 page-number rounded-r-lg border border-primary-100'
                  activeLinkClassName='active bg-primary-100'
                />
              </div>
            </div>
          ) : ''}
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

Products.defaultProps = {
  products: undefined,
};

export default Products;

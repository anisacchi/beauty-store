/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPagination from 'react-paginate';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { CardProduct, Highlights } from '../components';
import { categories } from '../assets';

const Home = ({ products }) => {
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <Highlights />
      <div className='flex flex-col justify-center items-center'>
        <div className='m-4 md:mx-10 md:mt-10 lg:max-w-[1024px]'>
          <div className='bg-gradient-to-b from-secondary-100 to-primary-100'>
            <div className='ml-1 pl-2 font-bold text-2xl bg-neutral-50'>
              Categories
            </div>
          </div>
          <div className='pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center'>
            {categories.map((category) => (
              <Link key={category.name} to={`/product/${category.url}`}>
                <div
                  className='flex justify-center items-center aspect-square w-full bg-neutral-50 border rounded-lg border-primary-100 hover:drop-shadow-primary cursor-pointer'
                >
                  <LazyLoadImage
                    src={category.image}
                    alt={category.desc}
                    className='p-2'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='m-4 md:m-10 lg:max-w-[1024px]'>
          <div className='bg-gradient-to-b from-secondary-100 to-primary-100'>
            <div className='ml-1 pl-2 font-bold text-2xl bg-neutral-50'>
              Products
            </div>
            <div className='flex justify-between ml-1 pl-2 font-medium text-lg bg-neutral-50'>
              <span>New Products</span>
              <Link
                to='/products'
                className='text-neutral-700 hover:text-primary-200'
              >
                <span>View more</span>
              </Link>
            </div>
          </div>
          {products ? (
            <div>
              <div className='pt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
                {currentProducts.map((product) => (
                  <CardProduct key={product._id} product={product} />
                ))}
              </div>
              <div className='flex justify-end'>
                <ReactPagination
                  onPageChange={paginate}
                  pageCount={Math.ceil(products.length / productsPerPage)}
                  previousLabel='< prev'
                  nextLabel='next >'
                  containerClassName='flex py-5'
                  disabledLinkClassName='bg-neutral-50 border border-neutral-700 text-neutral-700 hover:bg-neutral-50'
                  pageLinkClassName='py-2 px-4 page-number border border-primary-100'
                  previousLinkClassName='py-2 px-4 page-number rounded-l-lg border border-primary-100 hover:bg-primary-100/50'
                  nextLinkClassName='py-2 px-4 page-number rounded-r-lg border border-primary-100 hover:bg-primary-100/50'
                  activeLinkClassName='active bg-primary-100'
                  pageRangeDisplayed={1}
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  products: [],
};

export default Home;

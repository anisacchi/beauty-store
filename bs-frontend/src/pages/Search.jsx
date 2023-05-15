import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { ProductsList } from '../components';

const Search = ({ products }) => {
  const { keyword } = useParams();
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductsFiltered(
      products.filter(
        (product) => (
          product.name.toLowerCase().includes(keyword.toLowerCase())
          || product.brand.toLowerCase().includes(keyword.toLowerCase())
        ),
      ),
    );
    setLoading(false);
  }, [products, keyword]);

  return (
    <>
      <div className='pt-20 pb-4 md:mx-10 border-b border-neutral-700'>
        <ol className='flex'>
          <li>
            <Link to='/' className='hover:text-primary-200'>Home</Link>
            <span className='px-4'>/</span>
          </li>
          <li>
            <span>Search Result for </span>
            <Link to={`/search/${keyword}`} className='font-bold hover:text-primary-200'>
              {keyword}
            </Link>
          </li>
        </ol>
      </div>
      <div>
        {loading ? ''
          : <ProductsList products={productsFiltered} />}

      </div>
    </>
  );
};

Search.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

Search.defaultProps = {
  products: [],
};

export default Search;

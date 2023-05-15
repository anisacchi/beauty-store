/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductBySlug } from '../utils/data';
import { client } from '../utils/client';
import NotFound from './NotFound';
import { ModalAddCart, Path, ProductSwiper } from '../components';
import Rating from '../components/Rating';
import { UserState } from '../context/userContext';

const DetailProduct = () => {
  const { id: slug } = useParams();
  const { user } = UserState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [modal, setModal] = useState(false);
  const [purchaseCategory, setPurchaseCategory] = useState('');

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

  useEffect(() => {
    const query = getProductBySlug(slug);
    client.fetch(query).then((data) => {
      setProduct(data[0]);
      setLoading(false);
    });
  }, []);

  const openModal = (purchase) => {
    if (user) {
      setModal(true);
      setPurchaseCategory(purchase);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='relative pt-20 min-h-full'>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <div className='w-full h-full'>
          {product ? (
            <>
              <div className='pt-4 pb-4 mb-5 mx-4 md:mx-10 border-b border-neutral-700'>
                <Path
                  path={[...path, { name: product.name, link: `/product/${product.slug.current}` }]}
                />
              </div>
              <div className='mb-5 flex flex-col max-w-5xl md:flex-row pb-5 sm:px-5 md:px-10 lg:mx-auto'>
                <div className='w-full flex flex-col items-center'>
                  <ProductSwiper
                    productImages={[
                      { name: 'cover', image: product.images[0] },
                      ...product.variants,
                    ]}
                  />
                </div>
                <div className='w-full h-full p-5 flex flex-col gap-2'>
                  <span className='text-lg font-bold text-primary-100 lg:text-xl'>
                    {product.brand}
                  </span>
                  <span className='text-2xl font-bold lg:text-3xl'>
                    {product.name}
                  </span>
                  <div className='flex items-center gap-2'>
                    <Rating value={product.rating} />
                    <span className='text-sm text-neutral-800'>
                      {product.rating}
                    </span>
                  </div>
                  <div>
                    <span className='text-xl font-bold text-primary-200'>
                      $
                      {product.price}
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='font-bold'>Description:</span>
                    <span>{product.description}</span>
                  </div>
                  <div className='w-full mt-4 flex gap-4'>
                    <button
                      type='button'
                      onClick={() => openModal('Add to Cart')}
                      className='px-6 py-3 xm:px-9 border border-primary-100 rounded-lg hover:bg-primary-50'
                    >
                      Add to cart
                    </button>
                    <button
                      type='button'
                      onClick={() => openModal('Buy Now')}
                      className='px-6 py-3 sm:px-9 border border-neutral-900 rounded-lg bg-primary-100 hover:bg-primary-50'
                    >
                      Buy now
                    </button>
                  </div>
                </div>
                {modal && (
                <div className='absolute left-0 top-0 bottom-0 bg-neutral-900/25 z-50'>
                  <ModalAddCart
                    product={product}
                    setModal={setModal}
                    purchaseCategory={purchaseCategory}
                  />
                </div>
                )}
              </div>
            </>
          ) : (
            <NotFound />
          )}
        </div>
      )}
    </div>
  );
};

export default DetailProduct;

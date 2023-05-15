/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus, X } from '@phosphor-icons/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { urlFor } from '../utils/client';
import { CartState } from '../context/cartContext';

const ModalAddCart = ({ product, setModal, purchaseCategory }) => {
  const navigate = useNavigate();
  const [productImage, setProductImage] = useState(product.images[0]);
  const [activeVariant, setActiveVariant] = useState();
  const {
    qty, setQty, incQty, decQty, onAdd,
  } = CartState();

  const selectVariant = (variant) => {
    setActiveVariant(variant.name);
    setProductImage(variant.image);
  };

  const closeModal = () => {
    setModal(false);
    setQty(1);
  };

  const purchaseHandler = () => {
    const selectProduct = {
      pid: product._id,
      name: product.name,
      variant: activeVariant,
      price: product.price,
      image: productImage,
    };
    onAdd(selectProduct, qty);

    if (purchaseCategory === 'Add to Cart') {
      closeModal();
    } else if (purchaseCategory === 'Buy Now') {
      closeModal();
      navigate('/cart');
    }
  };

  return (
    <div className='relative w-screen'>
      <div className='fixed z-50 bottom-0 right-0 left-0 bg-neutral-50 rounded-t-lg drop-shadow-neutral'>
        <div className='m-4 md:m-5 lg:m-10 flex flex-col justify-center items-center'>
          <div className='w-full pb-2 flex justify-between items-start border-b border-neutral-700/25'>
            <LazyLoadImage
              src={urlFor(productImage)}
              className='w-40 rounded-lg'
            />
            <button type='button' onClick={() => closeModal()}>
              <X size={16} />
            </button>
          </div>
          <div className='w-full flex flex-col'>
            {product.variants.length !== 0 ? (
              <div className='w-full py-2 border-b border-neutral-700/25'>
                <span className='font-bold'>Variant</span>
                <div className='flex flex-wrap gap-2'>
                  {product.variants.map((variant) => (
                    <button
                      type='button'
                      key={variant.name}
                      onClick={() => selectVariant(variant)}
                      className={`px-4 py-2 border border-primary-100 rounded-md ${activeVariant === variant.name ? 'bg-primary-100 text-neutral-800 font-semibold' : 'bg-neutral-50'}`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='w-full py-4 flex items-center justify-between border-b border-neutral-700/25'>
              <span className='font-bold'>Quantity</span>
              <div className='flex items-center border rounded-lg border-primary-100'>
                <button
                  type='button'
                  className='py-2 px-4'
                  aria-label='Removing product'
                  onClick={decQty}
                >
                  <Minus size={16} />
                </button>
                <span className='px-4 border-x border-primary-100'>{qty}</span>
                <button
                  type='button'
                  className='py-2 px-4'
                  aria-label='Adding product'
                  onClick={incQty}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <div className='mb-4 py-2'>
              {activeVariant || product.variants.length === 0
                ? (
                  <button
                    type='button'
                    onClick={() => purchaseHandler()}
                    className='w-full py-2 bg-primary-200 border-primary-200 font-bold rounded-lg'
                  >
                    {purchaseCategory}
                  </button>
                )
                : (
                  <button
                    type='button'
                    onClick={() => purchaseHandler()}
                    className='w-full py-2 bg-neutral-50 border border-neutral-700 font-bold text-neutral-800 rounded-lg'
                    disabled
                  >
                    {purchaseCategory}
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalAddCart.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    variants: PropTypes.arrayOf(PropTypes.shape({})),
    images: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  setModal: PropTypes.func,
  purchaseCategory: PropTypes.string,
};

ModalAddCart.defaultProps = {
  product: null,
  setModal: () => {},
  purchaseCategory: '',
};

export default ModalAddCart;

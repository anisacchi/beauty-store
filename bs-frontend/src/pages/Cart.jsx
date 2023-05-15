import React from 'react';
import { Minus, Plus, Trash } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartState } from '../context/cartContext';
import { cartEmpty } from '../assets';
import { urlFor } from '../utils/client';

const Cart = () => {
  const {
    cartItems, cartItemQuantity, totalPrice, onRemove,
  } = CartState();

  return (
    <div className='py-20 px-4 md:px-10'>
      <div className='flex flex-col justify-center items-center'>
        <span className='w-full mb-4 pb-2 border-b border-neutral-700 text-2xl text-center font-bold'>My Cart</span>
        <div className='w-full flex flex-col lg:flex-row gap-10 justify-center'>
          {cartItems.length !== 0 ? (
            <>
              <div className='lg:basis-2/3'>
                {cartItems.map((product) => (
                  <div key={product.cid} className='mb-2 p-2 flex gap-4 rounded-lg border border-primary-100'>
                    <div className='Image aspect-square w-20 h-20 bg-primary-200 rounded-lg'>
                      <LazyLoadImage src={urlFor(product.image)} />
                    </div>
                    <div className='flex flex-wrap gap-4'>
                      <div className='flex flex-col'>
                        <span className='font-bold'>{product.name}</span>
                        <span>{product.variant}</span>
                        <span className='font-bold text-primary-200'>
                          $
                          {product.price}
                        </span>
                        <div className='w-fit mt-auto h-8 flex items-center border border-primary-100'>
                          <button
                            type='button'
                            className='px-2'
                            aria-label='Removing product'
                            onClick={() => cartItemQuantity(product.cid, 'dec')}
                          >
                            <Minus size={16} />
                          </button>
                          <span className='px-4 border-x border-primary-100'>{product.quantity}</span>
                          <button
                            type='button'
                            className='p-2'
                            aria-label='Adding product'
                            onClick={() => cartItemQuantity(product.cid, 'inc')}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='ml-auto mt-auto'>
                      <button
                        type='button'
                        aria-label='Delete product from cart'
                        onClick={() => onRemove(product.cid)}
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='p-2 flex flex-col h-fit bg-primary-100 rounded-lg lg:basis-1/3'>
                <div className='flex justify-between'>
                  <span>Shopping cost</span>
                  <span>{(Math.round(totalPrice * 100) / 100).toFixed(2)}</span>
                </div>
                <div className='flex justify-between border-b border-neutral-700'>
                  <span>Discount</span>
                  <span>0.00</span>
                </div>
                <div className='flex justify-between font-bold'>
                  <span>Estimated Total</span>
                  <span>
                    $
                    {(Math.round(totalPrice * 100) / 100).toFixed(2)}
                  </span>
                </div>
                <button type='button' className='mt-4 w-full py-2 bg-primary-50 border border-neutral-700 rounded-lg hover:bg-primary-50/75'>Buy Now</button>
              </div>

            </>
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <LazyLoadImage src={cartEmpty} className='max-w-xs' />
              <span className='text-xl font-bold text-primary-200'>EMPTY</span>
              <span className='pb-4'>
                There is no item here.
              </span>
              <Link to='/products'>
                <button type='button' className='py-2 px-4 rounded-lg bg-primary-100 border border-neutral-800 hover:bg-primary-50'>Shop Now</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

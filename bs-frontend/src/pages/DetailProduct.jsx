/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductBySlug } from '../utils/data';
import { client } from '../utils/client';
import NotFound from './NotFound';
import 'react-lazy-load-image-component/src/effects/blur.css';

const DetailProduct = () => {
  const { id: slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    const query = getProductBySlug(slug);
    client.fetch(query).then((data) => {
      setProduct(data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading
        ? <div>LOADING</div>
        : (
          <div>
            {product
              ? ('')
              : <NotFound />}
          </div>
        )}
    </div>
  );
};

export default DetailProduct;

import React, { useEffect, useState } from 'react';
import { Highlights, Categories, Products } from '../components';
import { client } from '../utils/client';
import { getProducts } from '../utils/data';
import { UserState } from '../context/userContext';

const Home = () => {
  const [products, setProducts] = useState();
  const { setUser } = UserState();

  useEffect(() => {
    const userLogin = localStorage.getItem('user');

    if (userLogin) {
      setUser(true);
    }
  }, []);

  useEffect(() => {
    const query = getProducts();
    client.fetch(query).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Highlights />
      <Categories />
      <Products products={products} />
    </>
  );
};

export default Home;

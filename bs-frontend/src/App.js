import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Products } from './pages';
import { Footer, Header } from './layouts';
import { UserState } from './context/userContext';
import { getProducts } from './utils/data';
import { client } from './utils/client';

const App = () => {
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
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home products={products} />} />
        <Route path='/products/*' element={<Products products={products} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/userContext';
import { Home, Login } from './pages';
import { Footer, Header } from './layouts';

const App = () => (
  <UserContext>
    <Header />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
  </UserContext>
);

export default App;

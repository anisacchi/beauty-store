import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserContext from './context/userContext';
import { Home, Login } from './pages';

const App = () => (
  <UserContext>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </UserContext>
);

export default App;

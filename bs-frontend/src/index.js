/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserContext from './context/userContext';
import { CartContext } from './context/cartContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
    <BrowserRouter>
      <UserContext>
        <CartContext>
          <App />
        </CartContext>
      </UserContext>
    </BrowserRouter>
  </GoogleOAuthProvider>,
);

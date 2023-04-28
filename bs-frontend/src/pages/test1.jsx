import React from 'react';
import Test2 from './test2';
import { UserState } from '../context/userContext';

const Test1 = () => {
  const { user, setUser } = UserState();
  return (
    <div>
      {!user && (
      <button type='button' onClick={() => setUser(true)}>sign up</button>
      )}
      <Test2 />
    </div>
  );
};

export default Test1;

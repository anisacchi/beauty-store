import React from 'react';
import { UserState } from '../context/userContext';

const Test2 = () => {
  const { user, setUser } = UserState();
  return (
    <div>
      {user && (
      <div>
        <div>Telah Login</div>
        <button type='button' onClick={setUser(false)}>Logout</button>
      </div>
      )}
    </div>
  );
};

export default Test2;

import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const User = createContext();
export const UserState = () => useContext(User);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(false);
  const userLogin = useMemo(() => ({ user, setUser }), [user]);

  return (
    <User.Provider value={userLogin}>{children}</User.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UserContext.defaultProps = {
  children: undefined,
};

export default UserContext;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Path = ({ path }) => (
  <ol className='flex'>
    {path.map((link, index) => {
      if (index === (path.length - 1)) {
        return (
          <li key={link.name}>
            <Link to={link.link} className='hover:text-primary-200'>{link.name}</Link>
          </li>
        );
      }
      return (
        <li key={link.name}>
          <Link to={link.link} className='hover:text-primary-200'>{link.name}</Link>
          <span className='px-4'>/</span>
        </li>
      );
    })}
  </ol>
);

Path.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({})),
};

Path.defaultProps = {
  path: [],
};

export default Path;

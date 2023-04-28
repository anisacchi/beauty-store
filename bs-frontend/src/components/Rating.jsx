import React from 'react';
import { Star, StarHalf } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

const Rating = ({ value }) => {
  const stars = Array.from([1, 2, 3, 4, 5], (i) => <Star key={i} />);
  let i;
  for (i = 0; i < value; i += 1) {
    stars[i] = <Star weight='fill' key={i} />;
  }

  if (value % 1 !== 0) {
    stars[i - 1] = <StarHalf weight='fill' key={i - 1} />;
  }
  return (<span className='flex'>{stars}</span>);
};

Rating.propTypes = {
  value: PropTypes.number,
};

Rating.defaultProps = {
  value: 0,
};

export default Rating;

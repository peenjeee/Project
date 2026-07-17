import React from 'react';
import PropTypes from 'prop-types';

function IncreaseButton({ increase }) {
  return (
    <button className='increase' onClick={increase}>
      <span role="img" aria-label="plus">
        +
      </span>
    </button>
  );
}

IncreaseButton.propTypes = {
  increase: PropTypes.func.isRequired,
};

export default IncreaseButton;
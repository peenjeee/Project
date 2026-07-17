import React from 'react';
import PropTypes from 'prop-types';

function DecreaseButton({ decrease }) {
  return (
    <button className='decrease' onClick={decrease}>
      <span role="img" aria-label="minus">
        -
      </span>
    </button>
  );
}

DecreaseButton.propTypes = {
  decrease: PropTypes.func.isRequired,
};

export default DecreaseButton;
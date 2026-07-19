import React from 'react';
import PropTypes from 'prop-types';
import Container from './styled/Container';
import Title from './styled/Title';
import Button from './styled/Button';

function AnnounceBar({ title, content, ctaLabel, onClick, type }) {
  const backgroundColor = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  }

  const textColor = {
    success: '#fff',
    error: '#fff',
    warning: '#fff',
    info: '#fff',
  }


  return (
    <Container
      backgroundColor={backgroundColor[type]}
      textColor={textColor[type]}
      maxWidth="800px"
      padding="1rem 2rem 2rem 2rem"
    >
      <Title>{title}</Title>
      <p>{content}</p>

      <Button
        backgroundColor={textColor[type]}
        textColor={backgroundColor[type]}
        onClick={onClick}>
          {ctaLabel}
      </Button> 
    </Container>
  );
}

AnnounceBar.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  ctaLabel: PropTypes.string.isRequired,
}

export default AnnounceBar;
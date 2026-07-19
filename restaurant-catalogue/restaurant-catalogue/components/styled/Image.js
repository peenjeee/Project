import styled from 'styled-components';

const Image = styled.img`
  display: block;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  object-fit: cover;
  object-position: center;
`;

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Image;
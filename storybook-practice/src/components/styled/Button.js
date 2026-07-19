import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.padding};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

Button.defaultProps = {
  backgroundColor: '#2196f3',
  textColor: '#fff',
  padding: '0.5rem 1rem',
};


export default Button;
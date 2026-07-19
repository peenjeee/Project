import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  margin:${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
`;

Container.defaultProps = {
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: 'transparent',
  padding: '1rem',
  textColor: 'black',
}

export default Container;
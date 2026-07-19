import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
`;

Container.defaultProps = {
    maxWidth: '100%',
    margin: '0 auto',
}

export default Container;
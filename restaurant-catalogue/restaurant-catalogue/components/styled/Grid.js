import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.gap || '2rem'};
  margin: 1.5rem 0;
`;

Grid.defaultProps = {
  gap: '2rem',
};

export default Grid;
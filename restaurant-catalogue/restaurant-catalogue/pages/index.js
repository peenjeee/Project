import styled from 'styled-components';
import RestaurantList from '../components/RestaurantsList';
import Container from '../components/styled/Container';

const HomeWrapper = styled.div`
  padding: 2rem 0;
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2.5rem 1.5rem;
  background-color: #333;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  border-bottom: 3px solid #f39c12;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.8rem;

  span {
    color: #f39c12;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #ddd;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

export default function Home({ restaurants }) {
  return (
    <Container>
      <HomeWrapper>
        <HeaderSection>
          <Title>🍽️ Katalog <span>Restoran</span></Title>
          <Subtitle>
            Jelajahi berbagai pilihan restoran terbaik dengan suasana nyaman dan kuliner lezat di seluruh kota.
          </Subtitle>
        </HeaderSection>
        <RestaurantList restaurants={restaurants} />
      </HomeWrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants,
    },
  }
}
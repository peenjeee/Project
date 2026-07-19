import styled from 'styled-components';
import Container from '../../components/styled/Container';
import Grid from '../../components/styled/Grid';
import Card from '../../components/styled/Card';
import Image from '../../components/styled/Image';

const DetailWrapper = styled.div`
  padding: 2rem 0;
`;

const ImageContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  width: 100%;
  height: 420px;
  background-color: #333;
`;

const HeaderSection = styled.header`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e5e7eb;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #111827;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  text-align: justify;
`;

const MenuHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #111827;
`;

const MenuCardContent = styled.div`
  padding: 1.5rem;
`;

const MenuTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #d97706;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const MenuItem = styled.li`
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d97706;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

export default function Detail({ restaurant }) {
  const { name, description, pictureId, menus: { foods, drinks } } = restaurant;
  return (
    <Container>
      <DetailWrapper>
        <ImageContainer>
          <Image width="100%" height="100%" src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`} alt={name} />
        </ImageContainer>

        <HeaderSection>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </HeaderSection>

        <main>
          <MenuHeader>Informasi Menu</MenuHeader>

          <Grid gap="1.5rem">
            <Card>
              <MenuCardContent>
                <MenuTitle>🍽️ Makanan</MenuTitle>
                <MenuList>
                  {foods.map((food) => (
                    <MenuItem key={food.name}>{food.name}</MenuItem>
                  ))}
                </MenuList>
              </MenuCardContent>
            </Card>

            <Card>
              <MenuCardContent>
                <MenuTitle>🍹 Minuman</MenuTitle>
                <MenuList>
                  {drinks.map((drink) => (
                    <MenuItem key={drink.name}>{drink.name}</MenuItem>
                  ))}
                </MenuList>
              </MenuCardContent>
            </Card>
          </Grid>
        </main>
      </DetailWrapper>
    </Container>
  );
}

export async function getStaticPaths() {
  // call an external API endpoint to get ids of restaurants
  const response = await fetch('https://restaurant-api.dicoding.dev/list', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const { restaurants } = await response.json();
  const ids = restaurants.map((restaurant) => restaurant.id);

  // Get the paths we want to pre-render based on ids
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the restaurant detail page using params.id
  const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${params.id}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const { restaurant } = await response.json();

  return {
    props: {
      restaurant,
    },
  };
}
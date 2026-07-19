import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './styled/Card';
import Container from './styled/Container';
import Image from './styled/Image';

const CardTitle = styled.h2`
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
  color: #111827;

  a:hover {
    color: #d97706;
  }
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
`;

function RestaurantItem({ id, pictureId, name, description }) {
    return (
        <Card>
            <Image
                width="100%"
                height="250px"
                src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
                alt={name} />

            <Container>
                <CardTitle><Link href={`/detail/${id}`}>{name}</Link></CardTitle>
                <CardDescription>{description}</CardDescription>
                <br />
            </Container>
        </Card>
    );
}

RestaurantItem.propTypes = {
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default RestaurantItem;
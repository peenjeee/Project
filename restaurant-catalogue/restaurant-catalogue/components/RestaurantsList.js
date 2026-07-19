import RestaurantItem from './RestaurantItem';
import Grid from './styled/Grid';
import PropTypes from 'prop-types';

function RestaurantList({ restaurants }) {
    return (
        <Grid>
            {restaurants.map((restaurant) => (
                <RestaurantItem key={restaurant.id} {...restaurant} />
            ))}
        </Grid>
    );
}

RestaurantList.propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        pictureId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
};

export default RestaurantList;
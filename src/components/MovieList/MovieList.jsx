import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({items}) => {

    const location = useLocation();

    const elements = items.map(({ id, title, original_name }) => <li key={id}>        
        <Link state={{from: location}}  to={`/movies/${id}`}>{title || original_name}</Link>
    </li>)
    return (
        elements
    )
}

export default MovieList;

MovieList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            original_name: PropTypes.string
        })
    )
};

import { Link, useLocation } from 'react-router-dom';

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

import PropTypes from 'prop-types';

const ReviewsList = ({ items }) => {

    const elements = items.map(({ id, content, author_details }) => <li key={id}>
            <h4>Author: {author_details.username}</h4>
        <p>{content}</p>        
    </li>)
    return (
        elements
    )
}

export default ReviewsList;

ReviewsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,            
            content: PropTypes.string.isRequired,
            author_details: PropTypes.shape({
                username: PropTypes.string.isRequired,
            })
        })
    )
};
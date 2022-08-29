import styles from './CastList.module.css';
import PropTypes from 'prop-types';

const CastList = ({items}) => {


    const elements = items.map(({ id, profile_path, name, character }) => <li key={id}>        
        {profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`} alt="" /> : <div className={styles.castPlug}><span>No photo</span></div>}
        <p>{name}</p>
        <p>Character: {character}</p>
    </li>)
    return (
        elements
    )
}

export default CastList;

CastList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            profile_path: PropTypes.string,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired
        })
    )
};
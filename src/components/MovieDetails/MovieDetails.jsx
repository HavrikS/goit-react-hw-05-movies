import styles from './MovieDetails.module.css';
import PropTypes from 'prop-types';

const MovieDetails = ({item}) => {    
    const { poster_path, title, overview, vote_average, genres } = item
    const userScore = Math.round(Number(vote_average) * 10);
    const movieGenres = genres.map(genre => genre.name).join(" ")
    return (
        <div className={styles.datails}>
            <div className={styles.poster}>
                {poster_path && <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt="" />}               
            </div>
            <div className={styles.title}>
                <h3>{title}</h3>
                <p>User Score: {userScore} %</p>
                <h4>Overview</h4>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{movieGenres}</p>
            </div>
        </div>
    )
};

export default MovieDetails;

MovieDetails.propTypes = {
    item: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,                
            })
        )               
    })
    
};
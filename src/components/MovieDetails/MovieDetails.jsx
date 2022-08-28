import styles from './MovieDetails.module.css';

const MovieDetails = ({ poster_path, title, overview, vote_average, genres }) => {
    
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
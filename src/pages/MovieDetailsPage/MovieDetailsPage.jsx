import {useState, useEffect} from "react";
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../shared/api/movies';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {


    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState({});

    const { movieId } = useParams();

    const getClassName = ({isActive}) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

    useEffect(() => {          
        const fetchMoviesById = async() => {
            try {
                setLoading(true)                
                const response = await getMovieById(movieId)
                console.log(response);
                setItem(response)
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        };
    
        fetchMoviesById();        
    }, [movieId]);

    const { poster_path, title, overview, vote_average, genres} = item
    
    
    return (
        <div>                       
            {Object.keys(item).length > 0 && <MovieDetails poster_path={poster_path} title={title} overview={overview} vote_average={vote_average} genres={genres} />}
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}
        <div className={styles.menu}>
                <NavLink className={getClassName} to={`/movies/${movieId}/cast`}>Cast</NavLink>
                <NavLink className={getClassName} to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </div>
            <Outlet /> 
        </div>
        
    )
}

export default MovieDetailsPage;
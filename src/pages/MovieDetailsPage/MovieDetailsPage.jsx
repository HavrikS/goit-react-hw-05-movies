import {useState, useEffect} from "react";
import {Link, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { getMovieById } from '../../shared/api/movies';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState({});
    const [from, setFrom] = useState("/");

    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    const goBack = () => navigate(from)

    useEffect(() => {   
        setFrom(location.state?.from ?? "/")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {          
        const fetchMoviesById = async() => {
            try {
                setLoading(true)                
                const response = await getMovieById(movieId)                
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

    
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {Object.keys(item).length > 0 && <MovieDetails item={item} />}
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}
            <div className={styles.menu}>
                    <Link className={styles.link} to={`/movies/${movieId}/cast`}>Cast</Link>
                    <Link className={styles.link} to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </div>
            <Outlet /> 
        </div>
        
    )
}

export default MovieDetailsPage;
import {useState, useEffect} from "react";
import {Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../../shared/api/movies';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {


    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState({});

    const { movieId } = useParams();
    const navigate = useNavigate()
    // const location = useLocation();
    // console.log(location)

    const goBack = () => navigate(-1)    

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
            <button onClick={goBack}>Go back</button>
            {Object.keys(item).length > 0 && <MovieDetails poster_path={poster_path} title={title} overview={overview} vote_average={vote_average} genres={genres} />}
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
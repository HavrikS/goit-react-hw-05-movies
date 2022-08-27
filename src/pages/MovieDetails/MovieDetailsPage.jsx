import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import { getMovieById } from '../../shared/api/movies';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState({});

    

    useEffect(() => {        
            
        const fetchMoviesById = async() => {
            try {
                setLoading(true)                
                const response = await getMovieById(id);
                const result = response;                
                setItem(result)
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        };
    
        fetchMoviesById();        
    }, [id]);

    const { poster_path } = item
    
    
    return (
        <div>
            {poster_path && <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt="" /> }           
            {/* <ol>{elements}</ol> */}
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}
        </div>
        
    )
}

export default MovieDetailsPage;
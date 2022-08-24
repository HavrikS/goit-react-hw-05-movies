import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import { getTrendingMovies } from '../../shared/api/movies';

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(()=> {
        const fetchTrendingMovies = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const response = await getTrendingMovies();
                const result = response.results;
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result]
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };

        fetchTrendingMovies();
    }, []);

    

    const {items, loading, error} = state;

    
    const elements = items.map(({id, title}) => <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
    </li>)

    return (
        <div>
            <ol>{elements}</ol>
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}
        </div>
        
    )
}

export default Movies;
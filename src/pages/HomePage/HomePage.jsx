import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import styles from "./HomePage.module.css";
import { getTrendingMovies } from '../../shared/api/movies';

const HomePage = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const fetchTrendingMovies = async() => {
            try {
                setLoading(true);
                setError(null)    
                const response = await getTrendingMovies();
                const result = response.results;
                setItems([...result])                
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        };
        fetchTrendingMovies();
    }, []);


    
    const elements = items.map(({ id, title, original_name }) => <li key={id}>        
        <Link to={`/movies/${id}`}>{title || original_name}</Link>
    </li>)

    return (
        <div className={styles.wraper}>
            <h2>Trending today</h2>
            <ul>{elements}</ul>
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}            
        </div>
        
    )
}

export default HomePage;
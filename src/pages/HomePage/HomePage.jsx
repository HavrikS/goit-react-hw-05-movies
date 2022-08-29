import {useState, useEffect} from "react";
import styles from "./HomePage.module.css";
import { getTrendingMovies } from '../../shared/api/movies';
import MovieList from '../../components/MovieList/MovieList';

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



    return (
        <div className={styles.wraper}>
            <h2>Trending today</h2>
            <ul><MovieList items={items} /></ul>
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}            
        </div>
        
    )
}

export default HomePage;
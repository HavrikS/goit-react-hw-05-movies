import {useState, useEffect} from "react";
import { getCast } from '../../shared/api/movies';
import { useParams } from 'react-router-dom';
import CastList from '../../components/CastList/CastList';


const Cast = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItem] = useState([]);

    const { movieId } = useParams();

    useEffect(() => { 
    const fetchCast = async () => {
            try {
                setLoading(true)                
                const response = await getCast(movieId);
                const result = response.cast;                
                setItem([...result])
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
    };
    
        fetchCast()
    }, [movieId]);

    return (
        <div>
            {items.length > 0 && <ul><CastList items={items} /></ul>}            
            {loading && <p>...load information</p>}
            {error && <p>...Information load failed</p>}
        </div>
    )
}

export default Cast;
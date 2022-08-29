import {useState, useEffect} from "react";
import { getCast } from '../../shared/api/movies';
import {useParams } from 'react-router-dom';

const Cast = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItem] = useState([]);
    const [castItems, setcastItems] = useState([]);

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

    useEffect(() => { 
    if (items.length !== 0){
    const elements = items.map(({ id, profile_path, name, character }) => <li key={id}>        
        {profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`} alt="" /> : <div>???</div>}
        <p>{name}</p>
        <p>Character: {character}</p>
    </li>)
        setcastItems(elements)
    } else {
        return
    }
    }, [items]); 
    

    return (
        <div>
            <ul>{castItems}</ul>            
            {loading && <p>...load information</p>}
            {error && <p>...Information load failed</p>}
        </div>
    )
}

export default Cast;
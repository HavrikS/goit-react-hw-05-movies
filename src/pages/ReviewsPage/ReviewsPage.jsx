import {useState, useEffect} from "react";
import { getReviews } from '../../shared/api/movies';
import {useParams } from 'react-router-dom';

const Reviews = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItem] = useState([]);
    const [reviewsItems, setReviewsItems] = useState([]);

    const { movieId } = useParams();

    useEffect(() => { 
    const fetchReviews = async () => {
            try {
                setLoading(true)                
                const response = await getReviews(movieId);
                const result = response.results;
                console.log(result);
                setItem([...result])
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
    };
    
        fetchReviews()
    }, [movieId]);

    useEffect(() => { 
    if (items.length !== 0){
        const elements = items.map(({ id, content, author_details }) => <li key={id}>
            <h4>Author: {author_details.username}</h4>
        <p>{content}</p>        
    </li>)
        setReviewsItems(elements)
    } else {
        return
    }
    }, [items]); 
    

    return (
        <div>
            <ul>{reviewsItems}</ul>            
            {loading && <p>...load information</p>}
            {error && <p>...Information load failed</p>}
        </div>
    )
}

export default Reviews;
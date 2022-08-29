import {useState, useEffect} from "react";
import { getReviews } from '../../shared/api/movies';
import { useParams } from 'react-router-dom';
import ReviewsList from '../../components/ReviewsList/ReviewsList';

const Reviews = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItem] = useState([]);    
    const [reviewsTitle, setReviewstitle] = useState(false);

    const { movieId } = useParams();

    useEffect(() => { 
    const fetchReviews = async () => {
            try {
                setLoading(true)                
                const response = await getReviews(movieId);
                const result = response.results;                
                setItem([...result])
                setReviewstitle(true)
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
    };    
        fetchReviews()
    }, [movieId]);


    return (
        <div>
            {items.length > 0 ? <ul><ReviewsList items={items} /></ul>  : reviewsTitle && <p>We don`t have any reviews for this movie.</p>}            
            {loading && <p>...load information</p>}
            {error && <p>...Information load failed</p>}
        </div>
    )
}

export default Reviews;

import { useState, useRef, useEffect } from 'react'
import { getMoviesByName } from '../../shared/api/movies';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';



const MoviesPage = () => {
    
    const [inputName, setinputName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const inputEl = useRef();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query")
    
    useEffect(() => {
        if (query) {
            const fetchMoviesByName = async() => {
            try {
                setLoading(true)                
                const response = await getMoviesByName(query);
                const result = response.results;                
                setItems([...result])
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        };
    
        fetchMoviesByName();
        } else {
            return
        }
    }, [query]);

    const handleChange = () => {
        setinputName(inputEl.current.value);    
}

    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({query: inputName})    
        setinputName('')
    };

    const location = useLocation();
    console.log(location);
    //const {from} = location.state
    
    
    const elements = items.map(({ id, title, original_name }) => <li key={id}>        
        <Link  to={`/movies/${id}`}>{title || original_name}</Link>
    </li>)


    return ( 
    <>
    <form  onSubmit={handleSubmit}>        

        <input        
        type="text"
        name="searchName"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={inputName}
        ref={inputEl}
        onChange={handleChange}
        />
        <button type="submit" >
                <span >Search</span>
        </button>
    </form>
        <div>
            <ul>{elements}</ul>
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}                
        </div>
    </>
);
}

export default MoviesPage;
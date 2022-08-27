
import { useState, useRef, useEffect } from 'react'
import { getMoviesByName } from '../../shared/api/movies';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { IoSearchOutline } from "react-icons/io5";



export function MoviesPage() {

    const [searchName, setSearchName] = useState('');
    const [inputName, setinputName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const inputEl = useRef();
    
    useEffect(() => {
        if (searchName === '') {
            return
    }else{
        const fetchMoviesByName = async() => {
            try {
                setLoading(true)  
                console.log(searchName);
                const response = await getMoviesByName(searchName);
                const result = response.results;
                console.log(result);
                setItems([...result])
            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        };
    
        fetchMoviesByName();}
    }, [searchName]);

const handleChange = () => {
    setinputName(inputEl.current.value);    
}

const handleSubmit = event => {
    event.preventDefault();
    setSearchName(inputName);    
    setinputName('')
    };
    
    const elements = items.map(({ id, title, original_name }) => <li key={id}>        
        <Link to={`/movies/${id}`}>{title || original_name}</Link>
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
                <span >Find</span>
        </button>
    </form>
    <div>
                <ol>{elements}</ol>
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}
    </div>
    </>
);
}

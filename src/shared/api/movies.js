import axios from "axios";


export const getTrendingMovies = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d320fda9f0a654278233a1e86d74d04d`);

    return data;
}

export const getMoviesByName = async(name) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&query=${name}&page=1&include_adult=false`);

    return data;
}

export const getMovieById = async(id) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US`);

    return data;
}
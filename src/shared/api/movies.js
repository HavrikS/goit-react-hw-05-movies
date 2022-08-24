import axios from "axios";


export const getTrendingMovies = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=d320fda9f0a654278233a1e86d74d04d`);

    return data;
}
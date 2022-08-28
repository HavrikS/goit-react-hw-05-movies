import {Routes, Route} from "react-router-dom";
import Menu from './components/Menu/Menu.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { MoviesPage } from './pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from './pages/CastPage/CastPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

const App = () => {
return (
    <div className="App">
        <Menu />
        <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
                <Route path="/movies/:movieId/cast" element={<CastPage />} />
                <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    </div>
    );
};

export default App;
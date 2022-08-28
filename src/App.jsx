import {Routes, Route} from "react-router-dom";
import Menu from './components/Menu/Menu.jsx';
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage  = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const CastPage = lazy(() => import('./pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


const App = () => {
return (
    <div >
        <Menu />
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes> 
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
                    <Route path="cast" element={<CastPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    </div>
    );
};

export default App;
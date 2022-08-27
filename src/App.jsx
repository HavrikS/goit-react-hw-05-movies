import {Routes, Route} from "react-router-dom";
import Menu from './components/Menu/Menu.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { MoviesPage } from './pages/MoviesPage/Movies.page.jsx';
import MovieDetailsPage from './pages/MovieDetails/MovieDetailsPage';

const App = () => {
return (
    <div className="App">
        <Menu />
        <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            {/* <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    </div>
    );
};

export default App;
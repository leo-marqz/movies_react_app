import styles from './App.module.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

export function App() 
{
    return (
    <BrowserRouter>
        <header >
            <Link to="/">
                <h1 className={styles.title}>Movies</h1>
            </Link>
        </header>
        <main>
            <Routes>
                <Route index path="/" element={<LandingPage />} />
                <Route  exact path="/movie/:movieId" element={<MovieDetails />} />
            </Routes>
        </main>
    </BrowserRouter>
    );
}
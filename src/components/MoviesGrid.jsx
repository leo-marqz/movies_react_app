import { useState, useEffect } from 'react';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from './Spinner';

export function MoviesGrid()
{
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        get("/discover/movie")
        .then((data) => {
            setMovies(data.results);
            setLoading(false);
        });
    }, []);

    if(isLoading)
    {
        return <Spinner />;
    }
    
    return (
        <ul className={styles.moviesGrid}>
            {
                movies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)
            }
        </ul>
    );  
}
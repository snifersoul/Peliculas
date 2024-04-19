import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '492d218f089fd8c20e9c3a945b482a9f';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const hasTrailer = (movie) => {
    return movie.hasOwnProperty('videos') && movie.videos.results.length > 0;
  };

  return (
    <div>
      <h1>Películas Actualmente en Cartelera</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            {hasTrailer(movie) ? (
              <a
                href={`https://www.themoviedb.org/video/play?key=${movie.videos.results[0].key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Trailer
              </a>
            ) : (
              <p>No hay trailer disponible</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

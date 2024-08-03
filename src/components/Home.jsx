import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/reducer/moviesSlice';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popular);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <h1>Popular Movies</h1>
      <ul className="movies-list">
        {popularMovies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

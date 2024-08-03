import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies } from '../redux/reducer/moviesSlice';
import { Link } from 'react-router-dom';
import '../CSS/Movies.css';

const Upcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcoming);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <h1>Upcoming Movies</h1>
      <ul className="movies-list">
        {upcomingMovies.map((movie) => (
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

export default Upcoming;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../redux/reducer/moviesSlice';
import { Link } from 'react-router-dom';


const TopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRated);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  return (
    <div className="movies-container">
      <h1>Top Rated Movies</h1>
      <ul className="movies-list">
        {topRatedMovies.map((movie) => (
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

export default TopRated;

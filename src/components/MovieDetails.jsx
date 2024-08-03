import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../redux/reducer/moviesSlice';
import { useParams } from 'react-router-dom';
import '../CSS/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <div className="movie-details">
      {movieDetails && (
        <div className='movies_details'>
          <div>
          <h1>{movieDetails.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

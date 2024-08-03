import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import '../CSS/MovieDetails.css';
import '../App.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const searchResults = useSelector((state) => state.movies.searchResults);
  const query = useQuery().get('query');

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            {movie.vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

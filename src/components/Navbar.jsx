import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchMovies } from '../redux/reducer/moviesSlice';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(query));
    Navigate(`/search?query=${query}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
       <Link to="/">MovieDB</Link>
        <Link to="/">Home</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form onSubmit={handleSearch} className="navbar-search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;

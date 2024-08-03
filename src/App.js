
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import MovieDetails from './components/MovieDetails';
import SearchResults from './components/SearchedResults';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

const App = () => (
  <Router>
 <Navbar/>
 <Routes>
 <Route path="/" exact element={<Home/>} />
 <Route path="/top-rated" element={<TopRated/>} />
  <Route path="/upcoming" element={<Upcoming/>} />
  <Route path="/movie/:id" element={<MovieDetails/>} />
  <Route path="/search" element={<SearchResults/>} />
 </Routes>
  </Router>

);

export default App;

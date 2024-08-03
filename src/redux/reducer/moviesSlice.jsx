// src/redux/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tmdb } from '../api/tmdb';

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
  const response = await tmdb.get('/movie/popular', { params: { page: 1 } });
  return response.data.results;
});

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', async () => {
  const response = await tmdb.get('/movie/top_rated', { params: { page: 1 } });
  return response.data.results;
});

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', async () => {
  const response = await tmdb.get('/movie/upcoming', { params: { page: 1 } });
  return response.data.results;
});

export const searchMovies = createAsyncThunk('movies/searchMovies', async (query) => {
  const response = await tmdb.get('/search/movie', { params: { query } });
  return response.data.results;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (id) => {
  const response = await tmdb.get(`/movie/${id}`);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    searchResults: [],
    movieDetails: {},
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popular = action.payload;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRated = action.payload;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcoming = action.payload;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      });
  },
});

export default moviesSlice.reducer;

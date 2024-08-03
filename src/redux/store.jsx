import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../redux/reducer/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;

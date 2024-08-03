import axios from 'axios';

const API_KEY = 'b72a1be6d258ec6a3048c6dcf3e5f858';
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

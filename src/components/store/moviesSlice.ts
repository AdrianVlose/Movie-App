import { createSlice } from '@reduxjs/toolkit';
import type { MovieType } from '../../types/movieTypes';
import { convertMovieListToMovieRecord } from '../../utils/redux';

type MoviesState = {
  movies: Record<string, MovieType>;
};

const initialState: MoviesState = {
  movies: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = convertMovieListToMovieRecord(action.payload);
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice.js';
import movieModalReducer from './modalMovieSlice.js';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieModal: movieModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

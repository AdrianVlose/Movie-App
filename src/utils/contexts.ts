import { createContext } from 'react';
import type {
  ModalContextType,
  LoadingContextType,
  MoviesContextType,
} from '../types/contextTypes';

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  movieToBeDisplayed: null,
  setMovieToBeDisplayed: () => {},
});

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const MoviesContext = createContext<MoviesContextType>({
  movies: [],
  setMovies: () => {},
  movieById: null,
  setMovieById: () => {},
});

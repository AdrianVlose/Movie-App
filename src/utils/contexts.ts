import { createContext } from 'react';
import type {
  ModalContextType,
  LoadingContextType,
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

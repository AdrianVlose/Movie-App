import { createContext } from 'react';
import type { ModalContextType } from '../types/movie-types';

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  movieToBeDisplayed: null,
  setMovieToBeDisplayed: () => {},
});

export default ModalContext;

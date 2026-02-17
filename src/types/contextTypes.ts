import type { MovieType } from './movieTypes';

export type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieToBeDisplayed: MovieType | null;
  setMovieToBeDisplayed: React.Dispatch<React.SetStateAction<MovieType | null>>;
};

export type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MoviesContextType = {
  movies: MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
  movieById: MovieType | null;
  setMovieById: React.Dispatch<React.SetStateAction<MovieType | null>>;
};

import type { MovieType } from '../types/movieTypes';

export function convertMovieListToMovieRecord(movies: MovieType[]) {
  const moviesRecord: Record<number, MovieType> = {};
  movies.forEach((movie) => {
    moviesRecord[movie.id] = movie;
  });

  return moviesRecord;
}

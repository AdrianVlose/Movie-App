import type { MovieType } from '../types/movie-types.ts';

export function classifyRating(rating: number) {
  if (rating < 5) {
    return 'movie-card__rating--bad';
  }
  if (rating >= 8) {
    return 'movie-card__rating--good';
  }
  return 'movie-card__rating--ok';
}

export function convertFirstLetterToUpperCase(text: string) {
  return text.at(0)?.toLocaleUpperCase() + text.slice(1);
}

export function getNextMoviesToBeDisplayed(
  movies: MovieType[],
  numberOfMoviesInAPage: number,
  nextPage: number,
) {
  const numberOfPages = Math.ceil(movies.length / numberOfMoviesInAPage);
  const isLastPage = numberOfPages - 1 === nextPage ? true : false;

  if (isLastPage) {
    return movies.slice(nextPage * numberOfMoviesInAPage);
  }

  return movies.slice(
    nextPage * numberOfMoviesInAPage,
    (nextPage + 1) * numberOfMoviesInAPage,
  );
}

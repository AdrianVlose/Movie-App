import type { MovieType } from '../types/movieTypes.ts';

export function classifyRating(rating: number) {
  if (rating < 5) {
    return 'rating--bad';
  }
  if (rating >= 8) {
    return 'rating--good';
  }
  return 'rating--ok';
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

export function isIdFromUrlValid(id: string | undefined) {
  if (!id) {
    return false;
  }
  if (isNaN(parseInt(id))) {
    return false;
  }
  return true;
}

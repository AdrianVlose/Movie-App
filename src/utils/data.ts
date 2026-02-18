import moviesJSON from '../data/movies.json' with { type: 'json' };
import { getWatchlist } from './watchlist';

export function parseData(
  searchText: string,
  selectedGenre: string,
  isUserOnHomePage: boolean,
) {
  let movies = moviesJSON;
  if (!isUserOnHomePage) {
    movies = getWatchlist();
  }

  const moviesMatchedByText = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchText.toLowerCase());
  });
  const moviesMatchedByTextAndGenre = moviesMatchedByText.filter((movie) => {
    return selectedGenre === 'all genres'
      ? true
      : movie.genre === selectedGenre;
  });

  return moviesMatchedByTextAndGenre.sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating),
  );
}

export function getMovieById(id: string) {
  if (isNaN(parseInt(id))) {
    return null;
  }
  const validId = parseInt(id);
  const indexArray = moviesJSON.findIndex((movie) => movie.id === validId);
  return indexArray ? moviesJSON[indexArray] : null;
}

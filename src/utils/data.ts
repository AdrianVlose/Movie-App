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
  return moviesMatchedByText.filter((movie) => {
    return selectedGenre === 'all genres'
      ? true
      : movie.genre === selectedGenre;
  });
}

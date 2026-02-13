import type { MovieType } from '../types/movieTypes';

const WATCHLIST_KEY = 'List_With_Movies_From_Watchlist_v1';

export function addToWatchlist(movie: MovieType) {
  if (!isMovieAlreadyInHistory) {
    return;
  }

  const watchlist = getWatchlist();
  watchlist.push(movie);

  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
}

export function removeFromWatchlist(movie: MovieType) {
  const watchlist = getWatchlist();

  const watchlistUpdated = watchlist.filter(
    (movieFromList) => movie.id !== movieFromList.id,
  );
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlistUpdated));
}

export function getWatchlist(): MovieType[] {
  const watchlistFromLocalStorage = localStorage.getItem(WATCHLIST_KEY);
  if (!watchlistFromLocalStorage) {
    return [];
  }
  return JSON.parse(watchlistFromLocalStorage);
}

export function isMovieAlreadyInHistory(movie: MovieType) {
  const watchlist = getWatchlist();
  let isMovieInList = false;
  watchlist.forEach((movieInList) => {
    if (movie.id === movieInList.id) {
      isMovieInList = true;
    }
  });
  return isMovieInList;
}

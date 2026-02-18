import type { MovieType } from '../types/movieTypes';
import { MOVIE_TYPE_KEYS } from '../types/constants';
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
  let watchlist = [];
  try {
    watchlist = JSON.parse(watchlistFromLocalStorage);
    if (!isValidWatchlist(watchlist)) {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
  return watchlist;
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

function isValidWatchlist(movies: MovieType[]) {
  if (!Array.isArray(movies)) {
    return false;
  }
  let isValid = true;

  movies.forEach((movie) => {
    if (!checkMovieFromWatchlist(movie)) {
      isValid = false;
    }
  });

  return isValid;
}

function checkMovieFromWatchlist(movie: MovieType) {
  if (!movie) {
    return false;
  }

  const missingKey = MOVIE_TYPE_KEYS.find((key) => !(key in movie));
  if (missingKey) {
    return false;
  }

  if (typeof movie.id !== 'number' || typeof movie.year !== 'number') {
    return false;
  }

  if (
    typeof movie.image !== 'string' ||
    typeof movie.description !== 'string' ||
    typeof movie.genre !== 'string' ||
    typeof movie.rating !== 'string' ||
    typeof movie.title !== 'string'
  ) {
    return false;
  }

  return true;
}

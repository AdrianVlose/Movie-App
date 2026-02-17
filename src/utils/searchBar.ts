import { GENRES } from '../types/constants';

export function getInitialValues(
  genreFromURL: string | null,
  searchTextFromURL: string | null,
) {
  const initialGenreFromURL = genreFromURL ?? '';
  const initialGenre = isGenreFromUrlValid(initialGenreFromURL)
    ? initialGenreFromURL
    : 'all genres';
  const initialSearchValue = searchTextFromURL ? searchTextFromURL : '';

  return {
    initialGenre,
    initialSearchValue,
  };
}

function isGenreFromUrlValid(genre: string) {
  return GENRES.includes(genre);
}

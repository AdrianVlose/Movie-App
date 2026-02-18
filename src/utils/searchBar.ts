import { GENRES } from '../types/constants';
import type { StylesConfig } from 'react-select';

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

export interface Option {
  value: string;
  label: string;
}

export const colourStylesSelect = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 'none',
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? '#3b82f6'
        : isFocused
          ? '#2d2d2d'
          : '#1a1a1a',
      color: isSelected ? '#ffffff' : '#d1d5db',
    };
  },
  menuList: (styles) => ({
    ...styles,
    padding: '0',
    borderRadius: '12px',
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: '12px',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'white',
  }),
} as StylesConfig<Option, false>;

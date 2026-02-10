import SearchForm from './forms/SearchForm.jsx';
import type { MovieType } from '../types/movie-types.js';
import './SearchBar.css';
import { GENRES } from '../types/constants.js';
import { convertFirstLetterToUpperCase } from '../utils/card.js';

function SearchBar({
  updateMoviesFn,
}: {
  updateMoviesFn: React.Dispatch<React.SetStateAction<MovieType[]>>;
}) {
  return (
    <nav className='search-bar'>
      <SearchForm updateMoviesFn={updateMoviesFn} />
      <label className='search-bar__genres'>
        Genre:
        <select>
          {GENRES.map((genre, index) => {
            return (
              <option key={index} value={genre}>
                {convertFirstLetterToUpperCase(genre)}
              </option>
            );
          })}
        </select>
      </label>
    </nav>
  );
}

export default SearchBar;

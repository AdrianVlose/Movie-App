import SearchForm from '../forms/SearchForm.jsx';
import type { MovieType } from '../../types/movie-types.js';
import { GENRES } from '../../types/constants.js';
import { convertFirstLetterToUpperCase } from '../../utils/card.js';
import { useState } from 'react';

function SearchBar({
  updateMoviesFn,
}: {
  updateMoviesFn: React.Dispatch<React.SetStateAction<MovieType[]>>;
}) {
  const [isUserOnHomePage, setIsUserOnHomePage] = useState(true);
  const [genre, setGenre] = useState('all genres');

  return (
    <nav className='search-bar'>
      <SearchForm
        updateMoviesFn={updateMoviesFn}
        selectedGenre={genre}
        isUserOnHomePage={isUserOnHomePage}
      />
      <label className='genres'>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {GENRES.map((genre, index) => {
            return (
              <option key={index} value={genre}>
                {convertFirstLetterToUpperCase(genre)}
              </option>
            );
          })}
        </select>
      </label>
      <section className='icons'>
        <img
          src='src/assets/home.svg'
          alt='home-icon'
          className='icon'
          onClick={() => setIsUserOnHomePage(true)}
        />
        <img
          src='src/assets/watchlist.svg'
          alt='watchlist-icon'
          className='icon'
          onClick={() => setIsUserOnHomePage(false)}
        />
      </section>
    </nav>
  );
}

export default SearchBar;

import SearchForm from '../forms/SearchForm.jsx';
import { GENRES } from '../../types/constants.js';
import { convertFirstLetterToUpperCase } from '../../utils/card.js';
import { useContext, useState } from 'react';
import { SearchBarIcon } from '../../utils/icons.js';
import { NavLink, useSearchParams } from 'react-router';
import { MoviesContext } from '../../utils/contexts.js';
import { getInitialValues } from '../../utils/searchBar.js';

function SearchBar() {
  const { setMovies } = useContext(MoviesContext);
  const [params] = useSearchParams();
  const { initialGenre, initialSearchValue } = getInitialValues(
    params.get('genre'),
    params.get('search'),
  );

  const [genre, setGenre] = useState(initialGenre);

  return (
    <nav className='search-bar'>
      <SearchForm
        updateMoviesFn={setMovies}
        selectedGenre={genre}
        initialInputText={initialSearchValue}
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
        <NavLink to='/' className='icons-link'>
          <SearchBarIcon src='home' />
        </NavLink>
        <NavLink to='watchlist' className='icons-link'>
          <SearchBarIcon src='watchlist' />
        </NavLink>
      </section>
    </nav>
  );
}

export default SearchBar;

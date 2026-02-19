import SearchForm from '../forms/SearchForm.jsx';
import { OPTIONS_GENRES } from '../../types/constants.js';
import { useState } from 'react';
import { SearchBarIcon } from '../../utils/icons.js';
import { NavLink, useSearchParams } from 'react-router';
import { getInitialValues, type Option } from '../../utils/searchBar.js';
import Select, { type SingleValue } from 'react-select';
import { colourStylesSelect } from '../../utils/searchBar.js';

function SearchBar() {
  const [params] = useSearchParams();
  const { initialGenre, initialSearchValue } = getInitialValues(
    params.get('genre'),
    params.get('search'),
  );

  const [genre, setGenre] = useState(initialGenre);
  const handleGenreChange = (value: SingleValue<Option>) => {
    if (value) {
      setGenre(value.value);
    }
  };

  return (
    <nav className='search-bar'>
      <SearchForm selectedGenre={genre} initialInputText={initialSearchValue} />
      <label className='genres'>
        Genre:
        <Select
          options={OPTIONS_GENRES}
          defaultValue={OPTIONS_GENRES[0]}
          styles={colourStylesSelect}
          onChange={handleGenreChange}
        />
      </label>
      <section className='icons'>
        <NavLink to='/' className='icons-link'>
          Home
          <SearchBarIcon src='home' />
        </NavLink>
        <NavLink to='watchlist' className='icons-link'>
          Watchlist
          <SearchBarIcon src='watchlist' />
        </NavLink>
      </section>
    </nav>
  );
}

export default SearchBar;

import { useEffect, useState } from 'react';
import { parseData } from '../../utils/data';
import { DeleteIconForSearch } from '../../utils/icons';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store.js';

function SearchForm({
  selectedGenre,
  initialInputText,
}: {
  selectedGenre: string;
  initialInputText: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const [inputText, setInputText] = useState(initialInputText);

  const location = useLocation().pathname;
  const isWatchlistPage = location === '/watchlist' ? true : false;

  useEffect(() => {
    const filteredMovies = parseData(
      inputText,
      selectedGenre,
      !isWatchlistPage,
    );

    dispatch({ type: 'movies/setMovies', payload: filteredMovies });
  }, [selectedGenre, inputText, isWatchlistPage]);

  const handleSearch = (event: React.SubmitEvent<HTMLFormElement> | null) => {
    if (!event) {
      return;
    }
    event.preventDefault();

    const filteredMovies = parseData(
      inputText,
      selectedGenre,
      !isWatchlistPage,
    );
    dispatch({ type: 'movies/setMovies', payload: filteredMovies });
  };

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <label className='label'>
        <input
          id='search-input'
          type='text'
          placeholder='Type a movie ...'
          autoComplete='none'
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <DeleteIconForSearch onClick={() => setInputText('')} />
      </label>
    </form>
  );
}

export default SearchForm;

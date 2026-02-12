import { useEffect, useState } from 'react';
import './SearchForm.css';
import { parseData } from '../../utils/data';
import type { MovieType } from '../../types/movie-types';

function SearchForm({
  updateMoviesFn,
  selectedGenre,
  isUserOnHomePage,
}: {
  updateMoviesFn: React.Dispatch<React.SetStateAction<MovieType[]>>;
  selectedGenre: string;
  isUserOnHomePage: boolean;
}) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const filteredMovies = parseData(
      inputText,
      selectedGenre,
      isUserOnHomePage,
    );
    updateMoviesFn(filteredMovies);
  }, [selectedGenre, isUserOnHomePage]);

  const handleSearch = (event: React.SubmitEvent<HTMLFormElement> | null) => {
    if (!event) {
      return;
    }
    event.preventDefault();

    const filteredMovies = parseData(
      inputText,
      selectedGenre,
      isUserOnHomePage,
    );
    updateMoviesFn(filteredMovies);
  };

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <label className='label'>
        <input
          id='search-input'
          className='search-form__input'
          type='text'
          placeholder='Type a movie ...'
          autoComplete='none'
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </label>
    </form>
  );
}

export default SearchForm;

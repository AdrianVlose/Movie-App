import { useContext, useEffect, useState } from 'react';
import { parseData } from '../../utils/data';
import type { MovieType } from '../../types/movieTypes';
import { LoadingContext } from '../../utils/contexts';
import { DeleteIconForSearch } from '../../utils/icons';

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
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    const filteredMovies = parseData(
      inputText,
      selectedGenre,
      isUserOnHomePage,
    );
    updateMoviesFn(filteredMovies);
    setIsLoading(false);
  }, [selectedGenre, isUserOnHomePage, inputText]);

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

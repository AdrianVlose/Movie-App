import { useContext, useEffect, useState } from 'react';
import { parseData } from '../../utils/data';
import type { MovieType } from '../../types/movieTypes';
import { LoadingContext } from '../../utils/contexts';
import { DeleteIconForSearch } from '../../utils/icons';
import { useLocation } from 'react-router';

function SearchForm({
  updateMoviesFn,
  selectedGenre,
  initialInputText,
}: {
  updateMoviesFn: React.Dispatch<React.SetStateAction<MovieType[]>>;
  selectedGenre: string;
  initialInputText: string;
}) {
  const [inputText, setInputText] = useState(initialInputText);
  const { setIsLoading } = useContext(LoadingContext);

  const location = useLocation().pathname;
  const isWatchlistPage = location === '/watchlist' ? true : false;

  useEffect(() => {
    setIsLoading(true);
    const filteredMovies = parseData(
      inputText,
      selectedGenre,
      !isWatchlistPage,
    );
    updateMoviesFn(filteredMovies);
    setIsLoading(false);
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

import Cards from './cards/Cards.jsx';
import type { MovieType } from '../types/movieTypes.js';
import { useState } from 'react';
import SearchBar from './bars/SearchBar.jsx';
import { LoadingContext } from '../utils/contexts.js';

function Main() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className='main'>
      <LoadingContext value={{ isLoading, setIsLoading }}>
        <SearchBar updateMoviesFn={setMovies} />
        <Cards movies={movies} />
      </LoadingContext>
    </main>
  );
}

export default Main;

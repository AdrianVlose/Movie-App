import Cards from './cards/Cards.jsx';
import type { MovieType } from '../types/movie-types.js';
import { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import './Main.css';

function Main() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  return (
    <main className='page__main'>
      <SearchBar updateMoviesFn={setMovies} />
      <Cards movies={movies} />
    </main>
  );
}

export default Main;

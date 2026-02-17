import type { MovieType } from '../types/movieTypes.js';
import { useState } from 'react';
import SearchBar from './bars/SearchBar.jsx';
import { MoviesContext } from '../utils/contexts.js';
import { Outlet } from 'react-router';

function Main() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [movieById, setMovieById] = useState<MovieType | null>(null);
  return (
    <main className='main'>
      <MoviesContext value={{ movies, setMovies, movieById, setMovieById }}>
        <SearchBar />
        <Outlet />
      </MoviesContext>
    </main>
  );
}

export default Main;

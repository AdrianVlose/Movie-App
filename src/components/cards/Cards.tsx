import './Cards.css';
import type { MovieType } from '../../types/movie-types.js';
import Card from './Card.jsx';

function Cards({ movies = [] }: { movies: MovieType[] }) {
  return (
    <section className='movies-list'>
      {movies?.map((movie, index) => {
        return <Card movie={movie} index={index} key={index} />;
      })}
    </section>
  );
}

export default Cards;

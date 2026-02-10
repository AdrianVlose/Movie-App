import './Card.css';
import type { MovieType } from '../../types/movie-types.js';
import {
  classifyRating,
  convertFirstLetterToUpperCase,
} from '../../utils/card.js';

function Card({ movie, index }: { movie: MovieType; index: number }) {
  const imgPath = `/assets/${movie.image}`;
  const ratingValueColor = classifyRating(parseFloat(movie.rating));
  const formattedGenre = convertFirstLetterToUpperCase(movie.genre);
  return (
    <article id={`card-id-${index}`} className='movie-card'>
      <img src={imgPath} className='movie-card__img' alt={movie.title} />
      <section className='movie-card__info'>
        <h2 className='movie-card__title'>{movie.title}</h2>
        <span className='movie-card__rating'>
          Rating:{' '}
          <h4 className={`movie-card__specification ${ratingValueColor}`}>
            {movie.rating}
          </h4>
        </span>
        <span className='movie-card__rating'>
          Genre: <h4 className='movie-card__specification'>{formattedGenre}</h4>
        </span>
        <button className='movie-card__watchlist-button'>
          Add to Watchlist
        </button>
      </section>
    </article>
  );
}

export default Card;

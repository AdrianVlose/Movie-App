import type { MovieType } from '../../types/movieTypes.js';
import {
  classifyRating,
  convertFirstLetterToUpperCase,
} from '../../utils/card.js';
import { useContext, useState } from 'react';
import {
  addToWatchlist,
  isMovieAlreadyInHistory,
  removeFromWatchlist,
} from '../../utils/watchlist.js';
import { ModalContext } from '../../utils/contexts.js';

function Card({ movie, index }: { movie: MovieType; index: number }) {
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(
    isMovieAlreadyInHistory(movie),
  );
  const { isModalOpen, setIsModalOpen, setMovieToBeDisplayed } =
    useContext(ModalContext);

  const imgPath = `src/assets/movies/${movie.image}`;
  const ratingValueColor = classifyRating(parseFloat(movie.rating));
  const formattedGenre = convertFirstLetterToUpperCase(movie.genre);

  const handleAddToWatchlist = (event: React.MouseEvent) => {
    event.stopPropagation();

    addToWatchlist(movie);
    setIsMovieInWatchlist(true);
  };

  const handleRemoveFromWatchlist = (event: React.MouseEvent) => {
    event.stopPropagation();

    removeFromWatchlist(movie);
    setIsMovieInWatchlist(false);
  };

  return (
    <article
      id={`card-id-${index}`}
      className={isModalOpen ? 'movie-card no-hover' : 'movie-card'}
      onClick={() => {
        setIsModalOpen(true);
        setMovieToBeDisplayed(movie);
      }}
    >
      <img src={imgPath} className='img' alt={movie.title} />
      <section className='info'>
        <h2 className='title'>{movie.title}</h2>
        <span className='label-information'>
          Rating:
          <h4 className={`specification ${ratingValueColor}`}>
            {movie.rating}
          </h4>
        </span>
        <span className='label-information'>
          Genre: <h4 className='specification'>{formattedGenre}</h4>
        </span>
        <button
          type='submit'
          className='watchlist-button'
          onClick={
            isMovieInWatchlist
              ? handleRemoveFromWatchlist
              : handleAddToWatchlist
          }
        >
          {isMovieInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </section>
    </article>
  );
}

export default Card;

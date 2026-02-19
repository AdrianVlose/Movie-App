import type { MovieType } from '../../types/movieTypes.js';
import {
  classifyRating,
  convertFirstLetterToUpperCase,
} from '../../utils/card.js';
import { useState } from 'react';
import {
  addToWatchlist,
  isMovieAlreadyInHistory,
  removeFromWatchlist,
} from '../../utils/watchlist.js';
import type { AppDispatch, RootState } from '../store/store.js';
import { useDispatch, useSelector } from 'react-redux';

function Card({ movie, index }: { movie: MovieType; index: number }) {
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(
    isMovieAlreadyInHistory(movie),
  );

  const isModalOpen = useSelector(
    (state: RootState) => state.movieModal.isModalOpen,
  );
  const dispatch = useDispatch<AppDispatch>();

  const imgPath = `/src/assets/movies/${movie.image}`;
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
        dispatch({ type: 'movieModal/setIsModalOpen', payload: true });
        dispatch({
          type: 'movieModal/setMovieIdToBeDisplayed',
          payload: movie.id,
        });
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

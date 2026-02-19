import { useDispatch, useSelector } from 'react-redux';
import {
  classifyRating,
  convertFirstLetterToUpperCase,
} from '../../utils/card.js';
import type { AppDispatch, RootState } from '../store/store.js';

function ModalCard() {
  const movieIdToBeDisplayed = useSelector(
    (state: RootState) => state.movieModal.movieIdToBeDisplayed,
  );
  const movieToBeDisplayed = useSelector(
    (state: RootState) => state.movies.movies[movieIdToBeDisplayed],
  );
  const dispatch = useDispatch<AppDispatch>();
  if (!movieToBeDisplayed) {
    return;
  }
  const movie = movieToBeDisplayed;
  const imgPath = `/src/assets/movies/${movie.image}`;
  const ratingValueColor = classifyRating(parseFloat(movie.rating));
  const formattedGenre = convertFirstLetterToUpperCase(movie.genre);
  return (
    <div className='overlay'>
      <dialog className='modal'>
        <img src={imgPath} className='img' alt={movie.title} />
        <section className='info'>
          <h2 className='title'>{movie.title}</h2>
          <span className='label-information'>
            Rating:{' '}
            <h4 className={`specification ${ratingValueColor}`}>
              {movie.rating}
            </h4>
          </span>
          <span className='label-information'>
            Genre: <h4 className='specification'>{formattedGenre}</h4>
          </span>
          <span className='label-information'>
            Year: <h4 className='specification'>{movie.year}</h4>
          </span>
          <span className='description'>
            Description: <p>{movie.description}</p>
          </span>
        </section>
        <button
          type='button'
          onClick={() => {
            dispatch({ type: 'movieModal/setIsModalOpen', payload: false });
          }}
          className='close-button'
        >
          Close
        </button>
      </dialog>
    </div>
  );
}

export default ModalCard;

import {
  classifyRating,
  convertFirstLetterToUpperCase,
} from '../../utils/card.js';
import { ModalContext } from '../../utils/contexts.js';
import { useContext } from 'react';

function ModalCard() {
  const { movieToBeDisplayed, setIsModalOpen } = useContext(ModalContext);
  if (!movieToBeDisplayed) {
    return;
  }
  const movie = movieToBeDisplayed;
  const imgPath = `src/assets/movies/${movie.image}`;
  const ratingValueColor = classifyRating(parseFloat(movie.rating));
  const formattedGenre = convertFirstLetterToUpperCase(movie.genre);
  return (
    <div
      className='overlay'
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
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
      </dialog>
    </div>
  );
}

export default ModalCard;

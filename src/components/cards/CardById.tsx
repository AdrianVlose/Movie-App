import { useParams } from 'react-router';
import {
  classifyRating,
  convertFirstLetterToUpperCase,
} from '../../utils/card.js';
import { getMovieById } from '../../utils/data.js';

function CardById() {
  const { id } = useParams();
  const idFromParams = id ?? '';
  const movie = getMovieById(idFromParams);
  let imgPath, formattedGenre, ratingValueColor;
  if (movie) {
    imgPath = `/src/assets/movies/${movie.image}`;
    ratingValueColor = classifyRating(parseFloat(movie.rating));
    formattedGenre = convertFirstLetterToUpperCase(movie.genre);
  }

  return (
    <div className='single-card'>
      {movie ? (
        <article className='card'>
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
        </article>
      ) : (
        <h2>Movie with this id doesn't exist</h2>
      )}
    </div>
  );
}

export default CardById;

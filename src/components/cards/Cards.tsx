import './Cards.css';
import type { MovieType } from '../../types/movie-types.js';
import Card from './Card.jsx';
import { useEffect, useState } from 'react';
import { getNextMoviesToBeDisplayed } from '../../utils/card.js';

function Cards({ movies = [] }: { movies: MovieType[] }) {
  const [numberOfPageToBeDisplayed, setNumberOfPageToBeDisplayed] = useState(0);
  const numberOfMoviesInAPage = 8;
  const currentDisplayedMovies = getNextMoviesToBeDisplayed(
    movies,
    numberOfMoviesInAPage,
    numberOfPageToBeDisplayed,
  );
  const numberOfPages = Math.ceil(movies.length / numberOfMoviesInAPage);

  const leftArrowExtraClass =
    0 === numberOfPageToBeDisplayed ? 'arrow-icon--disabled' : '';
  const rightArrowExtraClass =
    numberOfPages - 1 === numberOfPageToBeDisplayed
      ? 'arrow-icon--disabled'
      : '';

  useEffect(() => {
    setNumberOfPageToBeDisplayed(0);
  }, [movies]);

  return (
    <section className='movies-list'>
      <img
        src='src/assets/left-arrow.svg'
        alt='left-arrow'
        className={`movies-list__arrow-icon arrow-icon--left ${leftArrowExtraClass}`}
        onClick={() =>
          setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed - 1)
        }
      />
      {currentDisplayedMovies?.map((movie, index) => {
        return <Card movie={movie} index={index} key={index} />;
      })}
      <img
        src='src/assets/right-arrow.svg'
        alt='right-arrow'
        className={`movies-list__arrow-icon arrow-icon--right ${rightArrowExtraClass}`}
        onClick={() =>
          setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed + 1)
        }
      />
    </section>
  );
}

export default Cards;

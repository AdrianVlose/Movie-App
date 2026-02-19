import Card from './Card.jsx';
import { useEffect, useState } from 'react';
import { getNextMoviesToBeDisplayed } from '../../utils/card.js';
import ModalCard from './ModalCard.js';
import { LeftArrowIcon, RightArrowIcon } from '../../utils/icons.js';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store.js';
import type { MovieType } from '../../types/movieTypes.js';

function Cards() {
  const [numberOfPageToBeDisplayed, setNumberOfPageToBeDisplayed] = useState(0);

  const moviesUnsorted = useSelector((state: RootState) => state.movies.movies);
  const movies = Object.values(moviesUnsorted).sort(
    (a: MovieType, b: MovieType) => parseFloat(b.rating) - parseFloat(a.rating),
  );

  const isModalOpen = useSelector(
    (state: RootState) => state.movieModal.isModalOpen,
  );

  const numberOfMoviesInAPage = 8;
  const currentDisplayedMovies = getNextMoviesToBeDisplayed(
    movies,
    numberOfMoviesInAPage,
    numberOfPageToBeDisplayed,
  );
  const numberOfPages = Math.ceil(movies.length / numberOfMoviesInAPage);

  const leftArrowExtraClass = 0 === numberOfPageToBeDisplayed ? 'disabled' : '';
  const rightArrowExtraClass =
    numberOfPages - 1 === numberOfPageToBeDisplayed || numberOfPages === 0
      ? 'disabled'
      : '';

  useEffect(() => {
    setNumberOfPageToBeDisplayed(0);
  }, [moviesUnsorted]);

  return (
    <section className='movies-list'>
      <LeftArrowIcon
        className={leftArrowExtraClass}
        onClick={() =>
          setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed - 1)
        }
      />
      {currentDisplayedMovies.length === 0 ? (
        <h2 className='no-cards-text'>No cards to be displayed</h2>
      ) : (
        currentDisplayedMovies?.map((movie, index) => {
          return <Card movie={movie} index={index} key={index} />;
        })
      )}

      {isModalOpen ? <ModalCard /> : <></>}
      <RightArrowIcon
        className={rightArrowExtraClass}
        onClick={() =>
          setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed + 1)
        }
      />
    </section>
  );
}

export default Cards;

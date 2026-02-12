import type { MovieType } from '../../types/movie-types.js';
import Card from './Card.jsx';
import { useEffect, useState } from 'react';
import { getNextMoviesToBeDisplayed } from '../../utils/card.js';
import ModalContext from '../../utils/modalContext.js';
import ModalCard from './ModalCard.js';

function Cards({ movies = [] }: { movies: MovieType[] }) {
  const [numberOfPageToBeDisplayed, setNumberOfPageToBeDisplayed] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieToBeDisplayed, setMovieToBeDisplayed] =
    useState<MovieType | null>(null);

  const numberOfMoviesInAPage = 8;
  const currentDisplayedMovies = getNextMoviesToBeDisplayed(
    movies,
    numberOfMoviesInAPage,
    numberOfPageToBeDisplayed,
  );
  const numberOfPages = Math.ceil(movies.length / numberOfMoviesInAPage);

  const leftArrowExtraClass = 0 === numberOfPageToBeDisplayed ? 'disabled' : '';
  const rightArrowExtraClass =
    numberOfPages - 1 === numberOfPageToBeDisplayed ? 'disabled' : '';

  useEffect(() => {
    setNumberOfPageToBeDisplayed(0);
  }, [movies]);

  return (
    <section className='movies-list'>
      <img
        src='src/assets/left-arrow.svg'
        alt='left-arrow'
        className={`arrow-icon left ${leftArrowExtraClass}`}
        onClick={() =>
          setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed - 1)
        }
      />
      <ModalContext
        value={{
          isModalOpen,
          setIsModalOpen,
          movieToBeDisplayed,
          setMovieToBeDisplayed,
        }}
      >
        {currentDisplayedMovies?.map((movie, index) => {
          return <Card movie={movie} index={index} key={index} />;
        })}

        {isModalOpen ? <ModalCard /> : <></>}
      </ModalContext>
      <img
        src='src/assets/right-arrow.svg'
        alt='right-arrow'
        className={`arrow-icon right ${rightArrowExtraClass}`}
        onClick={() =>
          setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed + 1)
        }
      />
    </section>
  );
}

export default Cards;

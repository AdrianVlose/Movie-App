import type { MovieType } from '../../types/movieTypes.js';
import Card from './Card.jsx';
import { useContext, useEffect, useState } from 'react';
import { getNextMoviesToBeDisplayed } from '../../utils/card.js';
import { ModalContext, LoadingContext } from '../../utils/contexts.js';
import ModalCard from './ModalCard.js';
import { LeftArrowIcon, RightArrowIcon } from '../../utils/icons.js';

function Cards({ movies = [] }: { movies: MovieType[] }) {
  const [numberOfPageToBeDisplayed, setNumberOfPageToBeDisplayed] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieToBeDisplayed, setMovieToBeDisplayed] =
    useState<MovieType | null>(null);
  const { isLoading } = useContext(LoadingContext);

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
  }, [movies]);

  return (
    <section className={isLoading ? 'loading-state-display' : 'movies-list'}>
      {isLoading ? (
        <h2 className='loading-state-text'>Preparing your dashboard</h2>
      ) : (
        <>
          <LeftArrowIcon
            className={leftArrowExtraClass}
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
            {currentDisplayedMovies.length === 0 ? (
              <h2 className='no-cards-text'>No cards to be displayed</h2>
            ) : (
              currentDisplayedMovies?.map((movie, index) => {
                return <Card movie={movie} index={index} key={index} />;
              })
            )}

            {isModalOpen ? <ModalCard /> : <></>}
          </ModalContext>
          <RightArrowIcon
            className={rightArrowExtraClass}
            onClick={() =>
              setNumberOfPageToBeDisplayed(numberOfPageToBeDisplayed + 1)
            }
          />
        </>
      )}
    </section>
  );
}

export default Cards;

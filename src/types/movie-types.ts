export type MovieType = {
  id: number;
  title: string;
  image: string;
  genre: string;
  rating: string;
  year: number;
  description: string;
};

export type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieToBeDisplayed: MovieType | null;
  setMovieToBeDisplayed: React.Dispatch<React.SetStateAction<MovieType | null>>;
};

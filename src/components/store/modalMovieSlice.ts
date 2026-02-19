import { createSlice } from '@reduxjs/toolkit';

type MovieModalState = {
  isModalOpen: boolean;
  movieIdToBeDisplayed: number;
};

const initialState: MovieModalState = {
  isModalOpen: false,
  movieIdToBeDisplayed: 0,
};

const movieModalSlice = createSlice({
  name: 'movieModal',
  initialState,
  reducers: {
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    setMovieIdToBeDisplayed(state, action) {
      state.movieIdToBeDisplayed = action.payload;
    },
  },
});

export const { setIsModalOpen, setMovieIdToBeDisplayed } =
  movieModalSlice.actions;
export default movieModalSlice.reducer;

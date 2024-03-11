import {createSlice} from '@reduxjs/toolkit';
import {Movie} from '../../services/types';

// Last selected movie
// 10 movies
interface InitialState {
  movies: Movie[];
  movieSelected: Movie;
  loading: boolean;
  loadingDetails: boolean;
}
interface MovieSlice {
  moviesData: InitialState;
}
const initialState: InitialState = {
  movies: [],
  movieSelected: {
    title: '',
    year: 0,
    imdbId: '',
    rank: 0,
    actors: '',
    aka: '',
    imdbUrl: '',
    imdbIv: '',
    imgPoster: '',
    photo_width: 0,
    photo_height: 0,
  },
  loadingDetails: false,
  loading: false,
};

const moviesSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {
    setLoadingMovies: (state, action) => {
      state.loading = action.payload.loading;
    },
    setLoadingDetailMovies: (state, action) => {
      state.loadingDetails = action.payload.loading;
    },
    setMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
    setMovieSelected: (state, action) => {
      state.movieSelected = action.payload.movieSelected;
    },
    cleanUserStore: state => {
      state.movies = [];
    },
  },
});

export const {
  setLoadingDetailMovies,
  setLoadingMovies,
  cleanUserStore,
  setMovies,
  setMovieSelected,
} = moviesSlice.actions;

export const selectMovies = (state: MovieSlice) => state.moviesData.movies;
export const selectLoadingMovies = (state: MovieSlice) =>
  state.moviesData.loading;
export const selectLoadingDetailsMovies = (state: MovieSlice) =>
  state.moviesData.loadingDetails;
export const selectChoosenMovie = (state: MovieSlice) =>
  state.moviesData.movieSelected;

export default moviesSlice.reducer;

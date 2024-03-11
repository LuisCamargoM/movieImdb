import {createSlice} from '@reduxjs/toolkit';
import {Movie} from '../../services/types';

interface InitialState {
  term: string;
  loading: boolean;
  results: Movie[];
}
interface SearchSlice {
  searchData: InitialState;
}
const initialState: InitialState = {
  term: '',
  results: [],
  loading: false,
};

const searchSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    setLoadingSearch: (state, action) => {
      state.loading = action.payload.loading;
    },
    setTerm: (state, action) => {
      state.term = action.payload.term;
    },

    setResults: (state, action) => {
      state.results = action.payload.results;
    },

    cleanSearchStore: state => {
      state.term = '';
    },
  },
});

export const {setLoadingSearch, setTerm, setResults, cleanSearchStore} =
  searchSlice.actions;

export const selectTerm = (state: SearchSlice) => state.searchData.term;
export const selectResults = (state: SearchSlice) => state.searchData.results;
export const selectLoadingSearch = (state: SearchSlice) =>
  state.searchData.loading;
export default searchSlice.reducer;

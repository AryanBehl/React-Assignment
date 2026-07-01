import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  movies: [],
  loading: false,
  error: null,
  page: 1,              
  totalResults: 0,  
  yearFilter: '',
  sortBy: 'year',    
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPage: (state, action) => {
       state.page = action.payload;
    },
    setTotalResults: (state, action) => {
       state.totalResults = action.payload;
    },
    setYearFilter: (state, action) => {
    state.yearFilter = action.payload;
    },
    setSortBy: (state, action) => {
    state.sortBy = action.payload;
    },
  },
});

export const { setSearchTerm, setMovies, setLoading, setError, setPage, setTotalResults, setYearFilter, setSortBy } = movieSlice.actions;
export default movieSlice.reducer;
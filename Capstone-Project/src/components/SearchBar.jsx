import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setMovies, setLoading, setError, setPage, setTotalResults } from '../redux/movieSlice';
import axios from 'axios';

const API_KEY = '25d8d929';

function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { page, searchTerm } = useSelector((state) => state.movies);

  const searchMovies = async (searchText, pageNum) => {
    if (!searchText.trim()) return;
    
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&page=${pageNum}`);
      
      if (response.data.Response === 'True') {
        dispatch(setMovies(response.data.Search));
        dispatch(setSearchTerm(searchText));
        dispatch(setTotalResults(parseInt(response.data.totalResults)));
        dispatch(setPage(pageNum));
      } else {
        dispatch(setError(response.data.Error || 'No movies found'));
        dispatch(setMovies([]));
        dispatch(setTotalResults(0));
      }
    } catch (err) {
      dispatch(setError('Failed to fetch movies. Check your network.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      searchMovies(input, 1);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm, page);
    }
  }, [page]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie... (e.g., Batman)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
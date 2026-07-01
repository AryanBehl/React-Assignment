import React from 'react';
import { useSelector } from 'react-redux';

function MovieList() {
  const { movies, loading, error, yearFilter, sortBy } = useSelector((state) => state.movies);

  const addToWatchlist = (movie) => {
    const stored = localStorage.getItem('watchlist');
    const currentWatchlist = stored ? JSON.parse(stored) : [];

    if (!currentWatchlist.some((m) => m.imdbID === movie.imdbID)) {
      const updated = [...currentWatchlist, movie];
      localStorage.setItem('watchlist', JSON.stringify(updated));
      alert('✅ Added to watchlist');
    } else {
      alert('⚠️ Already in watchlist');
    }
  };

  if (loading) return <div className="loading">Loading movies...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movies || movies.length === 0) return <div className="no-results">No movies found. Try a different search.</div>;

  let filteredMovies = movies;
  if (yearFilter && yearFilter.trim() !== '') {
    filteredMovies = movies.filter((movie) => movie.Year === yearFilter);
  }

  let sortedMovies = [...filteredMovies];
  if (sortBy === 'year') {
    sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  }

  return (
    <div className="movie-grid">
      {sortedMovies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Poster'}
            alt={movie.Title}
          />
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <button onClick={() => addToWatchlist(movie)}>➕ Add to Watchlist</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
import React, { useState, useEffect } from 'react';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('watchlist');
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  const removeFromWatchlist = (imdbID) => {
    const updated = watchlist.filter((movie) => movie.imdbID !== imdbID);
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated));
    alert('🗑️ Removed from watchlist');
  };

  return (
    <div className="watchlist-container">
      <h2>📋 My Watchlist</h2>
      {watchlist.length === 0 && <p>No movies in watchlist. Add some from search results.</p>}
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Poster'}
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <button onClick={() => removeFromWatchlist(movie.imdbID)}>❌ Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
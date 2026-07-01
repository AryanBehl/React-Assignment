import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterSort from './components/FilterSort';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import Dashboard from './components/Dashboard';
import Watchlist from './components/Watchlist';
import { useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showWatchlist, setShowWatchlist] = useState(false);

  return (
    <div className="app">
      <button onClick={toggleDarkMode} style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 999, padding: '8px 12px' }}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <button onClick={() => setShowWatchlist(!showWatchlist)} style={{ marginTop: '60px', padding: '8px 16px' }}>
        {showWatchlist ? '← Back to Movies' : '📋 My Watchlist'}
      </button>

      <h1>🎬 Movie Discovery Dashboard</h1>
      <p className="subtitle">Discover, filter, and track your favorite movies</p>

      {showWatchlist ? (
        <Watchlist />
      ) : (
        <>
          <SearchBar />
          <FilterSort />
          <MovieList />
          <Pagination />
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;
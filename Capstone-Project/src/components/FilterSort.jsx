import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setYearFilter, setSortBy } from '../redux/movieSlice';

function FilterSort() {
  const dispatch = useDispatch();
  const { yearFilter, sortBy } = useSelector((state) => state.movies);

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0' }}>
      <div>
        <label>Year: </label>
        <input
          type="number"
          placeholder="e.g., 2022"
          value={yearFilter}
          onChange={(e) => dispatch(setYearFilter(e.target.value))}
          style={{ padding: '5px', width: '80px' }}
        />
      </div>
      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
          <option value="year">Year (Newest first)</option>
          <option value="rating">Rating (Highest first)</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSort;
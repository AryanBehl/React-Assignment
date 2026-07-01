import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/movieSlice';

function Pagination() {
  const { page, totalResults } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalResults / 10);

  const handlePrev = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNext = () => {
    if (page < totalPages) dispatch(setPage(page + 1));
  };

  if (totalResults === 0) return null;

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button onClick={handlePrev} disabled={page === 1}>◀ Previous</button>
      <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
      <button onClick={handleNext} disabled={page === totalPages}>Next ▶</button>
    </div>
  );
}

export default Pagination;
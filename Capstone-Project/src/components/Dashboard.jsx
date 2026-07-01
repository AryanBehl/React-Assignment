import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const { movies } = useSelector((state) => state.movies);

  const yearCount = {};
  movies.forEach((movie) => {
    const year = movie.Year;
    yearCount[year] = (yearCount[year] || 0) + 1;
  });

  const data = Object.keys(yearCount).map((year) => ({
    year,
    count: yearCount[year],
  }));

  return (
    <div style={{ marginTop: '40px', padding: '20px', borderTop: '2px solid #ccc' }}>
      <h2>📊 Movies per Year (Dashboard)</h2>
      {movies.length === 0 ? (
        <p>Search for movies to see chart.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Dashboard;
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const Grid = ({ type }) => {
  const movies = useSelector(state => state[type]);

  return (
    <div class='box'>
      <div class='columns is-multiline layout'>
        {movies.map((movie, i) => (
          <div className='column is-one-quarter' key={i}>
            <Card element={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

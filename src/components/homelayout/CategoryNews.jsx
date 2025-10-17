import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Category News {id}</p>
    </div>
  );
};

export default CategoryNews;

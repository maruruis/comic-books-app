import React, { useEffect, useState } from 'react';
import Comic from './Comic';

export default function Comics() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/comic')
      .then((response) => response.json())
      .then((data) => {
        setComics(data);
      });
  }, []);

  const handleComicChange = (newValue, oldValue) => {
    console.log(`The value of the comic has changed from ${oldValue} to ${newValue}`);
  };

  return (
    <div className="container bg-white text-dark p-4">
      <h1 className="text-center">Comic Books</h1>
      {comics.length === 0 && (
        <p className="alert alert-warning">There are no comics at the moment</p>
      )}

      <div className="container row">
        {comics.map((comic) => (
          <Comic
            key={comic.id}
            onChange={handleComicChange}
            comic={comic}
          />
        ))}
      </div>
    </div>
  );
}

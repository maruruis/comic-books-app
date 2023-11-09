import React, { useEffect, useState } from 'react';
import Comic from './Comic';

export default function Comics() {
  // Declare a state variable to store the comics data
  const [comics, setComics] = useState([]);
  //  fetches the comics data from the API
  useEffect(() => { 
    fetch('https://comics-w7h9.onrender.com/comic')
      .then((response) => response.json())
      .then((data) => {
        setComics(data);
      });
  }, []);
        // Handle a change to the comic data
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

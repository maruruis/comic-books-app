import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UpdateComic from '../components/UpdateComic';

export default function SingleComic() {
  const { id } = useParams();
  const [comic, setComic] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/comic/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setComic(res);
        });
    }
  }, [id]);

  return (
    <div className="container row">
      <div className="col-md-6">
        <img src={comic.image} className="img-fluid" alt="loading..." />
      </div>
      <div className="col-md-6">
        <h1>{comic.title}</h1>
        <p>{comic.description}</p>

        {comic && <UpdateComic comic={comic} />}
      </div>
    </div>
  );
}
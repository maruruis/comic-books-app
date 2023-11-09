import React, { useState } from 'react';

export default function UpdateComic({ comic }) {
  // Declare state variables
  const [title, setTitle] = useState(comic.title || '');
  const [description, setDescription] = useState(comic.description || '');
  const [imageUrl, setImageUrl] = useState(comic.image || '');


  function handleComicUpdate(event) {
    event.preventDefault();

    fetch(`https://comics-w7h9.onrender.com/comic/${comic.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        image: imageUrl,
        
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        alert('Comic updated successfully!');
      })
      .catch((error) => {
        alert('Oops...');
      });
  }

  return (
    <div className="container mt-5">
      <h4>UPDATE COMIC</h4>
      <div className="">
        <form onSubmit={handleComicUpdate}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

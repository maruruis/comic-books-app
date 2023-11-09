import React, { useState } from 'react';

export default function AddComic() {
    // Declare state variables to store the comic's title, description, and image URL
  const [title, setTitle] = useState('');
  const [desc, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');

  function comicSubmit(e) {
    e.preventDefault();

    fetch('https://comics-w7h9.onrender.com/comic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description: desc, image: image_url, is_archived: false })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('success');

        alert('Comic saved successfully!');
      })
      .catch((error) => {
        alert('We have an error reaching our servers!');
      });

    setTitle('');
    setDescription('');
    setImageUrl('');
  }

  return (
    <div className="container row mt-5" style={{ height: '80vh' }}>
      <div className="col-md-6">
        <form onSubmit={comicSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image url</label>
            <input
              type="url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

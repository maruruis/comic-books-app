import React from 'react';
import { Link } from 'react-router-dom';

// declare a functional component named comic
export default function Comic({comic}) 
{ 
  // Define a function called deleteComic that sends a DELETE request to the API to delete the comic
    function deleteComic(){
        fetch(`https://comics-w7h9.onrender.com/comic/${comic.id}`, {
            method: "DELETE"
        })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res);
        alert('Comic deleted successfully!!');
      })


   
    }
       // Render a card component for the comic
  return (
    <div className='col-md-3 mb-5 '>
        <img src={comic.image} alt='loading...' className='img-fluid' />
        <div className='card p-1'>
            <Link to={`/comics/${comic.id}`} >
              <h6>{comic.title}</h6>
            </Link>
            <button onClick={()=>deleteComic()} type="button" class="btn btn-outline-danger btn-sm">DELETE</button>

        </div>
    </div>
        
  )
}


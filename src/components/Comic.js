import React from 'react';
import { Link } from 'react-router-dom';


export default function Comic({comic}) 
{

    function deleteComic(){
        fetch(`http://localhost:4000/comic/${comic.id}`, {
            method: "DELETE"
        })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res);
        alert('Comic deleted successfully!');
      })


   
    }

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


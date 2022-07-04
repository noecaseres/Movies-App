import React from 'react';
import { Link } from 'react-router-dom';

export const MovieCard = ({
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title, 
        overview,
        popularity,
        poster_path, 
        release_date, 
        title,
        video, 
        vote_average,
        vote_count,
        
}) => {


const IMG_URL= `https://image.tmdb.org/t/p/w500${poster_path}`
    
  return (
    <div className='col'>
        <div className='card card-container'>
            <div className='row no-gutters'>
                <div className='col-4' >
                    <img src={IMG_URL} alt={title} className="card-img-container card-img rounded img-thumbnail p-1 "/>
                </div>
                <div className='card-body col-6 p-0'>
                    <h5 className='card-title'>{title}</h5>
                    <small className='text-muted'>{vote_average}</small>     
                    <p className='text-truncate'>{overview}</p>               
                    <Link to={`/${id}`}>
                        More information...
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

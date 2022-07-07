import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/App.css';

export const MovieCard = ({ 
        id,
        poster_path, 
        title,
        vote_average,
        overview
}) => {


const IMG_URL= `https://image.tmdb.org/t/p/w500${poster_path}`
    
  return (
    <div className='col'>
        <Link to={`/${id}`} className="text-decoration-none text-dark" >
            <div className='text-bg-light rounded-2'>
                <div className='d-flex p-3 '>
                    <div className='img-container' >
                        <img src={IMG_URL} alt={title} className="card-img rounded-1"/>
                    </div>
                    <div className='d-flex flex-column ms-3'>
                        <h5 className=''>{title}</h5>
                        <div className=''>
                            <p className='overview'>{overview}</p> 
                            <span className="fa fa-star gold"></span>
                            <span className='text-muted'>{vote_average}</span>     
                        </div>
                        {/* <p className='small m-0 pb-0 details-text'>Click to view details</p>                      */}
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

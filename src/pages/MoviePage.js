import '../CSS/MoviePage.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export const MoviePage = () => {

  const [selectedMovie, setSelectedMovie] = useState({});
  const [loading, setLoading] = useState(true);

    const {id} = useParams();

    const getById = async()=>{

        setLoading(true);      
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=08d93061e9bd0cf12c230d20549453b0`)

        const data = await response.json();
        setSelectedMovie(data);
        setLoading(false);
    }


useEffect(() => {
  getById();
}, [id])


if(loading){
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  )

}


const IMG_URL= `https://image.tmdb.org/t/p/w185_and_h278_bestv2${selectedMovie.poster_path}`
const release_year = selectedMovie.release_date.substring(0, 4);
const genres = selectedMovie.genres.map(genre => genre.name).join(', ');
  return (
    <div className='moviepage_container m-5'>
      <div className='content-box d-flex text-bg-light rounded-3 p-5'>
          <img src={IMG_URL} alt="image" className='rounded moviepage-img'/>
        <div className='text-dark rounded movie-details'>
          <h4 className='fw-bold mb-4'>{selectedMovie.title}</h4>
          <div className='mb-4'>
            <h6 className='m-0'>Description:</h6>
            <p className='m-0'>{selectedMovie.overview}</p>
          </div>
          <div className='mb-4'>
            <h6 className='m-0'>Vote average:</h6>
            <p className='m-0'>{selectedMovie.vote_average}</p>
          </div>
          <div className='mb-4'>
            <h6 className='m-0'>Original language:</h6>
            <p className='m-0'>{selectedMovie.original_language}</p>
          </div>
          <div className='mb-4'>
            <h6 className='m-0'>Release year:</h6>
            <p className='m-0'>{release_year}</p>
          </div>
          <div>
            <h6 className='m-0'>Genres:</h6>
            <p className='m-0'>{genres}</p>
          </div>
        </div>
     </div>
     <div className='d-flex justify-content-center'>
     <Link to={`/`} className="btn-back btn text-bg-light mt-5">
        Back to home
      </Link>    
     </div>
    </div>
  )
}

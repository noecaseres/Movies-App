
//PAGE QUE TRAERIA LA DATA DE "Mas informacion".

import React from 'react';
import { useParams } from 'react-router-dom';

export const MoviePage = () => {

    const {id} = useParams();
   

//NO ESTA TRAYENDO DATA DE LA API PARA EL MOVIE:
    // const getMovieById = () => {
    //     return moviesList.find(movie => movie.id === id)
    // }
    // const movie = getMovieById(id)
    
    
  return (
    <>
        <h1>{id}</h1>
        {/* <p>{movie.title}</p> */}
    </>
  )
}

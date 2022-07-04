import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard';

export const SearchMovies = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [search, setSearch] = useState("");

    
 //----------API request---------//
    const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=08d93061e9bd0cf12c230d20549453b0'

    const showData= async() => {
        const response = await fetch(URL)
        const data = await response.json()
        
        setMoviesList(data.results);
        // console.log(data.results)
    }
    
    useEffect(() => {
      showData()
    }, [])
    
    //----------Search-------------//
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target)

    }

    //-----------Filtrado----------//
    const results = !search 
    ? moviesList
    : moviesList.filter((entry)=>entry.title.toLowerCase().includes(search.toLocaleLowerCase()))


    return (
        <>
        <div className='d-flex justify-content-between'>
            <input
                    type="text"
                    placeholder="Find your movie"
                    className='form-control w-25 mb-3 border-0'
                    value={search}
                    onChange={searcher}
                />
            <div>
                <span className='text-light'>Stars rating </span>
            </div>
        </div>


            <div className="row rows-cols-1 row-cols-md-3 g-3">   
                {
                    results.map((movie) => (
                        <MovieCard 
                            key={movie.id}
                            {...movie}
                        />
                    ))
                 }
            </div>

        </>
  )
}

import React, { useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard';
import { Rating } from '../components/Rating';
import '../CSS/Rating.css';


export const SearchMovies = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [results, setResults] = useState([])
    const [search, setSearch] = useState("");


    
 //----------API request---------//
    const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=08d93061e9bd0cf12c230d20549453b0'

    const showData= async() => {
        const response = await fetch(URL)
        const data = await response.json()
        
        setMoviesList(data.results);
        setResults(data.results)
    }
    
    useEffect(() => {
      showData()
    }, [])
    
 //----------Search filter-------------//
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const filtered = !search || search == ""
        ? moviesList
        : moviesList.filter((entry)=>entry.title.toLowerCase().includes(search.toLocaleLowerCase()))
    setResults(filtered);
    }, [search])
    


//----------STARS - Rating filter and color-------------//
const handleSelect = (value) => {
   
    for(let i = 0; i < 5; i++){
        if(i<value){
            document.getElementById((i+1)).classList.add("gold")
        }else {
            document.getElementById((i+1)).classList.remove("gold")
        }
    }

    const filtered = moviesList.filter(entry => entry.vote_average > (value*2-2) & entry.vote_average <= value * 2 );
    setResults(filtered);

}

//-------------STARS -Clear button--------------------// 
const handleClear = (e) => {
    e.preventDefault();
    for(let i = 0; i < 5; i++){
        const stars = document.getElementById((i+1))
        if(stars.classList.contains("gold")){
            stars.classList.remove("gold")
        }    
    }
    setResults(moviesList)
}




    return (
        <>
        <div className='d-flex-column align-items-center mt-3 mb-5'>
            <input
                    type="text"
                    placeholder="Find your movie"
                    className='form-control w-50 mb-3 border-0 m-auto'
                    value={search}
                    onChange={searcher}
                />
                <div className="d-flex justify-content-center align-items-center">
                    <Rating onSelect={handleSelect}/>
                    <button onClick={handleClear} className="clear-btn">Clear</button>
                </div>
        </div>
        
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">   
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

import CardMovie from './CardMovie';
import React from 'react'
import useMovies from "../hook/useMovies"

function MoviesLists() {
   
    const {PelisList} = useMovies()

    console.log(PelisList);

  return (
    <div className='row'>
        {PelisList.slice(0,4).map((peli)=>
        <div className='col-lg-3 col-md-6 col-sm-12 mt-5  d-flex justify-content-around '>
            <CardMovie peli= {peli}/>
        </div>
        )}
    </div>
  )
}

export default MoviesLists
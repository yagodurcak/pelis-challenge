import React from 'react'
import useMovies from '../hook/useMovies'

function CardMovie({peli}) {

    const {getId,getShowModal} = useMovies()

  return (
    <div className='card' style={{width: "18rem"}}>
        <img src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} alt="" className='card-img-top'/>
        <div className='card-body text-center bg-dark'>
            <h5 className='card-title text-light my-3'>{peli.original_title}</h5>
            <button className='btn btn-danger' onClick={()=>{
                getShowModal()
              getId(peli.id)}}>VER MÁS</button>
        </div>
    </div>
  )
}

export default CardMovie
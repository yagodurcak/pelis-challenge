import React, {useContext} from 'react'

import MoviesContext from '../context/MoviesProvider'

function useMovies() {
  return useContext(MoviesContext)}

export default useMovies
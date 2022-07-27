import React, {createContext, useEffect, useState} from 'react'

import axios from "axios"

const MoviesContext = createContext()

function MoviesProvider({children}) {


    const [PelisList, setPelisList] = useState([]);
    const [idMovie, setIdMovie] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [infoId, setinfoId] = useState({});


    const getShowModal = () => {
        setShowModal(!showModal)
    }

    const getInfoId = async() => {

        try {

            const url = `https://api.themoviedb.org/3/movie/${idMovie}`
            const config={
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w"
                }
            }
            const data = await axios(url, config)

            setinfoId(data.data);
            console.log(data);

        } catch (error) {

            console.log(error);

        }        
    }

    useEffect(() => {
        getInfoId()
    }, [idMovie]);


    const getApiMovie = async() => {

        try {
            const url = " https://api.themoviedb.org/3/movie/now_playing"
            const config={
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w"
                }
            }
            const data = await axios(url, config)

            setPelisList(data.data.results);
            
        } catch (error) {

            console.log(error)
        };
        }


        useEffect(() => {
            getApiMovie()
        }, []);
        
    
        const getId = (a) => {
            setIdMovie(a)
        }

  return (
    <MoviesContext.Provider
        value={{
            PelisList,
            getId,
            getShowModal,
            showModal,
            getInfoId,
            infoId
        
        
        }}
    >
        {children}
    </MoviesContext.Provider>
  )
  }

export{
    MoviesProvider
}

export default MoviesContext
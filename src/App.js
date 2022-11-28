import React, { useState, useEffect } from 'react'
import './App.css';

//Axios 
import axios from 'axios'

//Pages
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import MoviePage from './Pages/MoviePage/MoviePage';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';

//Router
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Routes/PrivateRoutes';

//Components
import Navbar from './Components/Navbar';

function App() {

  const [movies, setMovies] = useState([])

  //API data ( --ALL MOVIES-- and --FAVORITE MOVIES--)
  const getMovies = async () => {
    await
      axios
        .get('https://api.tvmaze.com/search/shows?q=star%20wars')
        .then(({ data }) => {
          //console.log(data)
          //console.log(data[0].show.name)
          //console.log(data[0].show.genres)
          //console.log(data[0].show.language)
          //console.log(data[0].show.premiered)
          //console.log(data[0].show.summary)
          setMovies(data)
          console.log('Movie list:',movies)
        })
        .catch(({ response }) => {
          console.log(response)
        })
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>

        <Route element={<PrivateRoutes />} >
          {/**Here Private Routes*/}
        </Route>

        <Route path='/' element={<LoginPage />} />
        <Route path='/Search' element={<SearchPage movies={movies} />} />
        <Route path='/Movie' element={<MoviePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Favorites' element={<FavoritesPage movies={movies} />} />

      </Routes>
    </div>
  );
}

export default App;

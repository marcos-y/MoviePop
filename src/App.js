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
  const [favoriteMovies, setFavoriteMovies] = useState([])

  //API data ( GET--ALL MOVIES-- )
  const getMovies = async () => {
    await
      axios
        .get('https://api.tvmaze.com/search/shows?q=star%20wars')
        .then(({ data }) => {
          setMovies(data)
          //console.log('Movie list:',data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
  }

  //API data ( GET--FAVORITE MOVIES--)
  const getFavoriteMovies = async () => {
    await
      axios
        .get('http://localhost:8080/favorites/1')
        .then(({ data }) => {
          setFavoriteMovies(data)
          //console.log('Movie list:',movies)
        })
        .catch(({ response }) => {
          console.log(response)
        })
  }

  useEffect(() => {
    getMovies()
    getFavoriteMovies()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        {/*Here Public Routes*/}
        <Route path='/' element={<LoginPage />} />

        <Route element={<PrivateRoutes />} >
          {/*Here Private Routes*/}
          <Route path='/Search' element={<SearchPage movies={movies} />} />
          <Route path='/Movie' element={<MoviePage />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Favorites' element={<FavoritesPage favoriteMovies={favoriteMovies} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

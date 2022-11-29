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
  const [userId, setUserId] = useState(0)
  const [userName, setUserName] = useState('')

  //API data ( GET--ALL MOVIES-- )
  const getAllMovies = async () => {
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
  
    setUserId(sessionStorage.getItem('userId'))
    setUserName(sessionStorage.getItem('name'))
    await
      axios
        .get(`http://localhost:8080/favorites/${userId}`)
        .then(({ data }) => {
          setFavoriteMovies(data)
          //console.log('Favorite Movie list:',data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
  }

  useEffect(() => {
    getAllMovies()
    getFavoriteMovies()
  }, [userId])

  return (
    <div>
      <Navbar />
      <Routes>
        {/*Here Public Routes*/}
        <Route path='/' element={<LoginPage setUserId={setUserId} />} />

        <Route element={<PrivateRoutes />} >
          {/*Here Private Routes*/}
          <Route path='/Movie' element={<MoviePage />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Search' element={<SearchPage movies={movies} userId={userId} userName={userName}/>} />
          <Route path='/Favorites' element={<FavoritesPage favoriteMovies={favoriteMovies} userId={userId} userName={userName} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

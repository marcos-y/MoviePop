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
  //const [userId, setUserId] = useState(0)
  const [userId, setUserId] = useState((sessionStorage.getItem('userId')))
  const [userName, setUserName] = useState('')

  //API data ( GET--ALL MOVIES-- )
  const getAllMovies = () => {

    axios
      .get('https://api.tvmaze.com/search/shows?q=star%20wars')
      .then(({ data }) => {
        setMovies(data)
        //console.log('Movie list:',data)
      })
      .catch(({ err }) => {
        //console.log(err)
      })
  }

  //API data ( GET--FAVORITE MOVIES--)
  const getFavoriteMovies = (props) => {
    //console.log('user id',props)
    if (props === null)
    {
      return 'No favorite movies yet'
    }else
    {
      axios
        .get(`https://moviepop-api.onrender.com/favorites/${props}`)
        .then(({ data }) => {
          setFavoriteMovies(data)
          //console.log('Favorite Movie list:',data)
        })
        .catch(({ err }) => {
          console.log(err)
        })
    }
  }

    useEffect(() => {
      setUserId(sessionStorage.getItem('userId'))
      getAllMovies()
      //console.log(userId)
      getFavoriteMovies(userId)
      //console.log('getting favorites:',getFavoriteMovies(userId))
    }, [userId])

  return (
    <div style={{ backgroundColor: '#223C53' }}>
      <Navbar />
      <Routes>
        {/*Here Public Routes*/}
        <Route path='/' element={<LoginPage setUserId={setUserId} setUserName={setUserName} />} />
        <Route element={<PrivateRoutes />} >
          {/*Here Private Routes*/}
          <Route path='/Movie' element={<MoviePage />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Search'
            element={<SearchPage
              movies={movies}
              userId={userId}
              setFavoriteMovies={setFavoriteMovies}
              favoriteMovies={favoriteMovies}
              userName={userName} />} />
          <Route path='/Favorites'
            element={<FavoritesPage
              userId={userId}
              favoriteMovies={favoriteMovies}
              userName={userName} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

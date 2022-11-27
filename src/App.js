import React, { useState, useEffect } from 'react'
import './App.css';

//Axios 
import axios from 'axios'

//Pages
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import MoviePage from './Pages/Movie/MoviePage';

//Router
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {

  const [array, setArray]= useState([])

  //API data 
  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=star%20wars')
      .then(({ data }) => {
        console.log(data)
        //console.log(data[0].show.name)
        //console.log(data[0].show.genres)
        //console.log(data[0].show.language)
        //console.log(data[0].show.premiered)
        //console.log(data[0].show.summary)
        setArray(data)
      })
      .catch(({ response }) => {
        console.log(response)
      })
  }, [])


  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Search' element={<Search array={array} />} />
        <Route path='/Movie' element={<MoviePage />} />
        <Route path='/Home' element={<Home />} />
        <Route element={<PrivateRoutes />} >
        </Route>
      </Routes>
    </div>
  );
}

export default App;

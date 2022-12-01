import React from 'react'
import TextField  from './TextField'

const SearchBar = ( {movies, setSearchResults} ) => {

  //console.log('search bar movies',movies)
 
  const handleSearchChange = (e) =>{

    if(!e.target.value) return setSearchResults(movies)
    const resultsArray = movies.filter(movie=>movie.show.name.toLowerCase().includes((e.target.value.toLowerCase())))
    setSearchResults(resultsArray)

  }

  return (
    <TextField onChange={handleSearchChange} label="Buscar" id="fullWidth" />
  )
}

export default SearchBar
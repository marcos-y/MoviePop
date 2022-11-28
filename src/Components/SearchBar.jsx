import React from 'react'
import TextField  from './TextField'

const SearchBar = ( {movies, setSearchResults} ) => {
 
  const handleSearchChange = (e) =>{
    if(!e.target.value) return setSearchResults(movies)

    const resultsArray = movies.filter(movie=> movie.title.includes(e.target.value))
    setSearchResults(resultsArray)
  }

  return (
    <TextField onChange={handleSearchChange} label="Buscar" id="fullWidth" />
  )
}

export default SearchBar
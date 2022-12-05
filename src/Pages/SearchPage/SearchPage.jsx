import React, { useEffect, useState } from 'react'

//Components
import Movie from '../../Components/Movie'
import SearchBar from '../../Components/SearchBar'
import Line from '../../Components/Line'

const SearchPage = (props) => {

  const [searchResults, setSearchResults] = useState([])
  useEffect(()=>{
    setSearchResults(props.movies)
  },[props.movies])
  //console.log('search results',searchResults)

  //const content = searchResults?.length ? searchResults : <article><p>No matching posts</p></article> 

  return (
    <div
      style={{
        marginTop: '200px',
        maxWidth: '850px',
        width: '100%',
        height: 'auto',
        padding: '20px',
        backgroundColor: 'transparent ',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SearchBar movies={props.movies} setSearchResults={setSearchResults} />
      <h5 style={{
        fontFamily: 'Nunito',
        color: 'white',
        fontWeight: '700'
      }}>
        Películas
      </h5>
      <Line/>

      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
        <div style={{
          minWidth: '415px',
          width: '100%',
          color: 'white',
          fontFamily: 'Nunito',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'spaceAround',
          flexDirection: 'row',
          margin: 'auto',
        }}>
          {
            searchResults.map((movie) => {
              return (
                <Movie
                  key={movie.show.id}
                  favoriteMovies={props.favoriteMovies}
                  setFavoriteMovies={props.setFavoriteMovies}
                  href="SearchPage"
                  movieId={movie.show.id}
                  userId={props.userId}
                  userName={props.userName}
                  name={movie.show.name}
                  language={movie.show.language}
                  genres={movie.show.genres}
                  premiered={movie.show.premiered}
                  synopsis={movie.show.summary}
                  img={movie.show.image.original} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
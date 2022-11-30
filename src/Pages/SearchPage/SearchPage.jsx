import React, { useState } from 'react'

//Components
import Movie from '../../Components/Movie'
import SearchBar from '../../Components/SearchBar'

const SearchPage = (props) => {

  const [searchResults, setSearchResults] = useState(props.movies)
  //console.log('search results',searchResults)

  //const content = searchResults?.length ? searchResults : <article><p>No matching posts</p></article> 

  return (
      <div
        style={{
          marginTop: '200px',
          maxWidth: '900px',
          width: '100%',
          height: 'auto',
          padding: '20px',
          backgroundColor: 'transparent ',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column', 
          justifyContent:'center',
          alignItems: 'center',
        }}
      >
        <SearchBar movies={props.movies} setSearchResults={setSearchResults} />
        <h5 style={{ 
          fontFamily: 'Nunito', 
          color: 'white',
          fontWeight: '700' }}>
            Peliculas
        </h5>
        <hr style={{
          marginTop: '12px',
          width: '93%',
          backgroundColor: 'white',
          color: 'white',
          margin: 'auto',
          marginBottom: '15px'
        }}>
        </hr>

        <div style={{
          minWidth: '415px',
          width: '100%',
          color: 'white',
          fontFamily: 'Nunito',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent:'center',
          flexDirection:'row'
        }}>
          {
            searchResults.map((movie) => {
              return (
                <Movie
                  key={movie.name}
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
  )
}

export default SearchPage
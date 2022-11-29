import React, { useState } from 'react'

//Components
import Movie from '../../Components/Movie'
import SearchBar from '../../Components/SearchBar'

const SearchPage = (props) => {
  
  //console.log('Movies list',props.movies)
  const [searchResults,setSearchResults] = useState(props.movies)
  //console.log('search results',searchResults)
 
  //const content = searchResults?.length ? searchResults : <article><p>No matching posts</p></article> 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div
        style={{
          marginTop: '200px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '900px',
          width: '100%',
          height: 'auto',
          padding: '20px',
          backgroundColor: 'transparent '
        }}
      >
        <SearchBar movies={props.movies}  setSearchResults={setSearchResults}/>
        <h5 style={{ fontFamily: 'Nunito', color: 'white' }}>Peliculas</h5>
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
          display: 'flex', marginTop: '40px', justifyContent: 'center', padding: '5px',
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap', minWidth: '200px'
        }}>
            <div style={{ display: 'flex', maxWidth:'1000px', flexWrap:'wrap',justifyContent:'center'
            ,minWidth:'415px' }}>
              {
              searchResults.map((movie) => {
                return (
                  <Movie
                    href="SearchPage"
                    key={movie.name}
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
    </div>
  )
}

export default SearchPage
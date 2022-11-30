import React, { useEffect } from 'react'

//Components
import Movie from '../../Components/Movie'

const FavoritesPage = (props) => {

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
        }}>
        <h5 style={{ fontFamily: 'Nunito', color: 'white',fontWeight: '700' }}>Mis peliculas favoritas</h5>
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
              props.favoriteMovies.map((movie) => {
                return (
                  <Movie
                    href="FavoritesPage"
                    userId={props.userId}
                    userName={props.userName}
                    key={movie.name}
                    movieId={movie.movieId}
                    name={movie.name}
                    language={movie.language}
                    genres={movie.genres}
                    premiered={movie.premiered}
                    synopsis={movie.synopsys}
                    img={movie.image} />
                )
              })
            }
          </div>
      </div>
  )
}

export default FavoritesPage
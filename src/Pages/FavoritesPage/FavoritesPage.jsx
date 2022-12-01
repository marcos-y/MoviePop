import React, { useEffect } from 'react'

//Components
import Movie from '../../Components/Movie'
import Hr from '../../Components/Hr'

const FavoritesPage = (props) => {

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
      <h5 style={{
        fontFamily: 'Nunito',
        color: 'white',
        fontWeight: '700'
      }}>
        Mis películas favoritas
      </h5>
      <Hr/>

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
    </div>
  )
}

export default FavoritesPage
import React from 'react'

//Components
import Movie from '../../Components/Movie'

const FavoritesPage = (props) => {

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
        <h5 style={{ fontFamily: 'Nunito', color: 'white' }}>Mis peliculas favoritas</h5>
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
          <div style={{ display: 'flex', maxWidth: '1000px', flexWrap: 'wrap', justifyContent: 'center', minWidth: '415px' }}>
            {
              props.favoriteMovies.map((movie) => {
                return (
                  <Movie
                    href="FavoritesPage"
                    key={movie.name}
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
    </div>
  )
}

export default FavoritesPage
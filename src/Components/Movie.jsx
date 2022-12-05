import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

//Components
import IconButton from '@mui/material/IconButton';
import Snackbar from '../Components/Snackbar'
import axios from 'axios'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Movie = (props) => {

  const navigate = useNavigate();

  //SAVE movieName State
  const [movieName, setMovieName] = useState(props.name)
  //console.log(movieName)
  //console.log(props)

  //Go to Movie Selected
  const handleClick = () => {
    navigate("/Movie", {
      state: {
        userId: props.userId,
        userName: props.userName,
        movieId: props.movieId,
        href: props.href,
        name: props.name,
        language: props.language,
        genres: props.genres,
        premiered: props.premiered,
        synopsis: props.synopsis,
        img: props.img
      }
    })
  }

  //Set Favorite Movie State
  const [iconColor, setIconColor] = useState('white');
  const [favoriteMovie, setFavoriteMovie] = useState({
    userId: props.userId,
    name: props.name,
    language: props.language,
    genres: JSON.stringify(props.genres),
    premiered: props.premiered,
    synopsys: props.synopsis,
    image: props.img,
    movieId: props.movieId
  })

  //Open Snackbar FAVORITE
  const [open, setOpen] = React.useState(false);
  //Close Snackbar FAVORITE
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  //Save as FAVORITE
  const handleClickFavorite = (props) => {
    {/*Primero hay que comprobar si ya esta o no añadida*/ }

    //console.log(props)
    const movieExists = props.find(movie => movie.name === movieName)
    
    //console.log('movieName exists?', movieExists)
    if (movieExists != undefined) {
      alert('Ya añadida a Favoritos')
    } else {
      //*Open Snackbar*
      setOpen(true)

      //Change Icon Favorites Color
      iconColor === 'white' ? setIconColor("#C48900") : setIconColor('white')
      //console.log('movie added to favorites:', favoriteMovie)

      //ADD Favorite Movie to FavoriteMoviesArray
      props.push(favoriteMovie)

      //POST movie in Favorites List
      axios
        .post('https://moviepop-api.onrender.com/favorites/', favoriteMovie)
        .then(({ data }) => {
          //console.log('Sucessfully saved',data)
          //Push Movie to FavoritesArray
          props.setFavoriteMovies([...{ favoriteMovie }])
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  }


  return (
    <>
      <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', maxWidth: '182px', height: 'auto' }}>
        <img style={{ cursor: 'pointer' }} onClick={handleClick} src={  props.img}
          width="100%" >
        </img>

        <div>
          {props.href === "SearchPage" ?
            (
              <IconButton onClick={() => handleClickFavorite(props.favoriteMovies)} style={{ float: 'left' }}>
                <FontAwesomeIcon style={{ width: '20px', float: 'left', color: iconColor }}
                  inverse icon={regular('bookmark')} />
              </IconButton>
            )
            :
            (
            <IconButton style={{ float: 'left' }}>
                <FontAwesomeIcon style={{ width: '20px', float: 'left', color: iconColor }}
                  inverse icon={solid('trash')} />
              </IconButton>
            )
          }
          <h6 style={{ textAlign: 'right', fontSize: '14px', fontWeight: '700', padding: '0px', marginTop: '12px' }}>
            {props.name}
          </h6>
        </div>
        <Snackbar
          open={open}
          onClose={handleClose}
        />
      </div>
    </>
  )
}

export default Movie
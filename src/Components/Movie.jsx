import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

//Components
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Movie = (props) => {

  const navigate = useNavigate();

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
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  //Save as FAVORITE
  const handleClickFavorite = () => {
    setOpen(true)
    iconColor === 'white' ? setIconColor("#C48900") : setIconColor('white')
    console.log('movie added to favorites:', favoriteMovie)
    //props.favoriteMovies.push(favoriteMovie)
    
    props.favoriteMovies.push(favoriteMovie)
    axios
        .post('http://localhost:8080/favorites/', favoriteMovie )
        .then(({ data }) => {
          //console.log('Sucessfully saved',data)
          //Push Movie to FavoritesArray
          props.setFavoriteMovies([...{favoriteMovie}])
        })
        .catch(({ response }) => {
          console.log(response)
        })
  }


  return (
    <>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
        <img style={{ cursor: 'pointer' }} onClick={handleClick} src={props.img.original || props.img} 
        width="183px" height="199px">
        </img>

        <div>
          {props.href === "SearchPage" ?
            (
              <IconButton onClick={handleClickFavorite} style={{ float: 'left' }}>
                <FontAwesomeIcon style={{ width: '20px', float: 'left', color: iconColor }}
                  inverse icon={regular('star')} />
              </IconButton>
            )
            :
            null
          }
          <h6 style={{ textAlign: 'right', fontSize: '14px', padding: '0px', marginTop: '12px' }}>
            {props.name}
          </h6>
        </div>
        <Snackbar
          ContentProps={{
            sx: {
              fontFamily: 'Nunito',
              backgroundColor: "#C48900",
            }
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Pelicula añadida a mis Favoritos!"
          action={action}
        />
      </div>
    </>
  )
}

export default Movie
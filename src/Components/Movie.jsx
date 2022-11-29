import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import axios from 'axios'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Movie = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Movie", {
      state: {
        id: props.id,
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

  const [favoriteMovie, setFavoriteMovie] = useState({})
  const [iconColor, setIconColor] = useState('white');

  //Save as FAVORITE
  const handleClickFavorite = () =>{
    iconColor==='white' ? setIconColor("#C48900") : setIconColor('white')
    setFavoriteMovie({ 
        userId: props.userId,
        name: props.name,
        language: props.language,
        genres: JSON.stringify(props.genres),
        premiered: props.premiered,
        synopsys: props.synopsis,
        image: props.img ,
        movieId: props.id
    })
   
    axios
        .post('http://localhost:8080/favorites/', favoriteMovie )
        .then(({ data }) => {
          console.log('Sucessfully saved',data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
  }

  return (
    <>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
        <img style={{ cursor: 'pointer' }} onClick={handleClick} src={props.img.original || props.img} width="183px" height="199px">
        </img>

        <div>
          { props.href==="SearchPage" ? 
          (
          <IconButton onClick={handleClickFavorite} style={{ float: 'left' }}>
            <FontAwesomeIcon style={{ width: '20px', float:'left', color: iconColor }}
              inverse icon={regular('star')} />
          </IconButton>
          )
          : 
          null
          }
          <h6 style={{ textAlign: 'right', fontSize: '14px', padding: '0px', marginTop: '12px' }}>{props.name}</h6>
        </div>
      </div>
    </>
  )
}

export default Movie
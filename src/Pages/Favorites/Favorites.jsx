import React, { useState } from 'react'

//Icons
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useNavigate } from "react-router-dom"

//Components
import TextField from '../../Components/TextField'
import Movie from '../../Components/Movie'

//Images
import img1 from '../../Images/movie6.jpg'
import img2 from '../../Images/movie2.jpg'
import img3 from '../../Images/movie8.jpg'
import img4 from '../../Images/movie4.jpg'
import img5 from '../../Images/movie5.jpg'
import img6 from '../../Images/movie1.jpg'
import img7 from '../../Images/movie7.jpg'
import img8 from '../../Images/movie3.jpg'
import img9 from '../../Images/movie9.jpg'

const Favorites = () => {

  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false)
  const [isSelected2, setIsSelected2] = useState(true)

  const handleClickHouseIcon = () => {
    setIsSelected(true)
    setIsSelected2(false)
    navigate("/Home")
  }

  const handleClickGlass = () => {
    setIsSelected2(true)
    setIsSelected(false)
    navigate("/Search")
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ marginTop: '10px', width: '100%', backgroundColor: 'transparent ' }}>
        <IconButton onClick={handleClickGlass} style={{ marginRight: '14px', float: 'right' }}>
          <FontAwesomeIcon style={{ width: '27px', color: isSelected2 ? '#C48900' : 'white' }}
            inverse icon={solid('magnifying-glass')} />
        </IconButton>

        <IconButton onClick={handleClickGlass} style={{ marginRight: '14px', float: 'right' }}>
          <FontAwesomeIcon style={{ width: '27px', color: 'white' }}
            inverse icon={solid('star')} />
        </IconButton>

        <IconButton onClick={handleClickHouseIcon} style={{ marginRight: '14px', float: 'right' }}>
          <FontAwesomeIcon style={{ width: '27px', color: isSelected ? '#C48900' : 'white' }}
            inverse icon={solid('house-chimney')} />
        </IconButton>
      </div>

      <div
        style={{
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
        <h5 style={{ fontFamily: 'Nunito', color: 'white' }}>Mis Peliculas favoritas</h5>
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
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap', margin: 'auto', width: '100%', height: 'auto'
        }}>
          <div style={{ display: 'flex', padding: '5px' }}>
            <Movie title="Gladiator" img={img1} />
            <Movie title="Avatar" img={img2} />
          </div>
          <div style={{ display: 'flex' }} >
            <Movie title="Resident Evil: Afterlife" img={img3} />
            <Movie title="Edge of Tomorrow" img={img4} />
          </div>
        </div>

        <div style={{
          display: 'flex', marginTop: '40px', justifyContent: 'center', padding: '5px',
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex' }}>
            <Movie title="Gladiator" img={img1} />
            <Movie title="Avatar" img={img2} />
          </div>
          <div style={{ display: 'flex' }} >
            <Movie title="Resident Evil: Afterlife" img={img3} />
            <Movie title="Edge of Tomorrow" img={img4} />
          </div>
        </div>

        <div style={{
          display: 'flex', marginTop: '40px', justifyContent: 'center', padding: '5px',
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex' }}>
            <Movie title="Gladiator" img={img1} />
            <Movie title="Avatar" img={img2} />
          </div>
          <div style={{ display: 'flex' }} >
            <Movie title="Resident Evil: Afterlife" img={img3} />
            <Movie title="Edge of Tomorrow" img={img4} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Favorites
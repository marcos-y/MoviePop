import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useNavigate } from "react-router-dom"
import TextField from '../../Components/TextField'

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

const Search = () => {

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
    <>
      <div style={{ marginTop: '16px' }}>
        <IconButton onClick={handleClickGlass} style={{ marginRight: '13px', float: 'right' }}>
          <FontAwesomeIcon style={{ color: isSelected2 ? '#C48900' : 'white' }}
            inverse size="2x" icon={solid('magnifying-glass')} />
        </IconButton>

        <IconButton onClick={handleClickHouseIcon} style={{ marginRight: '17px', float: 'right' }}>
          <FontAwesomeIcon style={{ color: isSelected ? '#C48900' : 'white' }}
            inverse size="2x" icon={solid('house-chimney')} />
        </IconButton>
      </div>

      <div
        style={{
          transform: 'translate(-50%, -50%)',
          margin: '0',
          top: '20%',
          left: '50%',
          position: 'absolute',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '550px'
        }}
      >
        <TextField style={{ width:'200px'}} label="Buscar" />
        <h5 style={{ fontFamily: 'Nunito', color: 'white' }}>Peliculas</h5>
        <hr style={{
          marginTop: '12px',
          width: '100%',
          backgroundColor: 'white',
          color: 'white'
        }}>
        </hr>

        <div style={{ display: 'flex', maxWidth: '900px', marginTop: '40px', fontFamily:'Nunito', color:'white' }}>
          <div style={{ padding: '10px' }}>
            <img src={img1} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img2} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img3} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img4} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>
        </div>

        <div style={{ display: 'flex', maxWidth: '900px', marginTop: '40px', fontFamily:'Nunito', color:'white' }}>
          <div style={{ padding: '10px' }}>
            <img src={img1} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img2} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img3} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img4} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>
        </div>

        <div style={{ display: 'flex', maxWidth: '900px', marginTop: '40px', fontFamily:'Nunito', color:'white' }}>
          <div style={{ padding: '10px' }}>
            <img src={img1} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img2} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img3} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>

          <div style={{ padding: '10px' }}>
            <img src={img4} width="200px" height="200px"></img>
            <h6 style={{ float: 'right' }}>Título</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
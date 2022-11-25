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
    <div style={{ display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <div style={{ marginTop:'10px',width: '100%', backgroundColor:'transparent ' }}>
        <IconButton onClick={handleClickGlass} style={{  marginRight: '14px',float: 'right' }}>
          <FontAwesomeIcon style={{ width:'27px', color: isSelected2 ? '#C48900' : 'white' }}
            inverse icon={solid('magnifying-glass')} />
        </IconButton>

        <IconButton onClick={handleClickHouseIcon} style={{ marginRight: '14px', float: 'right' }}>
          <FontAwesomeIcon style={{ width:'27px', color: isSelected ? '#C48900' : 'white' }}
            inverse icon={solid('house-chimney')} />
        </IconButton>
      </div>

      <div
        style={{
          margin:'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth:'900px',
          width:'100%',
          height:'auto',
          padding:'20px',
          backgroundColor:'transparent '
        }}
      >
        <TextField fullWidth style={{ width:'200px' }} label="Buscar" id="fullWidth" />
        <h5 style={{ fontFamily: 'Nunito', color: 'white' }}>Peliculas</h5>
        <hr style={{
          marginTop: '12px',
          width: '100%',
          backgroundColor: 'white',
          color: 'white',
          margin:'auto',
          marginBottom:'15px'
        }}>
        </hr>

        <div style={{ display: 'flex', marginTop: '40px', justifyContent:'center', paddiing:'5px', 
        fontFamily: 'Nunito', color: 'white', flexWrap:'wrap',margin:'auto', width:'100%',height:'auto' }}>

          <div style={{display:'flex', padding:'5px'}}>
            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img1} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>

            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img2} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>
          </div>
      
          <div style={{display:'flex'}} >
            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img3} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>

            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img4} width="183px" height="183px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', marginTop: '40px', justifyContent:'center',
        fontFamily: 'Nunito', color: 'white', flexWrap:'wrap' }}>

          <div style={{display:'flex'}}>
            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img1} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>

            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img2} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>
          </div>
      
          <div style={{display:'flex'}} >
            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img3} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>

            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img4} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>
          </div>

        </div>

        <div style={{ display: 'flex', marginTop: '40px', justifyContent:'center', marginBottom:'10px',
        fontFamily: 'Nunito', color: 'white', flexWrap:'wrap' }}> 

          <div style={{display:'flex'}}>
            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img1} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>

            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img2} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>
          </div>
      
          <div style={{display:'flex'}} >
            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img3} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>

            <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img src={img4} width="183px" height="189px"></img>
              <h6 style={{ float: 'right' }}>Título</h6>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Search
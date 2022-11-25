import React, { useState} from 'react'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import img from '../../Images/cinema.png'
import {useNavigate} from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();
  const [ isSelected, setIsSelected] = useState(true)
  const [ isSelected2, setIsSelected2] = useState(false)

  const handleClickHouseIcon = () =>{
      setIsSelected(true)
      setIsSelected2(false)
      navigate("/Home")
  }

  const handleClickGlass = () =>{
      setIsSelected2(true)
      setIsSelected(false)
      navigate("/Search")
  }

  return (
    <>
      <div style={{ position:'fixed',width: '100%', backgroundColor:'transparent' }}>
        <IconButton onClick={handleClickGlass} style={{  marginRight: '14px' ,float: 'right' }}>
          <FontAwesomeIcon style={{  width:'27px',  color: isSelected2 ? '#C48900' : 'white' }}
            inverse size="2x" icon={solid('magnifying-glass')} />
        </IconButton>

        <IconButton onClick={handleClickHouseIcon} style={{ marginRight: '14px', float: 'right' }}>
          <FontAwesomeIcon style={{  width:'27px',  color: isSelected ? '#C48900' : 'white' }}
            inverse size="2x" icon={solid('house-chimney')} />
        </IconButton>
      </div>
      
      <div
        style={{
           transform: 'translate(-50%, -50%)',
          margin: '0', 
          top:'50%',
          left: '50%' , 
          position:'absolute',
          backgroundColor:'transparent'
        }}
      >
      <img style={{ maxWidth:'332px' }} src={img}></img>
      <h1 style={{ color: '#C48900', fontFamily: 'Nunito',}} align="center">
          MoviePop!
      </h1>
      </div>
    </>
  )
}

export default Home
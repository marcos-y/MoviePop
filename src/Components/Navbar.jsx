import React, { useState } from 'react'

//Icons
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  //console.log('window location', window.location.href)

  //Selected buttons

  //House Icon State
  const [isSelected, setIsSelected] = useState(true)

  //Glass Icon State
  const [isSelected2, setIsSelected2] = useState(false)

  //Star Icon State
  const [isSelected3, setIsSelected3] = useState(false)

  const handleClickHouseIcon = () => {
    setIsSelected(true)
    setIsSelected2(false)
    setIsSelected3(false)
    navigate("/Home")
  }

  const handleClickGlass = () => {
    setIsSelected2(true)
    setIsSelected(false)
    setIsSelected3(false)
    navigate("/Search")
  }

  const handleClickStar = () => {
    setIsSelected(false)
    setIsSelected2(false)
    setIsSelected3(true)
    navigate("/Favorites")
  }

  const handleClickExit = () => {
    sessionStorage.setItem('isLogged', false)
    navigate("/")
  }

  return (
    <>
      {
        (window.location.href === 'http://localhost:3000/Movie' || window.location.href === 'http://localhost:3000/') ? null :
          (
            <div style={{ marginTop: '10px', width: '100%', backgroundColor: 'transparent ', height: '60px' }}>

              <IconButton onClick={handleClickExit} style={{ marginRight: '14px', float: 'right' }}>
                <FontAwesomeIcon style={{ width: '27px', color: 'white' }}
                  inverse icon={solid('right-from-bracket')} />
              </IconButton>

              <IconButton onClick={handleClickGlass} style={{ marginRight: '14px', float: 'right' }}>
                <FontAwesomeIcon style={{ width: '27px', color: isSelected2 ? '#C48900' : 'white' }}
                  inverse icon={solid('magnifying-glass')} />
              </IconButton>

              <IconButton onClick={handleClickStar} style={{ marginRight: '14px', float: 'right' }}>
                <FontAwesomeIcon style={{ width: '27px', color: isSelected3 ? '#C48900' : 'white' }}
                  inverse icon={solid('star')} />
              </IconButton>

              <IconButton onClick={handleClickHouseIcon} style={{ marginRight: '14px', float: 'right' }}>
                <FontAwesomeIcon style={{ width: '27px', color: isSelected ? '#C48900' : 'white' }}
                  inverse icon={solid('house-chimney')} />
              </IconButton>
            </div>
          )
      }
    </>)
}

export default Navbar
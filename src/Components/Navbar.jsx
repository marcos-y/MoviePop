import React, { useState } from 'react'

//Icons
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon, duotone } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
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
    sessionStorage.clear()
    setIsSelected2(false)
    setIsSelected3(false)
    setIsSelected(true)
    navigate("/")
  }

  return (
    <>
      {
        (( window.location.href === 'https://moviepop.workadmin.com.ar/') || (window.location.href === 'http://localhost:3000/'  )) 
        ? null :
        (
            <div style={{
                 margin:'auto', 
                 maxWidth:'850px',
                 marginTop: '10px',
                 width: '100%', 
                 backgroundColor: 'transparent ',
                 height: '60px'
            }}>
              <div style={{ float:'right' }}>

              <IconButton onClick={handleClickHouseIcon} >
                  <FontAwesomeIcon style={{ width: '33px', height:'26', color: isSelected ? '#C48900' : 'white' }}
                    inverse icon={solid('house-chimney')} />
                </IconButton>

                <IconButton onClick={handleClickStar} >
                  <FontAwesomeIcon style={{ width: '33px', height:'26',color: isSelected3 ? '#C48900' : 'white' }}
                    inverse icon={solid('star')} />
                </IconButton>
                
                <IconButton onClick={handleClickGlass} >
                  <FontAwesomeIcon style={{ width: '27px', height:'27', color: isSelected2 ? '#C48900' : 'white' }}
                    inverse icon={solid('magnifying-glass')} />
                </IconButton>

                <IconButton onClick={handleClickExit} >
                  <FontAwesomeIcon style={{ width: '28px', height:'27' ,color: 'white' }}
                    inverse icon={solid('right-from-bracket')} />
                </IconButton>

              </div>
            </div>
          )
      }
    </>)
}

export default Navbar
import React, { useState } from 'react'

//Icons
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useNavigate } from "react-router-dom"

const Navbar = () => {

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
        </>
    )
}

export default Navbar
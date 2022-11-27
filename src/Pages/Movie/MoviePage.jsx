import React from 'react'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {  useLocation, useNavigate } from "react-router-dom"
import img1 from '../../Images/movie6.jpg'

const Movie = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Search")
    }

    const { state } = useLocation();
    const { title } = state || {};

    console.log(title)

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                <div style={{ marginTop: '10px', width: '100%', backgroundColor: 'transparent ' }}>
                    <IconButton onClick={handleClick} style={{ marginRight: '14px', float: 'right' }}>
                        <FontAwesomeIcon style={{ width: '27px', color: 'white' }}
                            inverse icon={solid('arrow-left')} />
                    </IconButton>
                </div>


                <div style={{ color: 'white', maxWidth: '376px', height: 'auto', margin:'auto',width: '100%'
                ,marginTop: '20px', padding:'10px'}}>
                    <img src={img1} style={{ width:'100%' }} >
                    </img>

                    <div style={{ fontFamily: 'Nunito' }}>
                        <h5 style={{ textAlign:'center' }}>Título: {title}</h5>
                        <div>
                            <h6>Lenguaje:</h6>
                            <h6>Géneros:</h6>
                            <h6>Fecha de estreno:</h6>
                        </div>
                    </div>

                    <div style={{ fontFamily: 'Nunito' }}>
                        <h5 style={{ textAlign:'center' }}>Sinopsis:</h5>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>

                </div>
            </>
            )
}

export default Movie
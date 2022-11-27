import React from 'react'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useLocation, useNavigate } from "react-router-dom"
import img1 from '../../Images/movie6.jpg'
import Comentario from '../../Components/Comentario';

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

                <div style={{
                    color: 'white', maxWidth: '600px',minWidth:'376px', height: 'auto', margin: 'auto', width: '100%'
                    , marginTop: '20px', padding: '10px'
                }}>
                    <img src={img1} style={{ width: '100%' }} >
                    </img>

                    <div style={{ fontFamily: 'Nunito' }}>
                        <h5 style={{ textAlign:'center', fontSize:'20px' }}>Título: {title}</h5>
                        <div>
                            <h6 style={{ padding: '2px', margin: '2px'}} >Lenguaje:</h6>
                            <h6 style={{ padding: '2px', margin: '2px'}}>Géneros:</h6>
                            <h6 style={{ padding: '2px', margin: '2px'}}>Fecha de estreno:</h6>
                        </div>
                    </div>

                    <div style={{ fontFamily: 'Nunito' }}>
                        <h5 style={{ textAlign:'center', fontSize:'20px' }}>Sinopsis:</h5>
                        <div>
                            <p style={{ textAlign:'center', fontSize:'14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>

                <div style={{ color: 'white', fontFamily: 'Nunito', margin: 'auto', maxWidth: '600px',minWidth:'376px', padding:'10px' }}>
                    <hr style={{
                        marginTop: '30px',
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        backgroundColor: 'black',
                        color: 'black'
                    }}>
                    </hr>
                    <h5 style={{ textAlign: 'center' }}>Comentarios</h5>
                </div>
                <Comentario />
                <Comentario />
                <Comentario />
            </div>
        </>
    )
}

export default Movie
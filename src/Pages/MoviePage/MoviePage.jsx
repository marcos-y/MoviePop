import React, { useState } from 'react'

//Icons
import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useLocation, useNavigate } from "react-router-dom"

//Components
import Comentario from '../../Components/Comentario'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const MoviePage = (props) => {

    const navigate = useNavigate();

    const [newComment, setNewComment] = useState('')
    const handleChangeNewComment = (e) => setNewComment(e.target.value)

    const handleClickNewComment = () => {
        console.log(newComment)
        setNewComment('')
    }

    const { state } = useLocation();
    const { name } = state || {};
    const { language } = state || {};
    const { genres } = state || {};
    const { premiered } = state || {};
    const { synopsis } = state || {};
    const { img } = state || {};
    const { href } = state || {};

    const handleClick = () => {
        if(href==="SearchPage"){
            navigate("/Search")
        }else{
            navigate("/Favorites")
        }
    }

    var summary = synopsis.replace(/<[^>]+>/g, '');

    //Receive comments from DB
    const comments = [
        {
            user: 'John',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            user: 'Mark',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            user: 'Elon',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ]

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
                    color: 'white', maxWidth: '600px', minWidth: '376px', height: 'auto', margin: 'auto', width: '100%'
                    , marginTop: '20px', padding: '5px'
                }}>
                    <img src={img.original} style={{ width: '100%' }} ></img>

                    <div style={{ fontFamily: 'Nunito' }}>
                        <h5 style={{ textAlign: 'center', fontSize: '20px' }}>Título: {name}</h5>
                        <div>
                            <h6 style={{ padding: '2px', margin: '2px' }} >Lenguaje: {language}</h6>
                            <h6 style={{ padding: '2px', margin: '2px' }}>Géneros: {genres}</h6>
                            <h6 style={{ padding: '2px', margin: '2px' }}>Fecha de estreno: {premiered}</h6>
                        </div>
                    </div>

                    <div style={{ fontFamily: 'Nunito' }}>
                        <h5 style={{ textAlign: 'center', fontSize: '20px' }}>Sinopsis:</h5>
                        <div style={{ fontSize: '14px' }}>
                            {summary}
                        </div>
                    </div>
                </div>

                <div style={{
                    color: 'white', fontFamily: 'Nunito', margin: 'auto', maxWidth: '600px'
                    , minWidth: '376px', padding: '10px'
                }}>
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
                <TextField
                size="small"
                    onChange={handleChangeNewComment}
                    value={newComment}
                    placeholder="Dejar un comentario"
                    InputProps={{
                        style:
                        {
                            color: 'white',
                            fontSize: '14',
                            fontFamily: 'Nunito',
                        }
                    }}
                    style={{ maxWidth: '600px', margin: 'auto', width: '100%', height:'50px' }}
                    multiline />
                <Button onClick={handleClickNewComment}
                    size="small"
                    style={{
                        marginTop: '20px', width: '40px', fontFamily: 'Nunito',
                        backgroundColor: 'transparent', color: '#C48900',margin:'auto', float:'left'
                    }}
                    variant="contained">
                    Publicar
                </Button>
                {
                    comments.map((comment) => { return (<Comentario user={comment.user} comment={comment.comment} />) })
                }
            </div>
        </>
    )
}

export default MoviePage
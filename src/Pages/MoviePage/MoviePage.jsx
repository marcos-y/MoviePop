import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Icons
import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useLocation, useNavigate } from "react-router-dom"

//Components
import Comentario from '../../Components/Comentario'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const MoviePage = () => {

    const navigate = useNavigate();

    //States passed through LINK PARAMS
    const { state } = useLocation();
    const { name } = state || {};
    const { language } = state || {};
    const { genres } = state || {};
    const { premiered } = state || {};
    const { synopsis } = state || {};
    const { img } = state || {};
    const { href } = state || {};
    const { movieId } = state || {};
    const { userId } = state || {};
    const { userName } = state || {};

    // New comment to POST
    const [comment, setComment] = useState('')
    const [UserName, setUserName] = useState(userName)
    const [UserId, setUserId] = useState(userId)
    //const [movieId, setMovieId] = useState('')

    const handleChangeComment = (e) => setComment(e.target.value)
    const handleClickAddComment = () => {
        //console.log(comment)
        comments.push({ movieId, comment, UserName, UserId })
        axios
            .post('https://moviepop-api.onrender.com/comments', { movieId, comment, UserName, UserId })
            .then(({ data }) => {
                console.log(data)
                {/*ACA HAY QUE AÑADIR AL ARRAY DE COMENTARIOS "comments" THREE DOTS*/}
                setComment('')
            })
            .catch(({ response }) => {
                console.log(response)
                //alert('Bad request')
            })
    }

    //API data ( GET--ALL COMMENTS-- )
    const [comments, setComments] = useState([])
    const getComments = async () => {
        await
            axios
                .get(`https://moviepop-api.onrender.com/comments/${movieId}`)
                .then(({ data }) => {
                    //console.log(data)
                    setComments(data)
                    //console.log(comments)
                })
                .catch(({ response }) => {
                    console.log(response)
                })
    }
    useEffect(() => {
        getComments();
    }, [])

    //Go back FUNCTION
    const handleClick = () => {
        if (href === "SearchPage") {
            navigate("/Search")
        } else {
            navigate("/Favorites")
        }
    }

    //Replace html tags in Summary STATE
    var summary = synopsis.replace(/<[^>]+>/g, '');
    //console.log(summary)

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                <div style={{ marginTop: '10px', width: '100%', backgroundColor: 'transparent ' }}>
                    <IconButton onClick={handleClick} style={{ marginRight: '14px', float: 'right' }}>
                        <FontAwesomeIcon style={{ width: '28px', height:'27', color: 'white' }}
                            inverse icon={solid('arrow-left')} />
                    </IconButton>
                </div>

                <div style={{
                    color: 'white', maxWidth: '450px', minWidth: '376px', height: 'auto', margin: 'auto', 
                    width: '100%', marginTop: '20px', padding: '2px'
                }}>
                    <img src={img.medium || img} style={{ width: '100%', marginLeft:'5px' }} ></img>

                    <div style={{ fontFamily: 'Nunito', padding:'10px' }}>
                        <h5 style={{ textAlign: 'center', fontSize: '20px',fontweight:'700'  }}>Título: {name}</h5>
                        <div style={{ fontSize: '14px',fontFamily: 'Nunito',fontWeight:'normal' }} >
                                Lenguaje: {language} <br></br>
                                Géneros: {genres} <br></br>
                                Fecha de estreno: {premiered}
                         
                        </div>
                    </div>

                    <div style={{ padding:'5px' }}>
                        <h5 style={{ textAlign: 'center', fontSize: '20px', fontWeight:'700',fontFamily: 'Nunito' }}>
                            Sinopsis:
                        </h5>
                        <div style={{ fontSize: '14px',fontFamily: 'Nunito',fontWeight:'normal' }}>
                            {summary}
                        </div>
                    </div>
                </div>

                <div style={{
                    color: 'white', fontFamily: 'Nunito', margin: 'auto', maxWidth: '700px'
                    , minWidth: '450px', padding: '10px'
                }}>
                    <hr style={{
                        marginTop: '30px',
                        maxWidth:'450px',
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        backgroundColor: 'black',
                        color: 'black'
                    }}>
                    </hr>
                    <h5 style={{ textAlign: 'left' }}>Comentarios</h5>
                </div>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'row'}}>
                    <TextField
                        rows={4}
                        size="small"
                        onChange={handleChangeComment}
                        value={comment}
                        placeholder="Dejar un comentario"
                        InputProps={{
                            style:
                            {
                                color: 'white',
                                fontSize: '14',
                                fontFamily: 'Nunito',
                                fontWeight:'normal'
                            }
                        }}
                        style={{ maxWidth: '450px', margin: 'auto', width: '100%', marginBottom:'10px', 
                        fontWeight:'normal' }}
                        multiline />
                    <Button
                        onClick={handleClickAddComment}
                        size="small"
                        style={{
                            marginTop: '40px', width: '50px', padding:'5px', fontFamily: 'Nunito', margin: 'auto',
                            backgroundColor: 'transparent', color: '#C48900', float: 'left', marginTop: '100px'
                        }}
                        variant="contained">
                        Publicar
                    </Button>
                </div>
                {
                    comments.map((comment) => {
                        return (<Comentario UserName={comment.UserName} movieId={comment.movieId}
                            comment={comment.comment} />)
                    })
                }
            </div>
        </>
    )
}

export default MoviePage
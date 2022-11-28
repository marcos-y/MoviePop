import React from 'react'
import {  useNavigate } from "react-router-dom"

const Movie = (props) => {

  const navigate = useNavigate();

  const handleClick= () =>{
    navigate("/Movie", { state:{ 
      href: props.href,
      name: props.name,
      language: props.language,
      genres: props.genres,
      premiered: props.premiered,
      synopsis: props.synopsis,
      img:props.img
    } })
  }

  return (
    <>
        <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img style={{ cursor:'pointer' }} onClick={handleClick} src={props.img.original || props.img} width="183px" height="199px">
              </img>
              <h6 style={{ textAlign:'right', fontSize:'14px',padding:'0px',marginTop:'12px' }}>{props.name}</h6>
        </div>
    </>
  )
}

export default Movie
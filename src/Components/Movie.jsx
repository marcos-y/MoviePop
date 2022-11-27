import React from 'react'
import {  useNavigate } from "react-router-dom"

const Movie = (props) => {

  const navigate = useNavigate();

  const handleClick= () =>{
    navigate("/Movie", { state:{ title: props.title } })
  }

  return (
    <>
        <div style={{ padding: '10px', display:'flex', flexDirection:'column' }}>
              <img style={{ cursor:'pointer' }} onClick={handleClick} src={props.img} width="183px" height="189px">
              </img>
              <h6 style={{ textAlign:'right', fontSize:'14px' }}>{props.title}</h6>
        </div>
    </>
  )
}

export default Movie
import React, { useState } from 'react'
import axios from 'axios'

//Components
import TextField from '../../Components/TextField'
import ImageList from '../../Components/ImageList'
import Button from '@mui/material/Button';
import PasswordTextField from '../../Components/PasswordTextField'

//Movie Icon
import icon from '../../Images/movie_icon.svg'

//Navigate
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate();

  //Global flag
  sessionStorage.setItem('isLogged', false)

  const [UserName, setUserName] = useState('')
  const [UserPassword, setUserPassword] = useState('')

  const handleChangeUserName = (e) => setUserName(e.target.value)
  const handleChangeUserPassword = (e) => setUserPassword(e.target.value)


  const handleClick = () => {
    console.log('user:', UserName, 'password:', UserPassword)
    
    axios
      .post('http://localhost:8080/users', { UserName, UserPassword })
      .then(({ data }) => {
        console.log('Sucessfully logged')
        sessionStorage.setItem('name', UserName)
        sessionStorage.setItem('isLogged', true)
        navigate('/Home')
      })
      .catch(({ response }) => {
        console.log(response)
        alert('Contraseña o usuario mal ingresado')
      })
  }

  return (
    <>
    <div style={{ display:'flex', marginTop:'90px', justifyContent:'center',flexWrap:'wrap' }}>
      <ImageList/>
      <div style={{ marginLeft:'30px', padding: '10px',borderColor:'black',border:'solid'
      ,borderWidth:'1px', fontFamily:'Nunito',marginBottom:'20px'}}>
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 style={{ color: '#C48900', fontFamily: 'Nunito' }} align="center">MoviePop!</h1>
          <img style={{ width:'40px',height:'40px',marginLeft:'15px'}} src={icon}></img>
        </div>
        
        <TextField id="1" onChange={handleChangeUserName} value={UserName} label="Usuario" 
        style={{  width:'100%', height:'50px', backgroundColor:'transparent'}}/>

        {/* <TextField onChange={handleChangePassword} value={password} label="Contraseña" 
        style={{  width:'100%', height:'50px', backgroundColor:'transparent'}}/>
        */}

        <PasswordTextField setPassword={setUserPassword}/>
        
        <Button onClick={handleClick} 
        style={{ marginTop:'20px', width:'100%', fontFamily:'Nunito',
        backgroundColor:'transparent',color:'#C48900'}} 
        variant="contained">
          Entrar
        </Button>
        <hr style={{ 
          marginTop:'30px',
          width: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor:'black',
          color:'black'
        }}>
        </hr>
        <h6 style={{ fontFamily:'Nunito'}} align="center">
          ¿ Has olvidado la contraseña ?
        </h6>
      </div>
    </div>
    </>
  )
}

export default Login
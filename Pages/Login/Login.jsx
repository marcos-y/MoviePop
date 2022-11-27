import React, { useState } from 'react'

//Components
import TextField from '../../Components/TextField'
import ImageList from '../../Components/ImageList'
import Button from '@mui/material/Button';
import PasswordTextField from '../../Components/PasswordTextField'

//Movie Icon
import icon from '../../Images/movie_icon.svg'

const Login = () => {

  //Global flag
  sessionStorage.setItem('isLogged',false)

  const [user,setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUser = (e) => setUser(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const handleClick = () =>{
    console.log('user:',user ,'password:',password)
    if ((user==='mark') && (password==='123')) {
      alert('Logged!!!')

      //Setting global flag
      sessionStorage.setItem('isLogged',true)
    }
  }

  return (
    <>
    <div style={{ display:'flex', marginTop:'100px', justifyContent:'center',flexWrap:'wrap' }}>
      <ImageList/>
      <div style={{ marginLeft:'30px', padding: '10px',borderColor:'black',border:'solid'
      ,borderWidth:'1px', fontFamily:'Nunito',marginBottom:'20px'}}>
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 style={{ color: '#C48900', fontFamily: 'Nunito' }} align="center">MoviePop!</h1>
          <img style={{ width:'40px',height:'40px',marginLeft:'15px'}} src={icon}></img>
        </div>
        
        <TextField id="1" onChange={handleChangeUser} value={user} label="Usuario" 
        style={{  width:'100%', height:'50px', backgroundColor:'transparent'}}/>

        {/* <TextField onChange={handleChangePassword} value={password} label="Contraseña" 
        style={{  width:'100%', height:'50px', backgroundColor:'transparent'}}/>
        */}

        <PasswordTextField setPassword={setPassword}/>
        
        <Button onClick={handleClick} 
        style={{ marginTop:'20px', width:'100%', fontFamily:'Nunito',backgroundColor:'transparent',color:'#C48900'}} 
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
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, 
          width: window.location.href == 'http://localhost:3000/' ? '25ch' : '358px',
          maxWidth: window.location.href == 'http://localhost:3000/' ? '25ch' : '100%',
          height:'25px',
        }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        style={{color:'white',fontSize:'14'}}
        variant="standard"
        sx={{
          marginLeft:'4px',
          padding:'9px',
          borderRadius:'5px',
          //background:'#2B4156',
          background:'rgba(43, 65, 86, 1)',
          //background: 'rgba(0,0,0,0.05000000074505806)',
          color:'white'
        }}
        InputProps={{ 
          placeholder: props.label,
          disableUnderline: true,
          style:
          {
            position:'relative',
            outline:'none',
            borderRadius: '5px',
            color:'white',
            opacity:'10',
            fontSize:'14',
            fontFamily:'Nunito',
            fontWeight: '300',
            disableUnderline: true,
            }
        }}
        onChange={props.onChange}
        value={props.value}
        size="small"
        id={props.label}
      />
    </Box>
  );
}
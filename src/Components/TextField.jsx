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
        variant="standard"
        sx={{
          marginLeft:'4px',
          padding:'9px',
          borderRadius:'5px',
          backgroundColor:'#2B4156',
        }}
        InputProps={{ 
          placeholder: props.label,
          disableUnderline: true,
          style:
          {
            outline:'none',
            borderRadius: '5px',
            color:'white',
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
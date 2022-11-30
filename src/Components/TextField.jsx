import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: window.location.href == 'http://localhost:3000/' ? '25ch' : '44ch' }
      }}
      noValidate
      autoComplete="off"
    >

      <TextField
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
            borderColor: "#C48900",
            }
          }
        }}
        InputProps={{ style:
          {
            borderRadius: '5px',
            borderColor:'black',
            color:'white',
            fontSize:'14',
            fontFamily:'Nunito',
          }
        }}
        InputLabelProps={{ style: { fontFamily: 'Nunito', color: 'white', fontSize:'14px',fontWeight: '300' } }}
        onChange={props.onChange}
        value={props.value}
        size="small"
        id={props.label}
        label={props.label}
      />

    </Box>
  );
}
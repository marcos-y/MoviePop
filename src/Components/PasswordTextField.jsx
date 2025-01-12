import React, {useEffect}  from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';

export default function InputAdornments(props) {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
        //console.log(values)
    };

    useEffect(()=>{
        props.setPassword(values.password);
    },[values.password])  
    

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '27ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl
                    size="small"
                    sx={{
                        padding:'0px',
                        color:'white',
                        borderRadius: '5px',
                        width: '100%',
                        backgroundColor: '#2B4156',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent',
                            },
                            '&:hover fieldset': {
                                borderColor: 'transparent',
                            },
                        },
                        "& .MuiOutlinedInput-root.Mui-focused":
                        {
                            "& > fieldset": {
                                borderColor: "transparent",
                            }
                        },
                    }}
                    variant="outlined">
                    <OutlinedInput
                        sx={{
                            borderRadius: '5px',
                            width: '100%',
                            backgroundColor: '#2B4156',
                        }}
                        placeholder="Contraseña"
                        style={{
                            color: 'white',
                            fontSize: '14px',
                            fontFamily: 'Nunito',
                            fontWeight: '300',
                        }}
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    style={{ color: 'white' }}
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label=""
                    />
                </FormControl>
            </Box>
        </>
    )

}
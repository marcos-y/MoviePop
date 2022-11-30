import React from 'react'

//Components
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

const SnackBar = (props) => {

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={props.handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Snackbar
                ContentProps={{
                    sx: {
                        fontFamily: 'Nunito',
                        backgroundColor: "#C48900",
                    }
                }}
                open={props.open}
                autoHideDuration={3000}
                onClose={props.handleClose}
                message="Pelicula añadida a mis Favoritos!"
                action={action}
            />
        </>
    )
}

export default SnackBar

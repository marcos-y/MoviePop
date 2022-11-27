import React from 'react'

const Comentario = () => {
    return (
        <div style={{ color: 'white', fontFamily: 'Nunito', margin: 'auto',maxWidth: '600px',minWidth:'376px',padding:'10px' }}>
            {/*
            <hr style={{
                marginTop: '30px',
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'black',
                color: 'black'
            }}>
            </hr>
        <h5>Comentarios</h5>*/}
            <h6>Juan Perez:</h6>
            <p style={{ backgroundColor:'#C48900', borderRadius:'5px', padding:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}

export default Comentario
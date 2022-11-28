import React from 'react'

const Comentario = (props) => {
    return (
        <div style={{ color: 'white', fontFamily: 'Nunito', margin: 'auto',maxWidth: '600px',minWidth:'376px',padding:'10px' }}>
            <h6>{props.user} :</h6>
            <p style={{ backgroundColor:'#C48900', borderRadius:'5px', padding:'10px'}}>
                {props.comment}
            </p>
        </div>
    )
}

export default Comentario
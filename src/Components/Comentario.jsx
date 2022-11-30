import React from 'react'

const Comentario = (props) => {

    //console.log(props.comment)
    //console.log(props.UserName)

    return (
        <div style={{ color: 'white', fontFamily: 'Nunito', margin: 'auto',maxWidth: '600px',
        minWidth:'376px',padding:'8px', float:'left' }}>
            <h6 style={{ color: 'white', fontFamily: 'Nunito',fontWeight:'normal' }}> {props.UserName} :</h6>
            <p style={{ backgroundColor:'#C48900', borderRadius:'5px', padding:'10px',fontWeight:'normal'}}>
                {props.comment}
            </p>
        </div>
    )
}

export default Comentario
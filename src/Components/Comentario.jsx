import React from 'react'

const Comentario = (props) => {

    //console.log(props.comment)
    //console.log(props.UserName)

    return (
        <div style={{ color: 'white', fontFamily: 'Nunito', margin: 'auto',maxWidth: '600px',
        minWidth:'450px',padding:'8px', float:'left' }}>
            <div style={{ color: 'white', fontFamily: 'Nunito',fontWeight:'normal', fontSize:'14' }}> 
                {props.UserName} :
            </div>
            <p style={{ backgroundColor:'#C48900', borderRadius:'5px', padding:'10px',fontWeight:'normal', fontSize:'14' }}>
                {props.comment}
            </p>
        </div>
    )
}

export default Comentario
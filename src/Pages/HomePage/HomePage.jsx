import React from 'react'
import img from '../../Images/cinema.png'

const Home = () => {

  return (
    <>
      <div
        style={{
          transform: 'translate(-50%, -50%)',
          margin: '0', 
          top:'50%',
          left: '50%' , 
          position:'absolute',
          backgroundColor:'transparent'
        }}
      >
      <img style={{ maxWidth:'332px' }} src={img}></img>
      <h1 style={{ color: '#C48900', fontFamily: 'Nunito',fontWeight: '700' }} align="center">
          MoviePop!
      </h1>
      </div>
    </>
  )
}

export default Home
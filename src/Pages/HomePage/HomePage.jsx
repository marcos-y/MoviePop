import React from 'react'
import img from '../../Images/cinema.png'

const Home = () => {

  return (
    <>
      <div
        style={{
          transform: 'translate(-50%, -50%)',
          margin: '0',
          top: '50%',
          left: '50%',
          position: 'absolute',
          backgroundColor: 'transparent'
        }}
      >
        <img style={{ maxWidth: '332px', minWidth: '300px' , height:'auto'}} src={img}></img>
        <div style={{ maxWidth:'235px', margin:'auto'}} >
          <h1 style={{ color: '#C48900', fontFamily: 'Nunito', fontWeight: '700' }} align="center">
            MoviePop!
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
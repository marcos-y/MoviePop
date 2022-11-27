import React from 'react'

//Components
import TextField from '../../Components/TextField'
import Movie from '../../Components/Movie'

//Images
import img1 from '../../Images/movie6.jpg'
import img2 from '../../Images/movie2.jpg'
import img3 from '../../Images/movie8.jpg'
import img4 from '../../Images/movie4.jpg'
import img5 from '../../Images/movie5.jpg'
import img6 from '../../Images/movie1.jpg'
import img7 from '../../Images/movie7.jpg'
import img8 from '../../Images/movie3.jpg'
import img9 from '../../Images/movie9.jpg'

const Search = (props) => {

  console.log('new array', props.array)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div
        style={{
          marginTop:'200px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '900px',
          width: '100%',
          height: 'auto',
          padding: '20px',
          backgroundColor: 'transparent '
        }}
      >
        <TextField label="Buscar" id="fullWidth" />
        <h5 style={{ fontFamily: 'Nunito', color: 'white' }}>Peliculas</h5>
        <hr style={{
          marginTop: '12px',
          width: '93%',
          backgroundColor: 'white',
          color: 'white',
          margin: 'auto',
          marginBottom: '15px'
        }}>
        </hr>

        <div style={{
          display: 'flex', marginTop: '40px', justifyContent: 'center', padding: '5px',
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap', margin: 'auto', width: '100%', height: 'auto'
        }}>
          <div style={{ display: 'flex', padding: '5px' }}>
            <Movie title="Gladiator" img={img1} />
            <Movie title="Avatar" img={img2} />
          </div>
          <div style={{ display: 'flex' }} >
            <Movie title="Resident Evil: Afterlife" img={img3} />
            <Movie title="Edge of Tomorrow" img={img4} />
          </div>
        </div>

        <div style={{
          display: 'flex', marginTop: '40px', justifyContent: 'center', padding: '5px',
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex' }}>
            <Movie title="Gladiator" img={img1} />
            <Movie title="Avatar" img={img2} />
          </div>
          <div style={{ display: 'flex' }} >
            <Movie title="Resident Evil: Afterlife" img={img3} />
            <Movie title="Edge of Tomorrow" img={img4} />
          </div>
        </div>

        <div style={{
          display: 'flex', marginTop: '40px', justifyContent: 'center', padding: '5px',
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex' }}>
            <Movie title="Gladiator" img={img1} />
            <Movie title="Avatar" img={img2} />
          </div>
          <div style={{ display: 'flex' }} >
            <Movie title="Resident Evil: Afterlife" img={img3} />
            <Movie title="Edge of Tomorrow" img={img4} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search
import React, { useState, useEffect } from 'react'

//Components
import Movie from '../../Components/Movie'
import SearchBar from '../../Components/SearchBar'

//Images
import img1 from '../../Images/movie6.jpg'
import img2 from '../../Images/movie2.jpg'
import img3 from '../../Images/movie8.jpg'
import img4 from '../../Images/movie4.jpg'

//Data from API
const movies = [
  {
    img: img1,
    title: 'Gladiator',
    language: 'EnglishEnglish',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img2,
    title: 'Avatar',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img3,
    title: 'Edge of Tomorrow',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img4,
    title: 'Resident Evil: AfterLife',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img1,
    title: 'Gladiator',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img2,
    title: 'Avatar',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img3,
    title: 'Edge of Tomorrow',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img4,
    title: 'Resident Evil: AfterLife',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img1,
    title: 'Gladiator',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img2,
    title: 'Avatar',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img3,
    title: 'Edge of tomorrow',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img4,
    title: 'Resident Evil: AfterLife',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img1,
    title: 'Gladiator',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img2,
    title: 'Avatar',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img3,
    title: 'Edge of tomorrow',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    img: img4,
    title: 'Resident Evil: AfterLife',
    language: 'English',
    genres: 'action',
    date: '01-05-22',
    synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
]


const SearchPage = (props) => {
  
  console.log('Movies list',props.movies)
  const [searchResults,setSearchResults] = useState(props.movies)
 
  //const content = searchResults?.length ? searchResults : <article><p>No matching posts</p></article> 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div
        style={{
          marginTop: '200px',
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
        <SearchBar movies={props.movies}  setSearchResults={setSearchResults}/>
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
          fontFamily: 'Nunito', color: 'white', flexWrap: 'wrap', minWidth: '200px'
        }}>
            <div style={{ display: 'flex', maxWidth:'1000px', flexWrap:'wrap',justifyContent:'center'
            ,minWidth:'415px' }}>
              {
              searchResults.map((movie) => {
                return (
                  <Movie
                    key={movie}
                    name={movie.show.name}
                    language={movie.show.language}
                    genres={movie.show.genres}
                    premiered={movie.show.premiered}
                    synopsis={movie.show.summary}
                    img={movie.show.image} />
                  )
                })
              }
            </div>
        </div>
    </div>
    </div>
  )
}

export default SearchPage
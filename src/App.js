import './App.css';
import react from 'react';

//Pages
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';

//Router
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div style={{ backgroundImage: 'linear-gradient(to left, #223C53 , #223C53)', width:'100%', height:'100%' }}>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';

//Pages
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';

//Router
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<PrivateRoutes/>} >
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Search' element={<Search/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

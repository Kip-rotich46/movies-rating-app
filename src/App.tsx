import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import TvShow from './pages/tvshow/TvShow';

function App() {

  return (    
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path='/auth' element={<Auth />} />
            <Route path='/rated' element={<h1>Rated</h1>} />
            <Route path='/movie/:id' element={< Movie/>} />
            <Route path='/tvshow/:id' element={< TvShow/>} />

          </Routes>
        </Router>
      </div>
    
  )
}

export default App

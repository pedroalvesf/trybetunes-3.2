
import Header from './components/header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import MusicsAlbum from './pages/MusicsAlbum'
import Search from './pages/Search'
function App() {

  const [state, setState] = useState([]);

  return (
        <BrowserRouter>
          <Header setState={setState}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/album/:id" element={<MusicsAlbum state={state}/>} />
            <Route path="/search" element={<Search state={state} />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App


import Header from './components/header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import MusicsAlbum from './pages/MusicsAlbum'
function App() {

  const [state, setState] = useState([]);

  return (
        <BrowserRouter>
          <Header setState={setState}/>
          <Routes>
            <Route path="/" element={<Home state={state} />} />
            <Route path="/album/:id" element={<MusicsAlbum />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App

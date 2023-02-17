
import Header from './components/header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
function App() {

  const [state, setState] = useState([]);

  return (
        <BrowserRouter>
          <Header setState={setState}/>
          <Routes>
            <Route path="/" element={<Home state={state} />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App

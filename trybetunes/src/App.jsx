
import Header from './components/header/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  // const [count, setCount] = useState(0)

  return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App

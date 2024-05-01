import './App.css'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AnimeList from './pages/AnimeList'


function App() {
  return (
      <BrowserRouter>
        <div className="bg-gray-400 h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animelist" element={<AnimeList />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App

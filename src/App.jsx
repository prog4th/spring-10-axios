import { Routes, Route } from 'react-router-dom'
import SongList from './pages/SongList'
import SongDetail from './pages/SongDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SongList/>} />
      <Route path="/:id" element={<SongDetail/>} />
    </Routes>
  )
}

export default App

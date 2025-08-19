import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import SearchResult from './pages/Seachresult'
import VideoDetails from './pages/Vediodetails'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/watch/:id" element={<VideoDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

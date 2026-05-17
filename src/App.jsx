import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import SearchResult from './pages/Seachresult'
import VideoDetails from './pages/Vediodetails'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white md:flex">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col pb-16 md:pb-0">
          <Navbar />
          <main className="flex-1 overflow-x-hidden">
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

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-black text-white">
      {/* Left Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src="https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png" alt="Logo" className="w-8" />
        <span className="text-xl font-bold">YouTube</span>
      </Link>

      {/* Search Bar */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-zinc-900 text-white border border-zinc-700 px-4 py-1 rounded-l-full outline-none"
        />
        <button className="bg-zinc-800 px-4 py-1 rounded-r-full">🔍</button>
      </div>
      

      {/* Right Profile */}
      <div className="flex items-center gap-4">
        <button>🔔</button>
        <button className="bg-orange-500 px-3 py-1 rounded-full">L</button>
      </div>
    </header>
  );
}

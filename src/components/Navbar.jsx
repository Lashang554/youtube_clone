import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  }

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-zinc-900 bg-black px-4 py-2 text-white">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png"
          alt="YouTube logo"
          className="w-8"
        />
        <span className="hidden text-xl font-bold sm:inline">YouTube</span>
      </Link>

      <form onSubmit={handleSubmit} className="flex max-w-2xl flex-1 items-center">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          aria-label="Search videos"
          className="min-w-0 flex-1 rounded-l-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none transition focus:border-blue-500"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="rounded-r-full border border-l-0 border-zinc-700 bg-zinc-800 px-4 py-2 transition hover:bg-zinc-700"
        >
          🔍
        </button>
      </form>

      <div className="flex items-center gap-3">
        <button aria-label="Notifications" className="hidden text-lg sm:inline">
          🔔
        </button>
        <button aria-label="Profile" className="rounded-full bg-orange-500 px-3 py-1 font-semibold">
          L
        </button>
      </div>
    </header>
  );
}

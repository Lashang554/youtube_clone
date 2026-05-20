import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	BellIcon,
	CreateIcon,
	MenuIcon,
	MicIcon,
	SearchIcon,
	YouTubeLogo,
} from "./YoutubeIcons";

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
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between gap-3 border-b border-zinc-900 bg-black px-3 text-white sm:px-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open menu"
          className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-900 md:inline-flex"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <Link to="/" className="flex items-center text-white" aria-label="YouTube home">
          <YouTubeLogo className="h-6 w-[98px]" />
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex max-w-2xl flex-1 items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          aria-label="Search videos"
          className="min-w-0 flex-1 rounded-l-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-white outline-none transition placeholder:text-zinc-500 focus:border-blue-500"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="flex h-[42px] w-14 items-center justify-center rounded-r-full border border-l-0 border-zinc-700 bg-zinc-800 transition hover:bg-zinc-700 sm:w-16"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
        </div>
        <button
          type="button"
          aria-label="Search with your voice"
          className="hidden h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-zinc-800 sm:inline-flex"
        >
          <MicIcon className="h-5 w-5" />
        </button>
      </form>

      <div className="flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          aria-label="Create"
          className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-900 sm:inline-flex"
        >
          <CreateIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="hidden h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-900 sm:inline-flex"
        >
          <BellIcon className="h-5 w-5" />
        </button>
        <button aria-label="Profile" className="h-8 w-8 rounded-full bg-orange-500 text-sm font-semibold">
          L
        </button>
      </div>
    </header>
  );
}

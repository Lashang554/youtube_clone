export default function CategoryBar() {
  const categories = [
    "All", "Music", "Live", "JavaScript", "Web Development",
    "Cricket", "Stadiums", "Mixes", "Mantras", "Movies", "Comedy", "MMA"
  ];

  return (
    <div className="sticky top-[57px] z-10 flex gap-3 overflow-x-auto border-b border-zinc-900 bg-black px-4 py-3 text-white">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="whitespace-nowrap rounded-full bg-zinc-800 px-4 py-1.5 text-sm transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

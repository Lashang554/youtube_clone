export default function CategoryBar() {
  const categories = [
    "All", "Music", "Live", "JavaScript", "Web Development",
    "Cricket", "Stadiums", "Mixes", "Mantras", "Movies"
  ];

  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-2 bg-black text-white scrollbar-hide">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="px-4 py-1 bg-zinc-800 rounded-full text-sm whitespace-nowrap hover:bg-white hover:text-black"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

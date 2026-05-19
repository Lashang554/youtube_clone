import { categories } from "../data/videos";

export default function CategoryBar({ selectedCategory, onSelectCategory }) {
  return (
    <div className="sticky top-[57px] z-10 flex gap-3 overflow-x-auto border-b border-zinc-900 bg-black px-4 py-3 text-white">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
        <button
          key={category}
          type="button"
          onClick={() => onSelectCategory(category)}
          className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 ${
            isSelected
              ? "bg-white text-black"
              : "bg-zinc-800 text-white hover:bg-zinc-700"
          }`}
        >
          {category}
        </button>
        );
      })}
    </div>
  );
}

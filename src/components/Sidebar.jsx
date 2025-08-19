import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-black text-white flex flex-col items-center py-4 space-y-6">
      <Link to="/" className="flex flex-col items-center hover:text-red-500">
        🏠 <span className="text-xs">Home</span>
      </Link>
      <Link to="/shorts" className="flex flex-col items-center hover:text-red-500">
        🎬 <span className="text-xs">Shorts</span>
      </Link>
      <Link to="/subscriptions" className="flex flex-col items-center hover:text-red-500">
        📺 <span className="text-xs">Subs</span>
      </Link>
      <Link to="/you" className="flex flex-col items-center hover:text-red-500">
        🙍 <span className="text-xs">You</span>
      </Link>
    </aside>
  );
}

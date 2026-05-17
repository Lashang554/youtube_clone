import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", icon: "🏠", label: "Home" },
    { to: "/", icon: "🎬", label: "Shorts" },
    { to: "/", icon: "📺", label: "Subs" },
    { to: "/", icon: "🙍", label: "You" },
  ];

  return (
    <aside className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-around border-t border-zinc-900 bg-black px-2 py-2 text-white md:sticky md:top-0 md:h-screen md:w-20 md:flex-col md:justify-start md:gap-6 md:border-r md:border-t-0 md:py-4">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className="flex min-w-14 flex-col items-center rounded-lg px-2 py-1 text-xs transition hover:bg-zinc-900 hover:text-red-500"
        >
          <span className="text-lg" aria-hidden="true">
            {link.icon}
          </span>
          <span>{link.label}</span>
        </Link>
      ))}
    </aside>
  );
}

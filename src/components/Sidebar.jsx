import { Link } from "react-router-dom";
import { HomeIcon, ShortsIcon, SubscriptionsIcon, UserIcon } from "./YoutubeIcons";

export default function Sidebar() {
  const links = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/", icon: ShortsIcon, label: "Shorts" },
    { to: "/", icon: SubscriptionsIcon, label: "Subscriptions" },
    { to: "/", icon: UserIcon, label: "You" },
  ];

  return (
    <aside className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-around border-t border-zinc-900 bg-black px-2 py-2 text-white md:sticky md:top-0 md:h-screen md:w-20 md:flex-col md:justify-start md:gap-2 md:border-r md:border-t-0 md:py-3">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.label}
            to={link.to}
            className="flex min-w-14 flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-[11px] transition hover:bg-zinc-900 hover:text-red-500 md:w-16"
          >
            <Icon className="h-6 w-6" />
            <span className="max-w-full truncate">{link.label}</span>
          </Link>
        );
      })}
    </aside>
  );
}

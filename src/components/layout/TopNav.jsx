// React Components  >  Layout Components > Top navigation (Logo + menu links)
import { Flame, MapPin, Sparkles, User, UtensilsCrossed } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Explore", Icon: Sparkles },
  { to: "/restaurants", label: "Restaurants", Icon: UtensilsCrossed },
  { to: "/deals", label: "Deals", Icon: Flame },
  { to: "/map", label: "Map", Icon: MapPin },
  { to: "/login", label: "Login", Icon: User },
];

const linkClassName = ({ isActive }) =>
  [
    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-500/40  focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    isActive
      ? "bg-violet-500/20 text-violet-200 ring-2 ring-violet-500/25"
      : "text-zinc-300 hover:bg-white/5 hover:text-white",
  ].join(" ");

const TopNav = () => {
  return (
    <header className="topnav-glow sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-wider text-zinc-100"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
            <Sparkles className="h-4 w-4 text-violet-300" strokeWidth={1.8} />
          </span>


          <span className="inline-block bg-linear-to-r from-sky-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            VYBE
          </span>
        </NavLink>

        <nav className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink key={to} to={to} className={linkClassName}>
              <Icon className="h-4.5 w-4.5 text-current" strokeWidth={1.6} />
              <span className="hidden md:inline">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopNav;

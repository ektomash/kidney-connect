import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 h-16 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] sticky top-0 z-[100] max-md:px-4">
      <div className="flex items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 no-underline text-primary font-bold text-xl"
        >
          <span className="text-2xl text-destructive">&#9829;</span>
          <span className="text-kidney-700 max-md:hidden">Kidney Connect</span>
        </NavLink>
      </div>
      <div className="flex gap-2 max-md:gap-1">
        {[
          { to: "/blog", label: "Blog" },
          { to: "/funds", label: "Funds" },
          { to: "/advice", label: "Advice" },
          { to: "/profile", label: "Profile" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "no-underline px-5 py-2 rounded-full text-warm-muted font-medium text-[0.95rem] transition-all duration-200 max-md:px-3 max-md:py-1.5 max-md:text-sm",
                isActive
                  ? "bg-destructive text-white"
                  : "hover:bg-kidney-100 hover:text-primary"
              )
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

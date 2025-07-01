import { useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderMenuItem } from "./headerMenuItem";
import { HeaderMenuItemsList } from "./HeaderMenuItems";
import { match } from "path-to-regexp";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Header() {
  const location = useLocation();

  return (
    <div
      className=" flex items-center justify-between w-full max-w-2xl mx-auto rounded-xl bg-[var(--card)]
     text-[var(--card-foreground)]  shadow p-4 lg:w-full md:w-1/2 lg:top-0 lg:relative lg:mb-7 sm:rounded-lg sm:gap-2 sm:px-3 sm:my-5 "
    >
      <div className="flex items-center gap-4 ">
        <img
          src="/favicon.png"
          alt="logo"
          width={40}
          height={40}
          className="w-12 h-12 sm:w-8 sm:h-10 "
        />

        <ul className="flex gap-4 sm:gap-3">
          {HeaderMenuItemsList.map((l) => (
            <HeaderMenuItem
              key={l.href}
              item={l}
              isActive={!!match(l.href)(location.pathname)}
            />
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 sm:p-1">
        <Link to="/favorite">
          <Heart />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

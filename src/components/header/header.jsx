import { useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { HeaderMenuItem } from "./headerMenuItem";
import { HeaderMenuItemsList } from "./HeaderMenuItems";
import { match } from "path-to-regexp";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  const location = useLocation();

  return (
    <div className="top-3 p-1 z-20 bg-card absolute  left-1/2 transform -translate-x-1/2 rounded-xl w-2xl flex flex-col xs:top-0 xs:static xs:w-full xs:items-center xs:gap-4 sm:flex-row sm:justify-between sm:items-center sm:py-1">
      {/* 1. Satır: Logo ve Nav */}
      <div className="flex items-center gap-4 justify-center w-full sm:w-auto">
        <img
          src="/favicon.png"
          alt="logo"
          width={40}
          height={40}
          className="sm:w-8 sm:h-10 w-12 h-12"
        />
        <ul className="sm:gap-3 flex gap-4">
          {HeaderMenuItemsList.map((l) => (
            <HeaderMenuItem
              key={l.href}
              item={l}
              isActive={!!match(l.href)(location.pathname)}
            />
          ))}
        </ul>
      </div>
      {/* 2. Satır: Favorite ve Toggle */}
      <div className="flex items-center gap-4 justify-center w-full sm:w-auto">
        <Button asChild variant="outline">
          <Link to="/favorite">
            <Heart />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
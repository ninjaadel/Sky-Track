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
  <div
    className="px-2 py-4 md:flex md:px-0
     md:justify-between md:items-center
      w-full max-w-3xl mx-auto md:py-1 px-3 rounded-xl
      bg-[var(--card)] text-[var(--card-foreground)] shadow
      gap-4 md:gap-2 
      "
  >
    <div className="flex items-center gap-4">
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

    <div className="flex items-center gap-4">
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

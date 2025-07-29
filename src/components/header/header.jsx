import { useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { HeaderMenuItem } from "./headerMenuItem";
import { HeaderMenuItemsList } from "./HeaderMenuItems";
import { match } from "path-to-regexp";
import { Link } from "react-router-dom";
import { Heart, User } from "lucide-react";
import { Button } from "../ui/button";
import { Icon } from "./icon";
import { useTheme } from "../../providers/useTheme";

export function Header() {
  const location = useLocation();
  const ThemeProvider = useTheme();

  return (
    <div className="top-3 p-2 xs:p-1 z-50 bg-card absolute left-1/2 transform -translate-x-1/2 rounded-xl w-[95%] max-w-4xl flex flex-col xs:top-0 xs:static xs:w-full xs:items-center xs:gap-3 sm:flex-row sm:justify-between sm:items-center sm:py-2">
      {/* 1. Satır: Logo ve Nav */}
      <div className="flex items-center gap-3 xs:gap-4 justify-center w-full sm:w-auto">
        <Icon size={28} />
        <ul className="flex gap-3 xs:gap-4">
          {HeaderMenuItemsList.map((l) => (
            <HeaderMenuItem
              key={l.href}
              item={l}
              isActive={!!match(l.href)(location.pathname)}
            />
          ))}
        </ul>
      </div>
      {/* 2. Satır: Favorite, Login ve Toggle */}
      <div className="flex items-center gap-2 xs:gap-3 justify-center w-full sm:w-auto">
        <Button asChild variant="outline" size="sm">
          <Link to="/favorite">
            <Heart className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link to="/login">
            <User className="w-4 h-4" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}

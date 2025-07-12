import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn";

export function HeaderMenuItem({ item, isActive }) {
  return (
    <li>
      <Link
        to={item.href}
        className={cn("sm:text-base ", isActive ? "opacity-100" : "opacity-70")}
      >
        {item.label}
      </Link>
    </li>
  );
}

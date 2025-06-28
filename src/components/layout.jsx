import { Outlet } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

export default function Layout() {
  return (
    <div className="relative p-7">
      <Outlet />
    </div>
  );
}

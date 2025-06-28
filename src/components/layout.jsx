import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="relative p-7">
      <Outlet />
    </div>
  );
}

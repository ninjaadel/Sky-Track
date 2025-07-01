import { Outlet } from "react-router";
import { Header } from "./header/header";
export default function Layout() {
  return (
    <div className=" relative pt-8 sm:pt-2">
      <Header />

      <Outlet />
    </div>
  );
}

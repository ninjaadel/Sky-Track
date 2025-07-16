import { Outlet } from "react-router";
import { Header } from "./header/header";


export default function Layout() {
  
  return (
    <div className=" relative ">
      <Header />
      
        <Outlet />
    

    </div>
  );
}

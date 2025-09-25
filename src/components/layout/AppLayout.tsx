import { Outlet } from "react-router";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet /> {/* Page content will render here */}
    </div>
  );
};

export default AppLayout;

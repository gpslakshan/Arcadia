import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-1 overflow-y-auto">
          <Outlet /> {/* Page content will render here */}
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen max-w-[2000px] mx-auto">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 mt-15 p-4 overflow-y-auto">
          <Outlet /> {/* Page content will render here */}
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;

import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

const GameDetailsLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="mt-15 flex-1 p-4 overflow-y-auto">
        <Outlet /> {/* Page content will render here */}
      </main>
    </div>
  );
};

export default GameDetailsLayout;

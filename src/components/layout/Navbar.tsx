import logo from "@/assets/logo.webp";
import { ModeToggle } from "../shared/mode-toggle";

const Navbar = () => {
  return (
    <div className="h-15 px-4 flex items-center justify-between shadow-md border-b fixed top-0 left-0 right-0 bg-white dark:bg-black z-50">
      <div className="flex items-center">
        <img src={logo} className="h-15 object-cover" />
        <p className="uppercase tracking-widest font-extrabold">Arcadia</p>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;

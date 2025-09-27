import logo from "@/assets/logo.webp";
import { ModeToggle } from "../shared/mode-toggle";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="h-15 px-4 flex items-center justify-between shadow-md border-b fixed top-0 left-0 right-0 bg-white dark:bg-black z-50">
      <Link to={"/"} className="flex items-center">
        <img src={logo} className="h-15 object-cover" />
        <p className="uppercase tracking-widest font-extrabold">Arcadia</p>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default Navbar;

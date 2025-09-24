import logo from "@/assets/logo.webp";
import { ModeToggle } from "../shared/mode-toggle";

const Navbar = () => {
  return (
    <div className="px-4 flex items-center justify-between shadow-md border-b">
      <div className="flex items-center">
        <img src={logo} className="h-15 object-cover" />
        <p>Arcadia</p>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;

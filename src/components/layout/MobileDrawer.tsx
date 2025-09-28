import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import GenreList from "@/games/GenreList";
import PlatformsList from "@/games/PlatformsList";
import logo from "@/assets/logo.webp";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-left flex items-center gap-1">
            <img src={logo} className="h-10 object-cover" />
            <p className="uppercase tracking-widest font-extrabold">Arcadia</p>
          </SheetTitle>
          <SheetDescription className="sr-only">
            description goes here
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4 overflow-y-auto h-full">
          <GenreList />
          <PlatformsList />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;

import GenreList from "@/games/GenreList";
import PlatformsList from "@/games/PlatformsList";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-2 lg:w-[220px] xl:w-[250px] bg-muted/50 shadow-lg border-r sticky top-15 h-screen overflow-y-auto">
      <GenreList />
      <PlatformsList />
    </aside>
  );
};

export default Sidebar;

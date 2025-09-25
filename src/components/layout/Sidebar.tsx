import GenreList from "@/features/games/components/GenreList";

const Sidebar = () => {
  return (
    <div className="hidden lg:block lg:w-[220px] xl:w-[250px] bg-muted/50 shadow-lg border-r fixed top-15 h-screen">
      <GenreList />
    </div>
  );
};

export default Sidebar;

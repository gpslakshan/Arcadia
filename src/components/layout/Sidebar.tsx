import GenreList from "@/games/GenreList";

const Sidebar = () => {
  return (
    <div className="hidden lg:block lg:w-[220px] xl:w-[250px] bg-muted/50 shadow-lg border-r sticky top-15 h-screen">
      <GenreList />
    </div>
  );
};

export default Sidebar;

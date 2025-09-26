import GamesGrid from "@/games/GamesGrid";
import GenreList from "@/games/GenreList";
import PlatformSelector from "@/games/PlatformSelector";
import SearchInput from "@/games/SearchInput";
import SortSelector from "@/games/SortSelector";

const HomePage = () => {
  return (
    <div className="flex flex-1">
      <div className="hidden lg:block lg:w-[220px] xl:w-[250px] bg-muted/50 shadow-lg border-r sticky top-15 h-screen">
        <GenreList />
      </div>
      <main className="mt-15 p-4 flex-1 flex flex-col gap-5 overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <SearchInput />
          <PlatformSelector />
          <SortSelector />
        </div>
        <GamesGrid />
      </main>
    </div>
  );
};

export default HomePage;

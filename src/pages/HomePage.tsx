import GameHeading from "@/games/GameHeading";
import GamesGrid from "@/games/GamesGrid";
import GenreList from "@/games/GenreList";
import PlatformsList from "@/games/PlatformsList";
import SearchInput from "@/games/SearchInput";
import SortSelector from "@/games/SortSelector";

const HomePage = () => {
  return (
    <div className="flex flex-1">
      <div className="hidden lg:flex flex-col gap-2 lg:w-[220px] xl:w-[250px] bg-muted/50 shadow-lg border-r sticky top-15 h-screen overflow-y-auto">
        <GenreList />
        <PlatformsList />
      </div>
      <main className="mt-15 p-4 flex-1 flex flex-col gap-5 overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <SearchInput />
          <SortSelector />
        </div>
        <GameHeading />
        <GamesGrid />
      </main>
    </div>
  );
};

export default HomePage;

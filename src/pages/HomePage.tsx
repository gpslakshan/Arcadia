import Sidebar from "@/components/layout/Sidebar";
import GameHeading from "@/games/GameHeading";
import GamesGrid from "@/games/GamesGrid";
import SearchInput from "@/games/SearchInput";
import SortSelector from "@/games/SortSelector";

const HomePage = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
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

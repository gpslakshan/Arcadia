import GamesGrid from "@/games/GamesGrid";
import PlatformSelector from "@/games/PlatformSelector";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <PlatformSelector />
      <GamesGrid />
    </div>
  );
};

export default HomePage;

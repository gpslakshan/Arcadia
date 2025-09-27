import useGameQueryStore from "@/stores/game-query";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCard from "./GameCard";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "@/api/games";

const GamesGrid = () => {
  const { gameQuery } = useGameQueryStore();

  const {
    data: games,
    isLoading,
    error,
  } = useQuery<Game[], Error>({
    queryKey: ["games", gameQuery], // cache based on filters
    queryFn: () =>
      fetchGames({
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 32 }).map((_, index) => (
          <GameCardLoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-400">{error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {games?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesGrid;

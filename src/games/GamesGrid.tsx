import { useEffect, useState } from "react";
import { toast } from "sonner";

import apiClient from "@/services/api-client";
import useGameQueryStore from "@/stores/game-query";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { genreId } = useGameQueryStore();

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", {
        params: {
          genres: genreId,
        },
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => toast.error(`Failed to fetch games: ${err.message}`))
      .finally(() => setLoading(false));
  }, [genreId]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 32 }).map((_, index) => (
          <GameCardLoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesGrid;

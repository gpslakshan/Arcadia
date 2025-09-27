import useGameQueryStore from "@/stores/game-query";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCard from "./GameCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGames } from "@/api/games";
import InfiniteScroll from "react-infinite-scroll-component";

const GamesGrid = () => {
  const { gameQuery } = useGameQueryStore();

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchGamesResponse, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) =>
        fetchGames({
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam as number,
        }),
      getNextPageParam: (lastPage, allPages) => {
        // If there's a next URL, return the next page number
        if (lastPage.next) {
          return allPages.length + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });

  // Flatten all pages into a single array
  const allGames = data?.pages.flatMap((page) => page.results) || [];

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

  if (allGames.length === 0 && !isLoading) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No games found
        </h3>
        <p className="text-gray-500">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={allGames.length}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <GameCardLoadingSkeleton key={`loading-${index}`} />
          ))}
        </div>
      }
      endMessage={
        <div className="text-center py-8 text-gray-500">
          <p>🎮 You've seen all the games! Time to start playing! 🎮</p>
        </div>
      }
      className="overflow-visible!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default GamesGrid;

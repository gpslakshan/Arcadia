import useGameQueryStore from "@/stores/game-query";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCard from "./GameCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGames } from "@/api/games";
import { useCallback, useEffect, useRef } from "react";
import React from "react";

const GamesGrid = () => {
  const { gameQuery } = useGameQueryStore();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<FetchGamesResponse, Error>({
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

  // Intersection Observer for infinite scroll
  const lastGameElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Flatten all pages into a single array of games
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

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allGames.map((game, index) => {
          // Attach ref to the last element for intersection observer
          if (allGames.length === index + 1) {
            return (
              <div ref={lastGameElementRef} key={game.id}>
                <GameCard game={game} />
              </div>
            );
          }
          return <GameCard key={game.id} game={game} />;
        })}
      </div>

      {/* Loading indicator for next page */}
      {isFetchingNextPage && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <GameCardLoadingSkeleton key={`loading-${index}`} />
          ))}
        </div>
      )}

      {/* End of results indicator */}
      {!hasNextPage && allGames.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>You've reached the end of the games list!</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default GamesGrid;

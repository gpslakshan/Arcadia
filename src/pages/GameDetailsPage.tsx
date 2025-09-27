import { fetchGameDetails } from "@/api/games";
import ExpandableText from "@/components/shared/ExpandableText";
import GameAttributes from "@/games/GameAttributes";
import GameScreenshots from "@/games/GameScreenshots";
import GameTrailer from "@/games/GameTrailer";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const {
    data: game,
    error,
    isLoading,
  } = useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => fetchGameDetails(slug!),
  });

  if (isLoading) {
    return <p className="mt-15">Loading...</p>;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <div className="h-full mt-15 p-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-extrabold">{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </div>
      <div className="flex flex-col gap-5">
        <GameTrailer slug={game.slug} />
        <GameScreenshots slug={game.slug} />
      </div>
    </div>
  );
};

export default GameDetailsPage;

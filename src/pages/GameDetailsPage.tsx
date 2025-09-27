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
    <div className="h-full mt-15 p-5">
      <h1 className="text-5xl font-extrabold mb-5">{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer slug={game.slug} />
      <GameScreenshots slug={game.slug} />
    </div>
  );
};

export default GameDetailsPage;

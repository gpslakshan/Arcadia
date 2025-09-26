import { Card } from "@/components/ui/card";
import imagePlaceholder from "@/assets/no-image-placeholder.webp";
import { Link } from "react-router";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageURL } from "@/lib/utils";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`games/${game.slug}`}>
      <Card className="py-0 overflow-hidden gap-0">
        {/* Image Section */}
        <img
          src={getCroppedImageURL(game.background_image) || imagePlaceholder}
          alt={game.name}
          className="h-60 w-full object-cover"
        />

        {/* Content Section */}
        <div className="px-2 py-4">
          <div className="mb-2 flex justify-between items-center">
            <PlatformIconList platforms={game.parent_platforms || []} />
            <CriticScore score={game.metacritic} />
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold truncate">{game.name}</h2>
            <Emoji rating={game.rating_top} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;

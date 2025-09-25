import { Card } from "@/components/ui/card";
import imagePlaceholder from "@/assets/no-image-placeholder.webp";
import { Link } from "react-router";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`game/${game.id}`}>
      <Card className="py-0 overflow-hidden gap-0">
        {/* Image Section */}
        <img
          src={game.background_image || imagePlaceholder}
          alt={game.name}
          className="h-48 w-full object-cover"
        />

        {/* Content Section */}
        <div className="px-2 py-4">
          <h2 className="text-lg font-bold truncate">{game.name}</h2>
          <PlatformIconList platforms={game.parent_platforms} />
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;

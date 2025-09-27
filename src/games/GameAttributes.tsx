import DefinitionItem from "@/components/shared/DefinitionItem";
import { platformIconMap } from "@/constants/platforms";
import CriticScore from "./CriticScore";

interface Props {
  game: DetailedGame;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-x-2 gap-y-5">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => {
          const Icon = platformIconMap[platform.slug];
          return (
            <div key={platform.id} className="flex gap-2 items-center">
              <Icon className="text-xl" />
              <p>{platform.name}</p>
            </div>
          );
        })}
      </DefinitionItem>
      <DefinitionItem term="Meta-score">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <p key={publisher.id}>{publisher.name}</p>
        ))}
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;

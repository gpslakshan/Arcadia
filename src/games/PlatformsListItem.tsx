import { platformIconMap } from "@/constants/platforms";
import useGameQueryStore from "@/stores/game-query";

interface Props {
  platform: Platform;
}

const PlatformsListItem = ({ platform }: Props) => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);
  const Icon = platformIconMap[platform.slug];

  return (
    <div className="flex items-center gap-2">
      <Icon className="text-2xl" />
      <p
        className={`cursor-pointer hover:underline ${
          selectedPlatformId === platform.id
            ? "text-lg underline font-bold"
            : "text-base"
        }`}
        onClick={() => {
          if (platform.id === selectedPlatformId) {
            setGameQuery({ platformId: null, platformName: null });
          } else {
            setGameQuery({
              platformId: platform.id,
              platformName: platform.name,
            });
          }
        }}
      >
        {platform.name}
      </p>
    </div>
  );
};

export default PlatformsListItem;

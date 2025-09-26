import { platforms } from "@/constants/platforms";
import PlatformsListItem from "./PlatformsListItem";

const PlatformsList = () => {
  return (
    <div className="py-3 px-2">
      <h1 className="text-2xl font-bold mb-5">Platforms</h1>
      <div className="space-y-3">
        {platforms.map((platform) => (
          <PlatformsListItem key={platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
};

export default PlatformsList;

import { platformIconMap } from "@/constants/platforms";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <div className="flex gap-1">
      {platforms.map(({ platform }) => {
        const Icon = platformIconMap[platform.slug];
        return (
          Icon && (
            <Icon
              key={platform.id}
              className="text-base text-muted-foreground"
            />
          )
        );
      })}
    </div>
  );
};

export default PlatformIconList;

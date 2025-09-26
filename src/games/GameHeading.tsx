import useGameQueryStore from "@/stores/game-query";
import { useEffect, useState } from "react";

const GameHeading = () => {
  const [heading, setHeading] = useState("");
  const platformName = useGameQueryStore((s) => s.gameQuery.platformName);
  const genreName = useGameQueryStore((s) => s.gameQuery.genreName);

  useEffect(() => {
    if (genreName && platformName) {
      setHeading(`${platformName} ${genreName} Games`);
    } else if (genreName) {
      setHeading(`${genreName} Games`);
    } else if (platformName) {
      setHeading(`${platformName} Games`);
    } else {
      setHeading("Games");
    }
  }, [platformName, genreName]);

  return (
    <div className="mt-2 text-3xl lg:text-4xl font-extrabold">{heading}</div>
  );
};

export default GameHeading;

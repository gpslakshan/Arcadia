import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import apiClient from "@/services/api-client";
import useGameQueryStore from "@/stores/game-query";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const PlatformSelector = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);

  useEffect(() => {
    apiClient
      .get<FetchPlatformsResponse>("/platforms")
      .then((res) => setPlatforms(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handlePlatformChange = (value: string) => {
    const selectedPlatformId = parseInt(value);
    setGameQuery({ platformId: selectedPlatformId });
  };

  if (error) {
    return null;
  }

  return (
    <Select disabled={loading} onValueChange={handlePlatformChange}>
      <SelectTrigger className="w-[200px] flex items-center justify-between">
        {loading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          <SelectValue placeholder="Platforms" />
        )}
      </SelectTrigger>
      {!loading && (
        <SelectContent>
          {platforms.map((platform) => (
            <SelectItem key={platform.id} value={platform.id.toString()}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectContent>
      )}
    </Select>
  );
};

export default PlatformSelector;

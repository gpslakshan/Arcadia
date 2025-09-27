import { Input } from "@/components/ui/input";
import useGameQueryStore from "@/stores/game-query";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);
  const [localSearch, setLocalSearch] = useState(searchText);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only update if value actually changed
      if (searchText !== localSearch) {
        setGameQuery({ searchText: localSearch });
      }
    }, 500); // debounce delay

    return () => clearTimeout(timer);
  }, [localSearch]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="search"
        placeholder="Search games..."
        className="pl-9" // add padding so text doesn’t overlap icon
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

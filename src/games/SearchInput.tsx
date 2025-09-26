import { Input } from "@/components/ui/input";
import useGameQueryStore from "@/stores/game-query";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [localSearch, setLocalSearch] = useState("");
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameQuery({ searchText: localSearch || null });
    }, 500); // debounce delay

    return () => clearTimeout(timer);
  }, [localSearch]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-9" // add padding so text doesn’t overlap icon
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;

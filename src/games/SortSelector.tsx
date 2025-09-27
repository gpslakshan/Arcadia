import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGameQueryStore from "@/stores/game-query";

const sortOrders = [
  { value: "-relevance", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);

  const handleSortOrderChange = (value: string) => {
    setGameQuery({ sortOrder: value });
  };

  return (
    <Select
      onValueChange={handleSortOrderChange}
      defaultValue={sortOrder ?? "-relevance"}
    >
      <SelectTrigger className="w-full md:w-[220px]">
        <SelectValue placeholder="Order by: Relevance" />
      </SelectTrigger>
      <SelectContent>
        {sortOrders.map((sortOrder) => (
          <SelectItem key={sortOrder.value} value={sortOrder.value}>
            {sortOrder.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelector;

import { Skeleton } from "@/components/ui/skeleton";

const GenreListItemLoadingSkeleton = () => {
  return (
    <div className="w-full flex items-center space-x-2">
      <Skeleton className="h-8 w-8 rounded-md" />
      <Skeleton className="flex-1 h-6" />
    </div>
  );
};

export default GenreListItemLoadingSkeleton;

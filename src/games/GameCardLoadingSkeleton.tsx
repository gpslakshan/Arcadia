import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GameCardLoadingSkeleton = () => {
  return (
    <Card className="py-0 overflow-hidden gap-0">
      {/* Image Section */}
      <Skeleton className="h-60 w-full" />

      {/* Content Section */}
      <div className="px-2 py-4">
        <div className="mb-2 flex justify-between items-center">
          <Skeleton className="h-5 w-[120px]" />
          <Skeleton className="h-5 w-8" />
        </div>
        <Skeleton className="h-6 w-full" />
      </div>
    </Card>
  );
};

export default GameCardLoadingSkeleton;

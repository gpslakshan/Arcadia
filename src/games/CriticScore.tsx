import { Badge } from "@/components/ui/badge";

interface Props {
  score: number | null;
}

const CriticScore = ({ score }: Props) => {
  let colorClass: string;

  if (!score) return null;

  if (score >= 75) {
    colorClass = "border-green-500 text-green-500"; // good score
  } else if (score >= 50) {
    colorClass = "border-yellow-500 text-yellow-500"; // average score
  } else {
    colorClass = "border-red-500 text-red-500"; // poor score
  }

  return (
    <Badge className={`text-xs font-medium ${colorClass}`} variant="outline">
      {score}
    </Badge>
  );
};

export default CriticScore;

import { Badge } from "@/components/ui/badge";

interface Props {
  score: number | null;
}

const CriticScore = ({ score }: Props) => {
  let colorClass: string;

  if (!score) return null;

  if (score >= 75) {
    colorClass = "bg-green-100 text-green-800"; // good score
  } else if (score >= 50) {
    colorClass = "bg-yellow-100 text-yellow-800"; // average score
  } else {
    colorClass = "bg-red-100 text-red-800"; // poor score
  }

  return <Badge className={colorClass}>{score}</Badge>;
};

export default CriticScore;

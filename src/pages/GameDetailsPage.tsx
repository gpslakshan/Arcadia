import { useParams } from "react-router";

const GameDetailsPage = () => {
  const { slug } = useParams();

  return <div className="h-full mt-15">Details for game {slug}</div>;
};

export default GameDetailsPage;

import { useParams } from "react-router";

const GameDetailsPage = () => {
  const { id } = useParams();

  return <div className="h-full">Details for game {id}</div>;
};

export default GameDetailsPage;

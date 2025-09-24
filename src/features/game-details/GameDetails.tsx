import { useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-black text-white h-full">Details for game {id}</div>
  );
};

export default GameDetails;
